import { BUY_CAKE } from "./cakeTypes";

const initialState = {
    numCakes: 25
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numCakes: state.numCakes - action.payload
            }
        default: return state
    }
}

export default cakeReducer;