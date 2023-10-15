import { useState } from 'react';

export function FormAddFriend({ onHandleAddFriend }) {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  function onSubmit(e) {
    e.preventDefault();

    if (!name || !url) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${url}?=${id}`,
      balance: 0,
    };

    onHandleAddFriend(newFriend);
  }

  return (
    <>
      <form className="form-add-friend" onSubmit={onSubmit}>
        <label>🧚‍♀️Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)}></input>
        <label>📷Image URL</label>
        <input type="text" onChange={(e) => setUrl(e.target.value)}></input>
        <button className="button">Add</button>
      </form>
    </>
  );
}
