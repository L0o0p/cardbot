import { Card } from './card';
import styles from './index.module.scss'
import { useCard } from '../../store';
import { Key, useEffect } from 'react';

export function MainSection() {
    // 定义一个数组，包含每个卡片的数据
    const { cardStore, setCardStore } = useCard()

    // 当App组件加载时，从localStorage加载卡片数据
    useEffect(() => {
        const storedData = localStorage.getItem('cards');
        console.log("尝试从localStorage加载数据", storedData);  // 日志输出，帮助调试
        if (storedData) {
            setCardStore(JSON.parse(storedData));
        }
    }, [setCardStore]);

    // 当卡片数据更新时，将其保存到localStorage
    useEffect(() => {
        console.log("保存数据到localStorage", cardStore);  // 日志输出，帮助调试
        localStorage.setItem('cards', JSON.stringify(cardStore));
    }, [cardStore]);


    return (
        < div className={styles.mainSection} >
            < div className={styles.height} >
                <div className={styles.grid}>
                    {cardStore.map((card: { emoji: string; title: string; content: string; }, index: Key | null | undefined) => (
                        <Card
                            key={index}
                            emoji={card.emoji}
                            title={card.title}
                            content={card.content}
                        />
                    ))}
                </div >
            </div>
        </div >
    )

}





