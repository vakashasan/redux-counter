const AddCounterAction = () => {
    return (dispatch)=> {
        console.log("add call")
        dispatch( { 
            type : "ADD_COUNTER"
            
        })
    }
}

const MinusCounterAction =() => {
    console.log("minus call")
    return (dispatch) => {
        dispatch( { 
            type : "MINUS_COUNTER"
        })
    }
}



export { AddCounterAction , MinusCounterAction} 