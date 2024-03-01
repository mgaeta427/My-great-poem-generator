function displayRecipe(response) {
new Typewriter("#recipe", {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});
}

function generateRecipe(event) {
    event.preventDefault();


    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "9370643565959975t4bde2o89fba56f7";
    let prompt = `User instructions: Generate a romantic recipe about ${instructionsInput.value}`;
    let context = 
    "You are a professional Chef expert and love to write quick romantic recipes. Your mission is to generate a quick romantic chocolate recipe in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Please include the name of the recipe. Sign the recipe with 'SheCodes AI' inside a <strong> element at the end of the recipe and NOT at the beginning";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


    let recipeElement = document.querySelector("#recipe");
    recipeElement.classList.remove("hidden");
    recipeElement.innerHTML = `<div class="generating">🍮Generating a chocolate recipe about ${instructionsInput.value}</div>`;
    
    axios.get(apiURL).then(displayRecipe);

}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);