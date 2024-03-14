// Function to create the number table
const createNumberTable = () => {
  const outputDiv = document.getElementById("output");

  const table = document.createElement("table");
  for (let i = 1; i <= 12; i++) {
      const row = document.createElement("tr");
      const cell = document.createElement("td");
      cell.textContent = i;

      cell.style.textAlign = "center";

      // Add a class for numbers divisible by 4
      if (i % 4 === 0) {
          cell.classList.add("divisible-by-4");
      }

      row.appendChild(cell);
      table.appendChild(row);
  }
  outputDiv.appendChild(table);
};

createNumberTable();
