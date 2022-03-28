import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDogs } from '../../services/dogsfetch';

export default function DogsList() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      console.log(data);

      setDogs(data);
    };
    fetchData();
  }, []);

  return (
    <div className="dogs">
      <h1>All Things Dogs!</h1>

      {dogs.map((dog) => (
        <>
          <div key={dog.id} {...dog}>
            <h2>{dog.name}</h2>
            <img className="img" src={`${dog.image}`} />
          </div>
        </>
      ))}
    </div>
  );
}
