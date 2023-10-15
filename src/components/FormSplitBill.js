import { useState } from 'react';

export function FormSplitBill({ selectedFriend, onHandleChangeBill }) {
  const [bill, setBill] = useState('');
  const [paidByUser, setPaidByUser] = useState('');
  const [paidBy, setPaidBy] = useState('user');

  const paidByFriend = bill ? bill - paidByUser : '';

  function onSubmit(e) {
    e.preventDefault();

    onHandleChangeBill(paidBy === 'user' ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={onSubmit}>
      <h2>Split the bill with {selectedFriend.name}</h2>

      <label>💵Bill value</label>
      <input
        type="text"
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>

      <label>🧝‍♀️Your expense</label>
      <input
        type="text"
        onChange={(e) => setPaidByUser(Number(e.target.value))}
      ></input>

      <label>🧝‍♂️{selectedFriend.name}'s expense</label>
      <input
        type="text"
        onChange={(e) => e.target.value}
        value={paidByFriend}
      ></input>

      <label>🤑Who is paying the bill?</label>
      <select onChange={(e) => setPaidBy(e.target.value)}>
        <option value="you">You</option>
        <option value="sarah">{selectedFriend.name}</option>
      </select>

      <button className="button">Split bill</button>
    </form>
  );
}
