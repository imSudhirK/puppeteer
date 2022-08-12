import React, { useState } from "react";
import { connect } from 'react-redux';
import { buy_cake } from '../redux';

function NewCakeContainer(props){
    const [number, setNumber] =  useState(1);
    return(
        <div>
            <h2>Number of Cakes - {props.numCakes}</h2>
            <input type="text" value={number} onChange={(event)=> setNumber(event.target.value)}/>
            <button onClick={() => props.buy_cake(number)}>Buy {number} cakes </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        numCakes: state.cake.numCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        buy_cake: (number) => dispatch(buy_cake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);