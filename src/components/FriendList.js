import Friend from "./Friend";

function FriendList({ friends }) {
  return (
    <div>
      <ul>
        {friends.map(friend => (
          <Friend friend={friend} />
        ))}
      </ul>
    </div>
  );
}

export default FriendList;
