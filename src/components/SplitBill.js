import { useState } from "react";
import Button from "./Button";

function SplitBill({ onSelectFriend, selectFriend }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSelectFriend(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>🧾 SPLIT A BILL WITH {selectFriend.name}</h2>
      <label>💲 Bill Amount</label>
      <input
        type="text"
        id="billAmount"
        value={bill}
        onChange={e => setBill(Number(e.target.value))}
      />
      <label>🧍‍♂️ Your expense</label>
      <input
        type="text"
        id="tipPercentage"
        value={paidByUser}
        onChange={e =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />
      <label>👫 {selectFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />
      <label>🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={e => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}

export default SplitBill;
