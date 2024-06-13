import React, { Component } from "react";

import { getrandomColor } from "../Helper/utils";


class Final extends Component {

    isWinning() {
        const { tickets, winningNumber } = this.props;

        for ( const ticket of tickets ) {

            if( ticket.number === winningNumber ) {
                return true;
            } 
        }
        return false;
    }
    
renderWinning() {
    return(
        <>
        <h2>Честито!!!</h2>
        <h3>Ти спечели 1 милион лева!</h3>
        <p>Твоето печелившо число беше: <b>{ this.props.winningNumber }</b></p>
        </>
    );
}
renderTryAgain() {
    return(
        <>
        <h2>Опитай пак!</h2>
        <p>Печелившото число беше: <b>{ this.props.winningNumber }</b></p>
        </>
    );
}

    render() {
        return (
            <div style={{ backgroundColor: getrandomColor(), padding: 15}}>
                { this.isWinning() ? this.renderWinning() : this.renderTryAgain()}

            </div>
        );
    }
}

export default Final; 