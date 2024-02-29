const defaultState = {
    num: 202
}

const reducer = (state = defaultState, action: { type: string, val: number }) => {
    const newState = JSON.parse(JSON.stringify(state))
    // 修改仓库数据

    switch (action.type) {
        case "add":
            newState.num++
            break;
    }

    return newState
}

export default reducer