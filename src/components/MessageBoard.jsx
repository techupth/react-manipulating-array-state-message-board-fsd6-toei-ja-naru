import { useState } from "react";
function MessageBoard() {
  const [message, setMessage] = useState([
    "Hello all ! This is first message.",
  ]);
  const [input, setInput] = useState("");
  const handleOnChangeInput = (e) => {
    setInput(e.target.value);
    // console.log(input);
  };
  const handleOnClickSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter message!!!");
    } else {
      setMessage([input, ...message]);
      setInput("");
    }
  };
  const handleOnClickDelete = (index) => {
    const newMessage = [...message];
    newMessage.splice(index, 1);
    setMessage(newMessage);
  };
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={input}
            onChange={handleOnChangeInput}
            required
          />
        </label>
        <button className="submit-message-button" onClick={handleOnClickSubmit}>
          Submit
        </button>
      </div>
      <div className="board">
        {message.map((value, i) => {
          return (
            <div className="message" key={i}>
              <h1>{value}</h1>
              <button
                className="delete-button"
                onClick={() => handleOnClickDelete(i)}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
