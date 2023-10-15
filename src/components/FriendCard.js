export function FriendCard({ friend, selectedFriend, onHandleSelectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)} CZK
        </p>
      )}

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)} CZK
        </p>
      )}

      {friend.balance === 0 && <p>There is no debt!</p>}

      <button className="button" onClick={() => onHandleSelectedFriend(friend)}>
        {isSelected ? 'close' : 'select'}
      </button>
    </li>
  );
}
