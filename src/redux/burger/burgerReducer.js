import { BUY_BURGER } from "./burgerType"

const initialState = {
    numBurger: 30
}

const burgerReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_BURGER:
            return {
                ...state,
                numBurger: state.numBurger - 1
            }
        default: return state
    }
}

export default burgerReducer;