import React, { useState } from 'react';
import DogForm from '../../services/components/DogForm/dogForm';

export default function NewForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');

  return (
    <div>
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
        }}
      />
    </div>
  );
}
