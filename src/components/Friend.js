import Button from "./Button";

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p>{friend.balance}</p>
      <Button onClick={() => alert("Hello")}>Click Me</Button>
    </li>
  );
}

export default Friend;
