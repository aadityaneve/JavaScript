import GetLanguages from "./GetLanguages.js";
import ShowTranslatedText from "./ShowTranslatedText.js";

async function PostText(userText, userSelectedLanguage) {
  let languages = await GetLanguages();
  let lan = "";
  languages.forEach((element) => {
    if (element.name == userSelectedLanguage) {
      lan = element.code;
    }
  });

  const response = await fetch("https://libretranslate.de/translate", {
    method: "POST",
    body: JSON.stringify({
      q: `${userText}`,
      source: "en",
      target: `${lan}`,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  ShowTranslatedText(await response.json());
}

export default PostText;
