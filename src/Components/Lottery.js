import React, { Component } from "react";

import LotteryTicket from "./LotteryTicket";
import { removeTicket } from "../Helper/actions";


class Lottery extends Component {
    renderButton() {

        const { remainingTickets, actions } = this.props;

        if (this.props.remainingTickets > 0) {
            return <button onClick={actions.registerTicket} >КУПИ БИЛЕТ</button>;
        }

        return <button onClick= { actions.finish }>Провери за печалба</button>;

    }

    renderTickets() {
        const { tickets, actions } = this.props;
        const lotteryTicketActions = { removeTicket: actions.removeTicket };

        const lotteryTickets = tickets.map( (ticket, index) => {

            return (
                <LotteryTicket
                    actions = {lotteryTicketActions}
                    color  = {ticket.color}
                    number = {ticket.number}
                    index  = { index }
                    key    = { index }
                />
            );
          

        } );

        return lotteryTickets;
    }
   

    render() {
        return (
            <>
                <h2>Лотария</h2>
                { this.renderButton() }
                <br />
                <small>оставащи: {this.props.remainingTickets}</small>
                <br />
                <hr />
                { this.renderTickets() }
            </>
        );
    }
}

export default Lottery;