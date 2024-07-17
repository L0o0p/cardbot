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

    return (
        <div className={styles.logCard}>
            <div className={styles.headerLine}>
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