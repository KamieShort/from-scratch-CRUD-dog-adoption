import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchDogsById, updateDog } from '../../services/dogsfetch';
import DogForm from '../../services/components/DogForm/dogForm';
import './EditPage.css';

export default function EditPage() {
  const params = useParams();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogsById(params.id);

      setName(data.name);
      setAge(data.age);
      setBreed(data.breed);
      setBio(data.bio);
      setImage(data.image);
    };
    fetchData();
  }, [params.id]);
  const submit = async (e) => {
    e.preventDefault();
    try {
      await updateDog({ id: params.id, name, age, breed, bio, image });
      history.push(`/dogs/${params.id}`);
    } catch (e) {
      setError('Error-');
    }
  };

  return (
    <div className="edit-form">
      <h1>Edit Dog</h1>
      {error && (
        <p>
          {error} <span onClick={() => setError('')}>Try Again</span>
        </p>
      )}
      <DogForm
        className="dog-form"
        {...{
          name,
          setName,
          age,
          setAge,
          breed,
          setBreed,
          bio,
          setBio,
          image,
          setImage,
          submit,
        }}
      />
    </div>
  );
}
