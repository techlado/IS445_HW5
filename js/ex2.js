//Complete the code for the following function
//Display text for 400 level courses
const displayText400 = () => {
  const elements = document.getElementsByClassName("400level");
  for (let i = 0; i < elements.length; i++) {
    const text = elements[i].textContent;
    console.log(text);
  }
}

displayText400();