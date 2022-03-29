import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DogForm from '../../services/components/DogForm/dogForm';
import { newDog } from '../../services/dogsfetch';

export default function NewForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [breed, setBreed] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  const submit = async () => {
    try {
      await newDog({ name, age, breed, bio, image });
      history.push('/');
    } catch (e) {
      setError('Error-');
    }
  };

  return (
    <div>
      {error && (
        <p>
          {error} <span onClick={() => setError('')}>Try Again</span>
        </p>
      )}
      <div>New Form</div>
      <DogForm
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
