import { useSelector, useDispatch } from "react-redux"

function Home() {
    // store
    const { num } = useSelector((state: { type: RootState }) => ({
        num: state.num
    }))

    const dispatch = useDispatch()
    const changNum = () => {
        dispatch({ type: "add" })
    }

    return (
        <><div>-》Home {num}</div>
            <div>  <button onClick={changNum}>Add 1</button></div>
        </>
    )
}

export default Home
