import React from "react";
import { connect } from "react-redux/es/exports";
import { buy_cake } from '../redux';


function CakeContainer(props) {
    return (
        <div>
            <h2>Number of Cakes: {props.numCakes}</h2>
            <button onClick={props.buy_cake}>Buy a Cake</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numCakes: state.cake.numCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buy_cake: () => dispatch(buy_cake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);