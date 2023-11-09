function sendMessage(user) {
  const messageInput = user === 'user1' ? document.getElementById("user1-input") : document.getElementById("user2-input");
  const className = user === 'user1' ? "user1" : "user2";

  const message = messageInput.value.trim();
  if (message === "") {
    return;
  }

  const chatBox = document.getElementById("chat-box");
  const newMessage = document.createElement("div");
  newMessage.className = "message " + className;
  newMessage.textContent = message;
  chatBox.appendChild(newMessage);

  messageInput.value = "";

  chatBox.scrollTop = chatBox.scrollHeight;
}
