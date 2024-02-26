document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('message_list');
    const messageInput = document.getElementById('message');
    const sendButton = document.getElementById('button');

    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
      }
    });

    function sendMessage() {
      const message = messageInput.value.trim();
      if (message !== '') {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = `${message}`;  
        chatMessages.appendChild(messageElement);
        messageInput.value = '';

        // Scroll to the bottom of the chat on new message
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
    }
  });
