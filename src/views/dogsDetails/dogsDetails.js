import React, { useState, useEffect } from 'react';
import { fetchDogsById } from '../../services/dogsfetch';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function DogsDetails() {
  const params = useParams();
  const [dogsDetails, setDogsDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogsById(params.id);

      setDogsDetails(data);
    };
    fetchData();
  }, [params.id]);
  return (
    <div className="dogDetails">
      <h2>Dog Details</h2>
      <h3>{dogsDetails.name}</h3>
      <p>Age: {dogsDetails.age}</p>
      <p>Breed: {dogsDetails.breed}</p>
      <p>Bio: {dogsDetails.bio}</p>
      <img className="img" src={`${dogsDetails.image}`} />
      <Link to="/dogs/:id/edit">Edit</Link>
    </div>
  );
}
