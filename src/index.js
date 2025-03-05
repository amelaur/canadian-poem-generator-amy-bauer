function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "She was a fairy tale in a world of nightmares.",
    autoStart: true,
    cursor: "",
    delay: 35,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
