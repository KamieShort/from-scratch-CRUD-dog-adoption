import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDogsById, updateDog } from '../../services/dogsfetch';
import DogForm from '../../services/components/DogForm/dogForm';

export default function EditPage() {
  const params = useParams();

  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [breed, setBreed] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

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
  const submit = async () => {
    try {
      await updateDog({ id: params.id, name, age, breed, bio, image });
      history.push(`/dogs/${params.id}`);
    } catch (e) {
      setError('error');
    }
  };

  return (
    <div>
      {error && (
        <p>
          {error} <span onClick={() => setError('')}></span>
        </p>
      )}

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
