const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const dividend = formData.get("dividend");
  const divider = formData.get("divider");

// Error handling: checking if inputs are empty
  if(!dividend || !divider) {
    result.textContent = "Division not performed. Both values are required in inputs. Try again"; 
    return; 
  }

  // Convert inputs to numbers
  const dividendNumber = Number(dividend);
  const dividerNumber = Number(divider);

  // Error handling: checking if inputs are valid numbers

  if(isNaN(dividendNumber) || isNaN(dividerNumber)){
    result.textContent = "Invalid input: Please enter valid numeric values";
    return;
  }
  // Errow handling: checking for division by zero
  if(dividerNumber === 0) {
    result.textContent = "Invalid input: Division by zero not allowed";
    return;
  }

 //Perform division
  const divisionResult = dividendNumber / dividerNumber;

  //Display result 
  result.textContent = `Result: ${divisionResult}`;
 
});