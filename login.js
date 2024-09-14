function saveChatHistory(message, sender) {
    let chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
    chatHistory.push({ message, sender, timestamp: new Date().toISOString() });
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
}

function loadChatHistory() {
    let chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
    chatHistory.forEach(chat => {
        displayMessage(chat.message, chat.sender);
    });
}

// Example of hashing using bcrypt.js (add bcrypt.js to your project)
bcrypt.hash(password, 10, function(err, hash) {
    // Store the hash in localStorage instead of the plain password
    users.push({ username: "newUser", password: hash });
    localStorage.setItem("users", JSON.stringify(users));
});

// Call saveChatHistory() whenever a message is sent or received
// Load the chat history when the page loads
window.onload = loadChatHistory;