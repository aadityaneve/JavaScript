import GetText from "./GetText.js";
import PostText from "./PostText.js";
import GetLanguages from "./GetLanguages.js";
import GetUserSelectedLanguage from "./GetUserSelectedLanguage.js";
import ShowLanguages from "./ShowLanguages.js";
import RunSpeechRecognition from "./RunSpeechRecognition.js";

//  ShowLanguages will append all languages in select tag
ShowLanguages();

// Translate button click eventlistener
let translateBtn = document.getElementById("translateBtn");
translateBtn.addEventListener("click", () => {
  let userText = document.getElementById("userText").value;
  let userSelectedLanguage = document.getElementById("languages").value;

  PostText(userText, userSelectedLanguage);
});

// Speak Button
let speakBtn = document.getElementById("speakBtn");
speakBtn.addEventListener("click", () => {
  RunSpeechRecognition();
});
