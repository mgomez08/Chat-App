import React from "react";
import { formatDate } from "../../../helpers/formatDate";
export const MessageOutgoing = ({ message }) => {
  return (
    <div className="msg-outgoing">
      <p className="msg">{message.message}</p>
      <span className="date-msg">{formatDate(message.createdAt)}</span>
    </div>
  );
};
