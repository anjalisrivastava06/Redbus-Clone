import { useState, useEffect } from 'react';
import BusListResult from './BusListResult';


const BusList = ({ source,destination }) => { 
    const [buses, setBuses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${source}&destination=${destination}`);
                const data = await response.json();
                setBuses(data);
                console.log(data)
            } catch (error) {
                console.error(error);
            }
        };
 
        fetchData();
    }, [source, destination]);


    const handleSort = (sortBy) => {
        switch (sortBy) {
        case "departure":
            setBuses([...buses].sort((a, b) => a.departure - b.departure));
            break;
        case "arrival":
            setBuses([...buses].sort((a, b) => a.arrival - b.arrival));
            break;
        case "price":
            setBuses([...buses].sort((a, b) => a.price - b.price));
            break;
        default:
            setBuses([...buses]);
        }
    };

    return (
        <div style={{backgroundColor:"#EA4A4A"}} className="p-2 d-flex flex-column">
            <div className="bg-white p-2 d-flex w-75 align-self-center">
            <h4 className="w-50">SORT BY:</h4>
                <div className="d-flex justify-content-around w-100 bg-color-#FDBAB8" >
                    <button onClick={() => handleSort("departureTime")}>Departure Time</button>
                    <button onClick={() => handleSort("arrivalTime")}>Arrival Time</button>
                    <button onClick={() => handleSort("ticketPrice")}>Ticket Price</button>
                </div>
            </div>
        
            {buses.map((bus) => (
                <BusListResult bus={bus}/>
            ))}
        </div>
    );
};

export default BusList;

