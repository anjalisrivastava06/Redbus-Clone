import React, { useState } from 'react';
import BusSeat from './BusSeat.js';

function BusListResult({ bus }) {
  const [showSeatSelection, setShowSeatSelection] = useState(false);

  const handleOnClick = () => {
    setShowSeatSelection(true);
  };

  return (
    <>
      {showSeatSelection ? (
        <BusSeat />
      ) : (
        <div
          className="bg-white p-2 d-flex flex-wrap justify-content-between m-3 align-items-center"
          style={{ cursor: 'pointer' }}
          onClick={handleOnClick}
        >
          <div className="d-flex flex-column justify-content-between col-12 col-md-3 mb-2 mb-md-0">
            <div>BUSNAME</div>
            <h4>{bus.busName}</h4>
          </div>
          <div className="d-flex flex-column justify-content-between col-12 col-md-3 mb-2 mb-md-0">
            <div>DEPARTURE</div>
            <h4>{bus.departureTime}</h4>
          </div>
          <div className="d-flex flex-column col-12 col-md-3 mb-2 mb-md-0">
            <div>ARRIVAL</div>
            <h4>{bus.arrivalTime}</h4>
          </div>
          <div className="d-flex flex-column col-12 col-md-3 mb-2 mb-md-0">
            <div>PRICE</div>
            <h4>{bus.ticketPrice}/-</h4>
          </div>
        </div>
      )}
    </>
  );
}

export default BusListResult;
