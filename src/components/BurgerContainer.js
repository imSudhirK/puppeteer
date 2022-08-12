import React from "react";
import { connect } from 'react-redux';
import { buy_burger } from "../redux";


function BurgerContainer(props) {
    return (
        <div>
            <h2>Number of Burgers - {props.numBurger}</h2>
            <button onClick={props.buy_burger}>Buy a Burger</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numBurger: state.burger.numBurger
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buy_burger: () => dispatch(buy_burger())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerContainer);