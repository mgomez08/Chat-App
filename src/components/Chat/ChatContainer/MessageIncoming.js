import React from "react";
import { formatDate } from "../../../helpers/formatDate";
export const MessageIncoming = ({ message }) => {
  return (
    <div className="msg-incoming">
      <p className="msg">{message.message}</p>
      <span className="date-msg">{formatDate(message.createdAt)}</span>
    </div>
  );
};
