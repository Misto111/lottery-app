import { getRandomNumber, getrandomColor } from "./utils";

export function registerTicket() {
    const newTicket = {
        number : getRandomNumber(),
        color : getrandomColor()
    };

    this.setState( (prevState) => {
        prevState.tickets.push( newTicket );

        return {
            tickets : prevState.tickets,
            remainingTickets : -- prevState.remainingTickets
        }
    } );

}

export function removeTicket( index ) {
    this.setState(( prevState ) => {
          prevState.tickets.splice( index, 1 );

          return {
            tickets            : prevState.tickets,
            remainingTickets   : ++ prevState.remainingTickets
            
          }
    } );
}

export function finish() {
    this.setState( { finished: true } );
}