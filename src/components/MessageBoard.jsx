import { useState } from "react";

function MessageBoard() {
  const [inputMessage, setInputMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const handleSubmit = () => {
    const messageArray = [...messageList, inputMessage];
    if (inputMessage) {
      setMessageList(messageArray);
      setInputMessage("");
    }
  };

  const handleRemove = (index) => {
    const messageArray = [...messageList];
    messageArray.splice(index, 1);
    setMessageList(messageArray);
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
            value={inputMessage}
            onChange={(event) => {
              setInputMessage(event.target.value);
            }}
          />
        </label>
        <button className="submit-message-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className="board">
        {messageList.map((message, index) => {
          return (
            <div className="message" key={index}>
              <h1>{message}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  handleRemove(index);
                }}
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
