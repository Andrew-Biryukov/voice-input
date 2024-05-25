//version 2024-05-24


// voiceForm.js
function startListening() {
    // Check if the browser supports the Web Speech API
    if (!('webkitSpeechRecognition' in window)) {
        alert("Your browser doesn't support speech recognition. Try Chrome.");
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        processVoiceCommand(transcript);
    };

    recognition.onerror = (event) => {
        console.error(event.error);
    };

    recognition.onend = () => {
        // Optionally, restart listening after a pause
        // recognition.start();
    };
}

function processVoiceCommand(command) {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');

    if (command.includes('name')) {
        const name = command.replace('name', '').trim();
        nameField.value = name;
    } else if (command.includes('email')) {
        const email = command.replace('email', '').trim();
        emailField.value = email;
    } else {
        console.log("Command not recognized:", command);
    }
}
	
