import React from "react";
import { connect } from "react-redux";
import { buy_cake, buy_softy} from '../redux';

function ItemContainer(props) {
    return (
        <div>
            <h2>Number of Items - { props.item}</h2>
            <button onClick={props.buy_item}>Buy Item</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake
        ? state.cake.numCakes
        : state.softy.numSofty ;
    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatch_function = ownProps.cake
        ? () => dispatch(buy_cake())
        : () => dispatch(buy_softy())
        return{
            buy_item: dispatch_function
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);