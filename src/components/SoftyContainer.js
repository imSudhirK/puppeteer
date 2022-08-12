import React from "react";
import { connect } from 'react-redux';
import { buy_softy } from '../redux';


function SoftyContainer(props) {
    return (
        <div>
            <h2> Number of Softy - {props.numSofty} </h2>
            <button onClick={props.buy_softy}>Buy Softy</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numSofty: state.softy.numSofty
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buy_softy: () => dispatch(buy_softy())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SoftyContainer);