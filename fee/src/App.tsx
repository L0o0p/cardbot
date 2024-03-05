
import styles from './App.module.scss'

function App() {

  return (
    <div className={styles.bg}>
      <div className={styles.window}>
        <div className={styles.windowSide}>
          <div className={styles.block}></div>
        </div>
        <div className={styles.windowSide}>
          <div className={styles.block} style={{ width: '900px' }}></div>
        </div>
      </div>
    </div>
  )
}

export default App
