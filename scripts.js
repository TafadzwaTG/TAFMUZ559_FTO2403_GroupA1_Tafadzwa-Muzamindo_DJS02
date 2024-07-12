const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

try {
  const formData = new FormData(event.target);
  const dividend = formData.get("dividend");
  const divider = formData.get("divider");

// Error handling: checking if inputs are empty
  if(!dividend || !divider) {
    throw new Error ("Division not performed. Both values are required in inputs. Try again"); 
   }

  // Convert inputs to numbers
  const dividendNumber = Number(dividend);
  const dividerNumber = Number(divider);

  // Error handling: checking if inputs are valid numbers

  if(isNaN(dividendNumber) || isNaN(dividerNumber)){
    throw new Error("Invalid input: Please enter valid numeric values");
  }

  // Errow handling: checking for division by zero
  if(dividerNumber === 0) {
    throw new Error ("Invalid input: Division by zero not allowed");
    }

 //Perform division
  const divisionResult = dividendNumber / dividerNumber;

  //Display result 
  result.textContent = `Result: ${divisionResult}`;

} catch (error) {
  result.textContent = error.message;
}
});