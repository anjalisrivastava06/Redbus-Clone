import { useState } from 'react';
import BusList from './BusList';
import { BsArrowLeftRight } from "react-icons/bs";
import './MainPage.css'
import Navbar from './Navbar';
import toast from "react-hot-toast";


function MainPage() {
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [isSearchPerformed, setIsSearchPerformed] = useState(false);


    const handleSourceChange = (event) => {
        setSource(event.target.value);
    };

    const handleDestinationChange = (event) => {
        setDestination(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleSwitch = () => {
        setSource(destination);
        setDestination(source);
    };

    const handleSearch = async () => {
        try {
        const response = await fetch(`https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses 
            source=${source}&destination=${destination}&date=${date}`);
        const data = await response.json();
        console.log(data); 
        setIsSearchPerformed(true);
        } catch (error) {
        console.error(error);
        }

        if (source.trim() === "" || destination.trim() === "" || date.trim() === "") {
            toast.error("Please fill all fields");
        };
    }
    
    return (
        <>
        <Navbar />
            <h3 className='h1'>Book Your Tickets with Us!!</h3>
            

            <div className='form'>
                <input type="text" id="source" value={source} onChange={handleSourceChange} placeholder="Source" />

                <button className="main" onClick={handleSwitch}>
                    <span className="icons"><BsArrowLeftRight/></span>
                </button>

                <input type="text" id="destination" value={destination} onChange={handleDestinationChange} placeholder="Destination" />

                <input type="date" id="date" value={date} onChange={handleDateChange}  />

                <button className="main" onClick={handleSearch}>Search Buses</button>
            </div>
            
            {isSearchPerformed ? (
                <BusList source={source} destination={destination} date={date} />
            ) : (
                <div>
                    <img
                        style={{
                            height:'390px',
                            width: '100%',
                        }}
                        src='https://st.redbus.in/seo/ind/website-banner_1280x450_1631689052.png'
                        alt='redbus'
                    />
                </div>
            )}

        </>  
    );
};

export default MainPage;