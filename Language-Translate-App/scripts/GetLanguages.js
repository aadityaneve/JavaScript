async function GetLanguages() {
  const response = await fetch("https://libretranslate.de/languages", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await response.json();
  return data;
}

export default GetLanguages;
