import { useState } from "react";

function MessageBoard() {
  const [inputMessage, setInputMessage] = useState("");
  const [message, setMessage] = useState([]);

  const handleChangeMessage = (event) => {
    setInputMessage(event.target.value);
  };

  const handleClickSubmit = (event) => {
    event.preventDefault();
    setMessage([...message, inputMessage]);
    setInputMessage("");
  };

  const handleDeleteMessage = (i) => {
    const newMessage = [...message];
    newMessage.splice(i, 1);
    setMessage(newMessage);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={inputMessage}
            onChange={handleChangeMessage}
          />
        </label>
        <button className="submit-message-button" onClick={handleClickSubmit}>
          Submit
        </button>
      </div>
      {message.map((item, index) => {
        return (
          <div class="board" key={index}>
            <div className="message">
              <h1> {item} </h1>
              <button
                className="delete-button"
                onClick={() => handleDeleteMessage(index)}
              >
                x
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MessageBoard;
