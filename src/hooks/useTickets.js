import { useMemo } from "react"

export const useTickets = (tickets, filter) => {
    const filtredTickets = useMemo(() => {
        if(filter.length === 0) return tickets;

        const newTicketsArray = [...tickets].filter((ticket) => filter.includes(ticket.stops));
        return newTicketsArray;
    }, [tickets, filter])

    return filtredTickets;
}