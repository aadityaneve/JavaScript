function RunSpeechRecognition() {
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var recognition = new SpeechRecognition();

  recognition.onstart = function () {
    let speakBtn = document.getElementById("speakBtn");
    speakBtn.innerText = "Listening...";
    speakBtn.setAttribute("style", "background-color: rgb(248, 180, 91);");
    console.log("Speech recognition service has started");
  };

  recognition.onspeechstart = function () {
    console.log("Speech has been detected");
  };

  recognition.onspeechend = function () {
    recognition.stop();
    let speakBtn = document.getElementById("speakBtn");
    speakBtn.innerText = "Speak";
    speakBtn.setAttribute("style", "background-color: antiquewhite;");
    console.log("Speech has stopped being detected");
  };

  recognition.addEventListener("result", (event) => {
    const transcript = Array.from(event.results)
      .map((result) => result[0])
      .map((result) => result.transcript);

    // appending transcript to userText textarea
    let userText = document.getElementById("userText");
    userText.innerHTML = null;
    userText.append(transcript);
  });

  recognition.start();
}

export default RunSpeechRecognition;
