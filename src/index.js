function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 35,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "dtacb933eof95d0694704c53009f47c5";
  let context =
    "You are a super smart, super well read AI assistant who is an expert in all things Canadian and poems. Please answer the prompt with the most beautiful poem about canada you can think of. Please start every sentance on a new line, and exceed no more that 500 characters. thank you.";
  let prompt = `Write a canadian poem based on ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
