import { useEffect } from 'react'
import styles from './App.module.scss'
import { MainSection } from './component/mainSection'
import { SideSection } from './component/sideSection'
import { useCard } from './store'
// import { Page } from './component/test/clinet'

function App() {
  const { cardStore } = useCard()
  useEffect(() => {
    console.log(cardStore)
  }, [cardStore])

  return (
    <div className={styles.container}>
      <SideSection />
      <MainSection />
    </div>
    // <Page />
  )
}

export default App
