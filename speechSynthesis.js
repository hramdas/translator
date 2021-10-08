
    function textToAudio() {
        let msg = document.getElementById("txtOut").value;
        let l = document.getElementById("lan2").value;
        
        let speech = new SpeechSynthesisUtterance();
        speech.lang = l;
        speech.text = msg;
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;
        
        window.speechSynthesis.speak(speech);
    }
