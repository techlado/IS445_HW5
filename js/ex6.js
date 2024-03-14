const words = [{
  term: "Procrastination",
  definition: "Avoidance of doing a task that needs to be accomplished"
}, {
  term: "Tautology",
  definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
  term: "Oxymoron",
  definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];

const dictFunc = (wordsArray) => {
  const contentDiv = document.getElementById("content");
  const dl = document.createElement("dl");

  wordsArray.forEach((element) => {
    const dt = document.createElement("dt");
    const strong = document.createElement("strong");
    strong.textContent = element.term;
    dt.appendChild(strong);
    dl.appendChild(dt); // Append the dt to dl, not directly to another element with an id

    const dd = document.createElement("dd");
    dd.textContent = element.definition;

    dl.appendChild(dd);
  });

  contentDiv.appendChild(dl);
};

dictFunc(words);