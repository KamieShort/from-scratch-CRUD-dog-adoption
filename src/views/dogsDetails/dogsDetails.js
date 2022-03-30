import React, { useState, useEffect } from 'react';
import { deleteDog, fetchDogsById } from '../../services/dogsfetch';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './dogsDetails.css';

export default function DogsDetails() {
  const params = useParams();
  const id = params.id;
  const [dogsDetails, setDogsDetails] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogsById(id);

      setDogsDetails(data);
    };
    fetchData();
  }, [id]);

  const remove = async () => {
    await deleteDog(id);
    history.push('/');
  };

  if (!dogsDetails) return <div>...Loading</div>;

  return (
    <div className="dogDetails">
      <h2>Dog Details</h2>
      <h3>{dogsDetails.name}</h3>
      <p>Age: {dogsDetails.age}</p>
      <p>Breed: {dogsDetails.breed}</p>
      <p>Bio: {dogsDetails.bio}</p>
      <img className="img" src={`${dogsDetails.image}`} />
      {/* <Link to="/dogs/:id/edit">Edit</Link> */}
      <p className="edit-link">
        <Link to={`/dogs/${dogsDetails.id}/edit`}>Edit</Link>
        <button onClick={remove}>Delete</button>
      </p>
    </div>
  );
}
