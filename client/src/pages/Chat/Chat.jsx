import { useParams } from "react-router-dom";
import { useChat } from "../../hooks/useChat";
import ChatBox from "../../components/chat/ChatBox";

export default function Chat() {
  const { chatId } = useParams();
  const { messages, send } = useChat(chatId);

  return (
    <div style={{ padding: 20 }}>
      <h2>Chat</h2>
      <ChatBox messages={messages} onSend={send} />
    </div>
  );
}
