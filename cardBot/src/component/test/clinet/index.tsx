import { useState } from "react";
import './index.css';

export const Page = () => {
    const [result, setResult] = useState('返回结果 🔙');
    const [url, setUrl] = useState('');

    const start = async () => {
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
                setResult(JSON.stringify(data.texts, null, 2));
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
    };

    return (
        <div className="container">
            <div className="input">
                <textarea
                    placeholder="输入测试内容"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <button onClick={start}>startButton</button>
            </div>
            <div className="return">
                <div className="return-content">{result}</div>
            </div>
        </div>
    );
};