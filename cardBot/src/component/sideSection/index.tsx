import styles from './index.module.scss'
import { useAtom } from 'jotai'
import { promptAtom, resultAtom, useCard } from '../../store'
import { getMessage } from './getMessage'


export function SideSection() {
    const state = '输入任何内容'
    const temp = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Sed ipsa et doloremque cumque fugit nemo, temporibus enim minima adipisci ad accusamus tempore ? Quae illo doloremque tenetur, adipisci dignissimos maxime voluptatibus ?'
    const [prompt, setPrompt] = useAtom(promptAtom)
    const { appendCard } = useCard()
    const [, setResult] = useAtom(resultAtom)
    function sumit() {
        getMessage({ prompt, setPrompt, appendCard, setResult })
    }

    return (
        <div className={styles.sideSection}>
            <div className={styles.logCard}>
                <div className={styles.header} onClick={sumit}>{state}</div>
                <div className={styles.content}>
                    <div className={styles.l}>
                        <textarea
                            className={styles.lContent}
                            placeholder={temp}
                            style={{ resize: 'none', outline: 'none', minHeight: '300px', border: 'none' }}
                            value={prompt}
                            onChange={e => setPrompt(e.target.value)}
                        />
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <div
                        className={styles.sumitButton}
                        onClick={sumit}
                    >
                        <div className={styles.sumitButtonText}>Create Card-moji</div>

                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.33334 2L12.6667 8L3.33334 14V2Z"
                                stroke="#2C2C2C"
                                style={{
                                    stroke: '#2C2C2C',
                                    strokeOpacity: 1
                                }}
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                    </div>
                </div>
            </div>
        </div>
    )
}

