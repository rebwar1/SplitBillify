import React, { useState } from "react";
import FriendsList from "./components/FriendList";
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
  function handleSelectFriend(value) {
    setFriends(friends =>
      friends.map(friend =>
        friend.id === selectFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectFriend(null);
  }
  function handleSelection(friend) {
    setSelectFriend(cur => (cur?.id === friend.id ? null : friend));
    setShowAddFriends(false);
  }
  return (
    <div className="app">
      <div className="leftSide">
        <FriendsList
          friends={friends}
          selectedFriend={selectFriend}
          onSelection={handleSelection}
        />
        {showAddFriends && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowAddFriends}>
          {showAddFriends ? "Close" : "Add friend"}
        </Button>
      </div>
      <div className="friends">
        {selectFriend && (
          <SplitBill
            onSelectFriend={handleSelectFriend}
            selectFriend={selectFriend}
            key={selectFriend.id}
          />
        )}
      </div>
    </div>
  );
}

export default App;
