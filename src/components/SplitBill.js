import Button from "./Button";

function SplitBill({ onSelectFriend, selectFriend }) {
  return (
    <form className="form-split-bill">
      <h2>SPLIT A BILL WITH ...</h2>
      <label>Bill Amount</label>
      <input type="text" id="billAmount" />
      <label>Your expense</label>
      <input type="text" id="tipPercentage" />
      <label>Friend's expense</label>
      <input type="text" id="numberOfPeople" disabled />
      <label>Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">friend</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}

export default SplitBill;
