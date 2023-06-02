// Function to calculate BMI
function calculateBMI() {
  // Get the weight and height inputs
  const weightInput = document.getElementById("weight");
  const heightInput = document.getElementById("height");

  // Get the entered weight and height values
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100; // Convert cm to meters

  // Check if the inputs are valid
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    document.getElementById("result").textContent = "Please enter valid weight and height.";
    return;
  }

  // Calculate the BMI
  const bmi = weight / (height * height);

  // Display the result
  document.getElementById("result").textContent = `Your BMI: ${bmi.toFixed(2)}`;
}

// Calculate BMI when the button is clicked
document.getElementById("calculateBtn").addEventListener("click", calculateBMI);