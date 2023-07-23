const API = "https://api.adviceslip.com/advice";

// Function to fetch advice from the API
async function fetchAdvice() {
  try {
    const response = await fetch(API);
    const data = await response.json();
    return {
      slip_id: data.slip.slip_id,
      advice: data.slip.advice,
    };
  } catch (error) {
    console.error("Error fetching advice:", error);
    return null;
  }
}

// Call the function and use the advice and slip_id
function cta() {
  fetchAdvice().then((result) => {
    if (result) {
      console.log("Slip ID:", result.slip_id);
      console.log("Advice:", result.advice);

      let adviceID = document.getElementById("advice-number");
      adviceID.innerHTML = result.slip_id;

      let advice = document.getElementById("advice-text");
      advice.innerHTML = result.advice;
      // Do something with the slip_id and advice here
    } else {
      console.log("No advice available.");
    }
  });
}

const ctaButton = document.getElementById("ctaButton");
ctaButton.addEventListener("click", cta);

cta();
