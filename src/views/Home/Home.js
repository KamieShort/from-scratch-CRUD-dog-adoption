import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchDogs } from '../../services/dogsfetch';
import './Home.css';

export default function DogsList() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();

      setDogs(data);
    };
    fetchData();
  }, []);

  if (!dogs) return <div>...Loading</div>;

  return (
    <div className="dogs">
      <h1>All Things Dogs!</h1>

      {dogs.map((dog) => (
        <div key={dog.id}>
          <Link to={`/dogs/${dog.id}`}>
            <h2>{dog.name}</h2>
          </Link>
          <img className="img" src={`${dog.image}`} />
        </div>
      ))}
    </div>
  );
}
