import { BUY_SOFTY } from "./softyType";

const initialState = {
    numSofty: 35
}

const softyReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_SOFTY:
            return {
                ...state,
                numSofty: state.numSofty - 1
            }
        default: return state
    }
}

export default softyReducer;