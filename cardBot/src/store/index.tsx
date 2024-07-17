import { atom, useAtom } from "jotai";

// 输入内容状态
export const promptAtom = atom<string>('');
// 输出内容状态(标题+内容)
export const resultAtom = atom<{
    emoji: string;
    title: string;
    content: string;
}>({
    emoji: '😬',
    title: 'AI#dea  Title',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed ipsa et doloremque cumque fugit nemo, temporibus enim minima adipisci ad accusamus tempore? Quae illo doloremque tenetur, adipisci dignissimos maxime voluptatibus?'
});

// GPT访问信息
export const user = {
    BASE_URL: "https://dify.cyte.site:2097/v1",
    Authorization: 'app-MWxssU6nVUwWkJ58oYt5pQzq'
}

// 卡片管理
// 预设卡片列表
const defaultCardStore = [
    {
        emoji: '😂',
        title: 'AI#dea 创新应用 - 绽放你的AI创想',
        content: 'Exciting times ahead as we prepare to launch our new project. Stay tuned for updates and sneak peeks!Exciting times ahead as we prepare to launch our new project. Stay tuned for updates and sneak peeks!'
    },
    {
        emoji: '🚀',
        title: 'Project Launch',
        content: 'Exciting times ahead as we prepare to launch our new project. Stay tuned for updates and sneak peeks!'
    },
    {
        emoji: '🔒',
        title: 'Security Update',
        content: 'Your security is important to us. Please make sure to update your passwords and enable two-factor authentication.'
    },
]
// 尝试从localStorage中加载初始化数据
const storedData = localStorage.getItem('cards');
const initialCardStore = storedData ? JSON.parse(storedData) : defaultCardStore;
// 卡片存储列表
export const cardStoreAtom = atom(initialCardStore);
// 修改卡片列表
export const useCard = () => {
    const [cardStore, setCardStore] = useAtom(cardStoreAtom)
    const appendCard = (newCard: { emoji: string; title: string; content: string }) => {
        const newCardStore = cardStore.slice()
        newCardStore.push(newCard)
        setCardStore(newCardStore)
    }
    return { cardStore, appendCard, setCardStore }
}