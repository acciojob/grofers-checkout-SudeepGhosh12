const getSumBtn = document.createElement("button");
  getSumBtn.append("Get Total Price");
  document.body.appendChild(getSumBtn);

  const getSum = () => {
    // Remove existing total row if it exists
    const existingTotal = document.querySelector(".total-row");
    if (existingTotal) {
      existingTotal.remove();
    }

    const priceElements = document.querySelectorAll(".prices");
    let total = 0;

    // Start from index 1 to skip the header
    for (let i = 1; i < priceElements.length; i++) {
      const price = parseFloat(priceElements[i].textContent);
      if (!isNaN(price)) {
        total += price;
      }
    }

    // Create new row for total
    const totalRow = document.createElement("tr");
    totalRow.className = "total-row";

    const totalCell = document.createElement("td");
    totalCell.colSpan = 2;
    totalCell.textContent = `Total Price: $${total.toFixed(2)}`;

    totalRow.appendChild(totalCell);

    const table = document.getElementById("grocery-table");
    table.appendChild(totalRow);
  };

  getSumBtn.addEventListener("click", getSum);


