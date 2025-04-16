const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all elements with the class 'prices'
  const priceElements = document.querySelectorAll(".prices");
  
  // Calculate the total sum
  let total = 0;
  priceElements.forEach(el => {
    // Parse the price text to a float (in case it's a decimal)
    const price = parseFloat(el.textContent);
    if (!isNaN(price)) {
      total += price;
    }
  });

  // Create a new table row
  const totalRow = document.createElement("tr");

  // Create a cell that spans across all columns (you can adjust colspan as needed)
  const totalCell = document.createElement("td");
  totalCell.colSpan = 2; // Adjust according to number of columns
  totalCell.textContent = `Total Price: $${total.toFixed(2)}`;

  // Append the cell to the row
  totalRow.appendChild(totalCell);

  // Append the row to the table
  const table = document.querySelector("table");
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);


