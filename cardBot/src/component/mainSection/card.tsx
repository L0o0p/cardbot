import remarkGfm from 'remark-gfm'
import styles from './index.module.scss'
import ReactMarkdown from 'react-markdown'
interface CardProps {
    emoji: string
    title: string
    content: string
}
export const Card = (props: CardProps) => {
    const { emoji, title, content } = props
    const getCardContent = () => {
        const textToCopy = (emoji + title + '\n' + content);// 需要复制的文本内容
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('《' + emoji + title + '》' + '\n' + '卡片内容已成功复制到剪贴板');
        }).catch(err => {
            console.error('无法复制链接: ', err);
            alert('无法复制链接: ');
        });
    }
    return (
        <div className={styles.logCard} >
            <div className={styles.headerLine} onClick={getCardContent}>
                <ReactMarkdown className={styles.header}>{emoji}</ReactMarkdown>
            </div>
            <div className={styles.content}>
                <div className={styles.l}>
                    <ReactMarkdown className={styles.title}>{title}</ReactMarkdown>
                    <ReactMarkdown
                        className={styles.lContent}
                        remarkPlugins={[remarkGfm]}
                    >
                        {content}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    )
}