import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessageToChatBot } from "../actions/chatBotAction";

/*
  ! so the flow here is:
  1. We type text, and on each key press we update the text state
  2. We press the send button or hit enter key
  3. We dispatch that action to redux and to the API and we add new message to the 
     chat with our newly asked question
  4. Our chatBot state in redux store gets updated in chatBotReducer.js
  5. Component picks it up in UseEffect hook
  6. Component gets updated by bots new answer
*/

const ChatBot = () => {
  //state
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  // const [completeMessage, setCompleteMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      who: "ChatBot",
      message:
        "sample questions: convert something with 2 cups of butter in grams | find food substitutes by saying - what is substitute for flour",
    },
  ]);
  //chatBot state
  const chatBot = useSelector((state) => state.chatBot);
  //ref
  const messagesEnd = useRef(null);

  //dispatch
  const dispatch = useDispatch();

  // we wait for state update, add answer to chat, clear values and scroll
  useEffect(() => {
    if (text) {
      messages.push({
        who: "ChatBot",
        message: chatBot.answerText ? chatBot.answerText : "Answer not found",
      });
      setMessages(messages);
      setText("");

      // ! scroll to element - for now i havent figured out a better way
      // it woesnt work properly because there is a time offset after using setMessages
      // hook and them being rendered on the view

      // i think it would have helped if you had messages state but not with string values
      // but with divs
      // and after each question and answer you would update the array with new div
      // like instead of doing messages.push(blabla)
      // you would do
      /* 
        messages.push(
          <div className="message-look">
            <span style={{ color: "#C3A3FA" }}>{message.who}</span>:{" "}
            {message.message}
          </div>
        );
        
        and later on display just this messages by doing something like
        <div className="window-chat">
          <div className="window-chat-items">
            {messages}
          </div>
          <div
            style={{ float: "left", clear: "both" }}
            ref={messagesEnd}
          ></div>
        </div>
      */

      // because now you render every message after every state update
      // thats not good
      // it will get slower and slower after you hit more messages then 10
      // if you have like 1k messages then maybe you would notice
      setTimeout(() => {
        messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
      }, 60);
    }
    // ! we ignore the eslint rule, because we dont want to update on every state change, just the chatBot
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatBot]);

  //handlers
  const inputHandler = (e) => {
    // enter key press sens message
    if (e.keyCode === 13) {
      messagesHandler(e);
    } else {
      setText(e.target.value);
    }
  };
  // ! here we just send the message and save our asked question
  const messagesHandler = (e) => {
    e.preventDefault();
    dispatch(sendMessageToChatBot(text));
    messages.push({ who: "you", message: text });
    setMessages(messages);
  };

  return (
    <div className="chatBot">
      {!open && (
        <div className="chatBot-icon" onClick={() => setOpen(true)}>
          <svg
            className="svg-icon"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625l-1.993 6.368 6.946-3c1.705.439 3.334.641 4.864.641 7.174 0 12.136-4.439 12.136-9.634 0-5.812-5.701-10.007-12-10.007zm0 1c6.065 0 11 4.041 11 9.007 0 4.922-4.787 8.634-11.136 8.634-1.881 0-3.401-.299-4.946-.695l-5.258 2.271 1.505-4.808c-1.308-1.564-2.165-3.128-2.165-5.402 0-4.966 4.935-9.007 11-9.007zm-5 7.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z" />
          </svg>
        </div>
      )}
      {open && (
        <div className="chatBot-window">
          <div className="window-header">
            <span>ChatBot</span>
            <svg
              className="close-icon"
              onClick={() => setOpen(false)}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
            </svg>
          </div>
          <div className="window-chat">
            {messages.map((message, index) => (
              // ! this is one item - this gets rendered for all chat messages, so the class name
              // ! should be window-chat-item
              <div className="window-chat-items" key={index}>
                {index % 2 ? (
                  <div className="message-look">
                    <span style={{ color: "#C3A3FA" }}>{message.who}</span>:{" "}
                    {message.message}
                  </div>
                ) : (
                  <div
                    className="message-look"
                    style={{ alignSelf: "flex-end" }}
                  >
                    <span style={{ color: "#C3A3FA" }}>{message.who}</span>:
                    {message.message}
                  </div>
                )}
              </div>
            ))}
            <div
              style={{ float: "left", clear: "both" }}
              ref={messagesEnd}
            ></div>
          </div>
          <div className="window-input">
            <form action="">
              <input type="text" value={text} onChange={inputHandler} />
              <button type="submit" onClick={messagesHandler}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
