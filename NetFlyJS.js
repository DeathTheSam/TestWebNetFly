document.getElementById('question-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Get the user's question
    const questionInput = document.getElementById('question-input');
    const question = questionInput.value.trim();

    // Clear the input field
    questionInput.value = '';

    // Send the question to Grok and display the response
    const response = await getGrokResponse(question);
    displayChatMessage('user', question);
    displayChatMessage('grok', response);
});

function displayChatMessage(author, message) {
    const chatContainer = document.getElementById('chat-container');

    // Create a new chat message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');

    // Add the message and author
    const messageContent = document.createElement('span');
    messageContent.textContent = message;
    messageElement.appendChild(messageContent);

    const authorElement = document.createElement('span');
    authorElement.classList.add('chat-author');
    authorElement.textContent = author;
    messageElement.appendChild(authorElement);

    // Append the new message to the chat container
    chatContainer.appendChild(messageElement);
}

async function getGrokResponse(question) {
    // Replace this with your own code to get a response from Grok
    return 'Hello, World!';
}