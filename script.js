// PROVIDED: use this collection to generate the entries.
const $creatures = [
  {
    "name": "Moss Dragon",
    "description": "A gentle gardener who grows tiny forests wherever it naps.",
    "image": "assets/moss-dragon.svg",
    "alt": "A green dragon with leafy horns and small wings."
  },
  {
    "name": "Cloud Fox",
    "description": "A sky wanderer collecting soft clouds and lost daydreams.",
    "image": "assets/cloud-fox.svg",
    "alt": "A pale blue fox with pointed ears and a fluffy tail."
  },
  {
    "name": "Ember Salamander",
    "description": "A warm little companion that keeps campfires glowing.",
    "image": "assets/ember-salamander.svg",
    "alt": "An orange salamander with a flame at the end of its tail."
  },
  {
    "name": "Moon Owl",
    "description": "A quiet navigator who reads the stories written in stars.",
    "image": "assets/moon-owl.svg",
    "alt": "A purple owl with a crescent moon on its forehead."
  },
  {
    "name": "Crystal Turtle",
    "description": "A patient explorer carrying a sparkling crystal garden.",
    "image": "assets/crystal-turtle.svg",
    "alt": "A mint green turtle with purple crystals on its shell."
  },
  {
    "name": "Mushroom Sprite",
    "description": "A woodland storyteller with a spotted cap and muddy boots.",
    "image": "assets/mushroom-sprite.svg",
    "alt": "A small cream sprite wearing a red spotted mushroom cap."
  }
]

// YOUR WORK: build these features using the supplied HTML, CSS, and data.
// 1. Select the collection and preference controls.
// Find the creature collection, theme dropdown, layout dropdown,
// and status message so JavaScript can interact with them.
const $collection = document.querySelector("#collection");
const $theme = document.querySelector("#theme");
const $layout = document.querySelector("#layout");
const $status = document.querySelector("#status");

// 2. Use a loop to generate the creature entries. See START-HERE.md for markup.
// Loop through every creature in the array.
// Create an HTML card using its name, image, alt text, and description.
// Add each card to the collection.
$creatures.forEach(function(creature) {
  const creatureHTML = `
    <li class="creature">
      <img src="${creature.image}" alt="${creature.alt}">
      <div class="creature-info">
        <h3>${creature.name}</h3>
        <p class="creature-description">${creature.description}</p>
      </div>
    </li>
  `;
  $collection.insertAdjacentHTML("beforeend", creatureHTML);
});

// 3. Listen for changes to each preference control and update the appearance.
function updateAppearance() {
  // Update the habitat theme
  document.body.dataset.theme = $theme.value;
  // Update the collection layout
  $collection.dataset.layout = $layout.value;
  // Display feedback to the user
  $status.textContent = "Your collection preferences have been updated!";
}

// Listen for changes to the THEME dropdown
$theme.addEventListener("change", function() {
  updateAppearance();
  savePreferences();
});

// Listen for changes to the LAYOUT dropdown
$layout.addEventListener("change", function() {
  updateAppearance();
  savePreferences();
});

// 4. Save both selected preferences to Local Storage.
function savePreferences() {
  // Store both selected preferences in an object
  const preferences = {
    theme: $theme.value,
    layout: $layout.value
  };
  // Save the preferences in Local Storage
  localStorage.setItem(
    "creaturePreferences",
    JSON.stringify(preferences)
  );
}

// 5. Check for saved data on load and restore the controls and appearance.

function loadPreferences() {

  // Check Local Storage for saved preferences
  const savedPreferences = localStorage.getItem(
    "MTM6302-creatureCollection"
  );

  // Check whether saved preferences exist
  if (savedPreferences) {

    // Convert the saved JSON string into an object
    const preferences = JSON.parse(savedPreferences);

    // Restore the selected theme and layout
    $theme.value = preferences.theme;
    $layout.value = preferences.layout;

    // Update the visible appearance
    updateAppearance();

    // Display a message confirming restoration
    $status.textContent = "Your saved preferences have been restored!";

  } else {

    // Keep the original Forest and Cards appearance
    $status.textContent = "Choose your preferences to make this collection yours.";

  }

}



// Add short pseudocode comments before writing each feature.