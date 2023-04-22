import { useState, useEffect } from 'react';
import BusListResult from './BusListResult';
import BusSeat from './BusSeat';


const BusList = ({ source,destination }) => { 
    const [buses, setBuses] = useState([]);
    const [selectedBus, setSelectedBus] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${source}&destination=${destination}`);
                const data = await response.json();
                setBuses(data);
            } catch (error) {
                console.error(error);
            }
        };
 
        fetchData();
    }, [source, destination]);

    const sortByprice=()=>{
        const sortprice=[...buses].sort((a,b)=>{
        const a1=parseInt(a.ticketPrice);
        const b1=parseInt(b.ticketPrice);
        return a1-b1;
        })
        setBuses(sortprice);   
    }

    const handleBusSelection = (bus) => {
        setSelectedBus(bus);
      };
    
      if (selectedBus) {
        return <BusSeat bus={selectedBus} />;
    }


    return (
        <div style={{ backgroundColor: "#EA4A4A" }} className="p-2 d-flex flex-column">
          <div className="bg-white p-2 d-flex w-75 align-self-center">
            <h4 className="w-50">SORT BY:</h4>
            <div className="d-flex justify-content-around w-100 bg-color-#FDBAB8 flex-wrap">
              <button className="m-1">Departure Time</button>
              <button className="m-1">Arrival Time</button>
              <button className="m-1" onClick={() => sortByprice("ticketPrice")}>Ticket Price</button>
            </div>
          </div>
      
          <div className="buslist_container">
            {buses.length === 0 && <p style={{ textAlign: 'center', fontSize: '30px', marginTop: '20px', fontWeight: '600' }}>No buses available</p>}
      
            {buses.map((bus) => (
              <div key={bus.id} className="bus_card" onClick={() => handleBusSelection(bus)}>
                <BusListResult bus={bus} />
              </div>
            ))
            }
          </div>
      
        </div>
      );
      
};

export default BusList;


