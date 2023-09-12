import React from 'react';
import Ticket from './Ticket/Ticket';

function TicketsList({tickets}) {

    return (
        <div className='tickets-list'>
            {tickets && tickets.map((ticket, index) => {
                return <Ticket props={ticket} key={index}/>
            })}
        </div>
    );
}

export default TicketsList;