import { FriendCard } from './FriendCard';

export function Friends({ friends, selectedFriend, onHandleSelectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <FriendCard
          key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
          onHandleSelectedFriend={onHandleSelectedFriend}
        />
      ))}
    </ul>
  );
}
