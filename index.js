// Check if the browser supports the Web Speech API
if (!('webkitSpeechRecognition' in window)) {
    alert('Your browser does not support speech recognition. Try using Chrome.');
} else {
    const recognition = new webkitSpeechRecognition(); // Create a new instance of SpeechRecognition
    recognition.continuous = true; // Enable continuous listening
    recognition.interimResults = true; // Show interim results

    // Start listening when the start button is clicked
    document.getElementById('start').addEventListener('click', () => {
        recognition.start();
    });

    // Stop listening when the stop button is clicked
    document.getElementById('stop').addEventListener('click', () => {
        recognition.stop();
    });

    // When speech is recognized
    recognition.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
            transcript += event.results[i][0].transcript;
        }
        document.getElementById('output').innerText = transcript;
    };

    // Handle errors
    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
    };

    // Log when the recognition ends
    recognition.onend = () => {
        console.log('Speech recognition ended');
    };
}
