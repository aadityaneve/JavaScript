import GetLanguages from "./GetLanguages.js";

async function ShowLanguages() {
  let data = await GetLanguages();

  let languageOptions = document.getElementById('languages');
  data.forEach(({ name }) => {
    
    let option = document.createElement('option');
        option.innerText = name;

    languageOptions.append(option);
  });
}

export default ShowLanguages;
