import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { buy_cake } from '../redux';


function HooksCakeContainer () {
    const numCakes = useSelector(state => state.cake.numCakes);
    const dispatch =  useDispatch();

    return(
        <div>
            <h2>Number of Cakes - {numCakes}</h2>
            <button onClick={() => dispatch(buy_cake())}>buy a cake</button>
        </div>
    )
}

export default HooksCakeContainer;