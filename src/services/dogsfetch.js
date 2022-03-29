import { client, checkError } from './client';

export async function fetchDogs() {
  const resp = await client.from('dogs').select('*');
  return checkError(resp);
}

export async function fetchDogsById(id) {
  const resp = await client.from('dogs').select('*').match({ id }).single();
  return checkError(resp);
}

export async function newDog(dog) {
  const resp = await client.from('dogs').insert(dog);
  return checkError(resp);
}
