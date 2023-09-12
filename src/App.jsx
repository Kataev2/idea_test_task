import { useState } from "react";
import Filter from "./components/Filter/Filter";
import TicketsList from "./components/TicketsList";
import { ticketsData } from "./http/ticketApi"
import { useTickets } from "./hooks/useTickets";

function App() {
    const filterList = [
        { id: 1, value: 0, label: 'Без пересадок'},
        { id: 2, value: 1, label: '1 пересдка'},
        { id: 3, value: 2, label: '2 пересадки'},
        { id: 4, value: 3, label: '3 пересадки'},
    ];

    const [filter, setFilter] = useState([]);
    const filtredTickets = useTickets(ticketsData, filter);

    return (
        <main className="container">
            <Filter
                filterList={filterList}
                filter={filter}
                setFilter={setFilter}
            />
            <TicketsList
                tickets={filtredTickets}
            />
        </main>
    )
}

export default App
