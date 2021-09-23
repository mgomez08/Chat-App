import React, { useContext, useState } from "react";
import { AuthContext } from "../../../auth/AuthContext";
import { ChatContext } from "../../../context/chat/ChatContext";
import { SocketContext } from "../../../context/SocketContext";

export const SendMessage = () => {
  const [message, setMessage] = useState("");
  const { socket } = useContext(SocketContext);
  const { auth } = useContext(AuthContext);
  const { chatState } = useContext(ChatContext);

  const handleChange = ({ target }) => {
    setMessage(target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (message.length === 0) return;

    socket?.emit("personal-message", {
      from: auth.uid,
      to: chatState.chatActive,
      message,
    });
    setMessage("");
  };
  return (
    <form id="hola" className="send-msg" onSubmit={onSubmit}>
      <textarea
        form="hola"
        rows="4"
        placeholder="Envia un mensaje"
        className="input-msg"
        name="message"
        value={message}
        onChange={handleChange}
      ></textarea>
      <button className="button-send-msg" type="submit">
        Enviar
      </button>
    </form>
  );
};
