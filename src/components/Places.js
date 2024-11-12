import React, { useState } from 'react';
import './Places.css';

const Places = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const places = [
    { 
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdPQhSf_aPyXD_Ns5KpN2I8W18YxxKXTMoXg&s', 
      alt: 'Manali', 
      description: ' perfect for photos that showcase the natural beauty of Manali and its surroundings,',
      details: 'A beautiful beach that stretches along the coast with golden sand and clear waters. Perfect for swimming, sunbathing, and relaxing.',
    },
    { 
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp-Pig9dEUlk4KBUfLpVJDcXh3ThLSU7OxSA&s', 
      alt: 'Ooty', 
      description: 'A mountain retreat with stunning views.',
      details: 'An idyllic mountain retreat surrounded by towering peaks. Ideal for nature lovers, with hiking trails and panoramic views.',
    },
    { 
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRViESYSRiXH7FGB8OspySANLtLpwqs9mP-gw&s', 
      alt: 'Kerala', 
      description: 'A historic city with ancient architecture.',
      details: 'Step back in time and explore the ancient ruins, historical buildings, and vibrant culture of this historic city.',
    },
    { 
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvkPaXJBF6Qrf-yPj43EwPDVuyABdcvRHZbg&s', 
      alt: 'Goa', 
      description: 'Beautiful beach with golden sand.',
      details: 'Immerse yourself in the tranquil atmosphere of this lush garden, surrounded by colorful flowers and serene pathways.',
    },
    { 
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReevqp3yQCZwOlOOnm8_ncLfXXG5cMYq9wEw&s', 
      alt: 'Leh Ladakh', 
      description: 'Vibrant city with a rich cultural scene.',
      details: 'This bustling city offers a rich cultural experience, with museums, theaters, and vibrant street art.',
    },
    { 
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjA5ePmicGUHHayiV_FdmABuwzu1S_4lFXDw&s', 
      alt: 'Maldives', 
      description: 'A quiet lakeside village.',
      details: 'Escape to this charming lakeside village for a peaceful getaway. Perfect for boating, fishing, or simply relaxing by the water.',
    },
    { 
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClvMTbC8tpGr5flfLSrdPHEkmxy_YEAbmNA&s', 
      alt: 'New York', 
      description: 'land of the free and home of the brave!',
      details: 'Sunshine, clear waters, and palm trees—this tropical island is the perfect destination for beach lovers.',
    },
    
    
  ];

  return (
    <div className="places">
      <h2>Popular Places</h2>
      <div className="cards-container">
        {places.map((place, index) => (
          <div key={index} className="place-card" onClick={() => setSelectedPlace(place)}>
            <img src={place.src} alt={place.alt} />
            <div className="place-card-info">
              <h3>{place.alt}</h3>
              <p>{place.description}</p>
              <button>View More</button>
            </div>
          </div>
        ))}
      </div>

      {/* Display more information when a place is selected */}
      {selectedPlace && (
        <div className="place-description">
          <h3>{selectedPlace.alt}</h3>
          <img src={selectedPlace.src} alt={selectedPlace.alt} className="place-description-image" />
          <p>{selectedPlace.details}</p>
          <button onClick={() => alert('Booking place...')}>Book Now</button>
          <button onClick={() => setSelectedPlace(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Places;
