import axios, { AxiosError } from "axios";
import { user } from "../../store";
interface getMessageProps {
    prompt: string;
    setPrompt: (arg0: string) => void
    appendCard: (newCard: { emoji: string; title: string; content: string; }) => void;
    setResult: (arg0: string) => void
}

export async function getMessage(props: getMessageProps) {
    const { prompt, setPrompt, appendCard, setResult } = props
    console.log('prompt', prompt);
    if (!checkIfUrl(prompt)) {
        try {
            const { feedBack } = await sendMessage(prompt); // 发送消息到服务器
            const { processedResults } = seperateFeedBack(feedBack); // 处理反馈成对象格式
            if (processedResults) {// 将反馈添加到卡片列表中
                appendCard(processedResults)
                // console.log(cardStore);
            }
        } catch (error) {
            console.error('Failed to send message:', error);
            // setResult('Error sending message');
        }
    } else {
        const getWebContent = await getWebInfo(prompt, setResult)
        console.log(getWebContent?.webContent);
        const webContent = getWebContent?.webContent
        if (webContent) setPrompt('帮我总结一下这个网页的信息和内容，并按照要求格式返回：' + webContent);

        try {
            const { feedBack } = await sendMessage(prompt); // 发送消息到服务器
            const { processedResults } = seperateFeedBack(feedBack); // 处理反馈成对象格式
            if (processedResults) {// 将反馈添加到卡片列表中
                appendCard(processedResults)
                // console.log(cardStore);
            }
        } catch (error) {
            console.error('Failed to send message:', error);
            // setResult('Error sending message');
        }
    }

}



async function sendMessage(prompt: getMessageProps["prompt"]) {
    const url = `${user.BASE_URL}/chat-messages`; // 替换为正确的 URL
    const data = {
        query: prompt,//"你好，我想了解更多信息。",
        response_mode: "blocking",
        user: "user123",
        auto_generate_name: true,
        inputs: {}
    };

    try {
        const response = await axios.post(
            url,
            data,
            {
                headers: { 'Authorization': `Bearer ${user.Authorization}` }
            });
        const feedBack = response.data.answer
        console.log('Response:', feedBack);
        return { feedBack }
    } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
            console.error('Error Status:', axiosError.response.status);
            console.error('Error Data:', axiosError.response.data);
            return { feedBack: "Error: " + axiosError.response.data.message };  // 提供默认反馈
        } else if (axiosError.request) {
            console.error('No response received.');
            return { feedBack: "No response received" };  // 提供默认反馈
        } else {
            console.error('Error Message:', axiosError.message);
            return { feedBack: "Request setup error" };  // 提供默认反馈
        }
    }
}
function seperateFeedBack(feedBack: string) {
    // Emoji 的正则表达式
    const emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;

    // 查找第一个 emoji
    const emojiMatch = feedBack.match(emojiRegex);
    const emoji = emojiMatch ? emojiMatch[0] : '';
    const emojiIndex = emojiMatch ? feedBack.indexOf(emoji) : -1;
    console.log('emoji', emoji, emojiIndex)
    // 找到第一个换行符的位置
    const firstNewLineIndex = feedBack.indexOf('\n');
    // 找到第二个换行符的位置：因为本地模型默认开头有一个换行符
    const secondNewLineIndex = feedBack.indexOf('\n', firstNewLineIndex + 1);

    if (firstNewLineIndex) { console.log('找到第一次换行位置', firstNewLineIndex) }

    // 如果没有找到换行符，整个字符串被视为标题
    if (firstNewLineIndex === -1) {
        console.log('没找到找到换行位置')
        return {
            title: feedBack,
            content: ''
        };
    }

    // 提取标题和内容
    const title = feedBack.substring(6, secondNewLineIndex);
    const content = feedBack.substring(secondNewLineIndex + 1); // +1 跳过换行符

    const processedResults = {
        emoji: emoji,
        title: title,
        content: content
    };
    console.log('processedResults', processedResults);

    return { processedResults }
}
function checkIfUrl(input: string): boolean {
    const urlPattern = new RegExp(
        '(https?:\\/\\/)?' + // 协议
        '(([^:\\/\\s]+\\.)?([^:\\/\\s]+)\\.[^:\\/\\s]{2,}|' + // 域名
        'localhost|' + // 本地主机名
        '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|' + // IPv4 地址
        '\\[?[a-fA-F0-9:]+\\]?)' + // IPv6 地址
        '(\\:\\d+)?' + // 端口号
        '(\\/[^\\s]*)?', // 路径
        'i' // 忽略大小写
    );

    return urlPattern.test(input);
}
const getWebInfo = async (url: string, setResult: (arg0: string) => void) => {
    let webContent;
    console.log('开始爬虫');
    if (!url) {
        alert('请输入一个有效的网址');
        return;
    }

    setResult('正在爬虫，请稍候...');

    try {
        const response = await fetch('http://localhost:3000/scrape', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url })
        });

        const data = await response.json();

        if (response.ok) {
            webContent = JSON.stringify(data.texts, null, 2)
            setResult(webContent);
            console.log(webContent);

        } else {
            setResult('爬虫失败：' + data.error);
        }
    } catch (error: unknown) {  // 使用 `any` 类型来避免类型检查问题
        let errorMessage = '未知错误';
        if (error && typeof error === 'object' && 'message' in error) {
            errorMessage = (error as Error).message;
        }
        setResult('爬虫失败：' + errorMessage);
    }

    return { webContent }
};
