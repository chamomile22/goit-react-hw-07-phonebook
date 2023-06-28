const BASE_URL = 'https://649aaec6bf7c145d02394bc2.mockapi.io/contacts';

export const getContacts = async () => {
  const { data } = await fetch(BASE_URL, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  });
  return data;
};

export const addContact = async newContact => {
  const { data } = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newContact),
  });
  return data;
};

export const deleteContact = async id => {
  const { data } = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  return data;
};
