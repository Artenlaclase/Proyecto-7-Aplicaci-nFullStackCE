const reducer = (globalState, action) => {
    switch(action.type) {
        case "OBTENER-GUITARRAS":
            return {
                ...globalState,
                guitars: action.payload
            }
        default:
            return globalState
    }
}

export default reducer