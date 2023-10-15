import { useState } from 'react';
import './index.css';
import { Friends } from './components/Friends';
import { FormSplitBill } from './components/FormSplitBill';
import { FormAddFriend } from './components/FormAddFriend';

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [isAddFriendOpen, setIsAddFriendOpen] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setIsAddFriendOpen((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);

    setIsAddFriendOpen(!isAddFriendOpen);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend((current) => (current?.id === friend.id ? null : friend));
  }

  function handleChangeBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }

  return (
    <div className="app">
      <div className="sidebar">
        <Friends
          friends={friends}
          selectedFriend={selectedFriend}
          onHandleSelectedFriend={handleSelectedFriend}
        />
        {isAddFriendOpen && (
          <FormAddFriend onHandleAddFriend={handleAddFriend} />
        )}
        {isAddFriendOpen ? (
          <button onClick={handleShowAddFriend} className="button">
            Close
          </button>
        ) : (
          <button onClick={handleShowAddFriend} className="button">
            Add Friend
          </button>
        )}
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onHandleSelectedFriend={handleSelectedFriend}
          onHandleChangeBill={handleChangeBill}
        />
      )}
    </div>
  );
}

export default App;
