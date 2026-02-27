import { useState } from "react";

export default function ChatBox({ messages, onSend }) {
  const [text, setText] = useState("");

  const send = () => {
    if (!text) return;
    onSend(text);
    setText("");
  };

  return (
    <div>
      <div style={{ height: 300, overflow: "auto", border: "1px solid #ccc" }}>
        {messages.map((m) => (
          <div key={m.id}>
            <b>{m.senderId}</b>: {m.text}
          </div>
        ))}
      </div>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Message"
      />
      <button onClick={send}>Send</button>
    </div>
  );
}
