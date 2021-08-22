import React from "react";

export const SendMessage = () => {
  return (
    <form id="hola" className="send-msg">
      <textarea
        form="hola"
        rows="4"
        placeholder="Envia un mensaje"
        className="input-msg"
      ></textarea>
      <button className="button-send-msg" type="submit">
        Enviar
      </button>
    </form>
  );
};
