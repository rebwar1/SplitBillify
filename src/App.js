import React, { useState } from "react";
import FriendList from "./components/FriendList";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import SplitBill from "./components/SplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [selectFriend, setSelectFriend] = useState(null);
  const [showAddFriends, setShowAddFriends] = useState(false);

  function handleAddFriend(friend) {
    setFriends(friends => [friend, ...friends]);
  }

  function handleShowAddFriends() {
    setShowAddFriends(show => !show);
  }
  return (
    <div className="app">
      <div className="leftSide">
        <FriendList friends={friends} />
        {showAddFriends && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowAddFriends}>
          {showAddFriends ? "Close" : "Add friend"}
        </Button>
      </div>
      <div className="friends">
        <SplitBill />
      </div>
    </div>
  );
}

export default App;
