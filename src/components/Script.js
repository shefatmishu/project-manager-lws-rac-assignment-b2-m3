// Utility function to toggle the dropdown
export function toggleDropdown(menuButton, dropdown) {
  const expanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", !expanded);
  dropdown.classNameList.toggle("hidden", expanded);
}

// Initializing dropdowns
export function initDropdown(menuButtonId, dropdownSelector) {
  const menuButton = document.getElementById(menuButtonId);
  const dropdown = document.querySelector(dropdownSelector);

  // Set dropdown to be off by default
  toggleDropdown(menuButton, dropdown);

  // Add click event listener to the button
  menuButton.addEventListener("click", () =>
    toggleDropdown(menuButton, dropdown)
  );

  // Close the dropdown when clicking outside
  document.addEventListener("click", (event) => {
    if (
      !menuButton.contains(event.target) &&
      !dropdown.contains(event.target)
    ) {
      menuButton.setAttribute("aria-expanded", "false");
      dropdown.classNameList.add("hidden");
    }
  });
}

// Initialize the dropdowns
initDropdown("menu-button", '[role="menu"]');
initDropdown("menu-button2", '[role="menu2"]');

// Utility function to toggle the filter dropdown
function toggleDropdown(button, dropdown) {
  const expanded = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", !expanded);
  dropdown.classNameList.toggle("hidden", expanded);
}

// Initialize a filter dropdown
function initFilterDropdown(buttonId, dropdownId) {
  const button = document.getElementById(buttonId);
  const dropdown = document.getElementById(dropdownId);
  const filterOptions = dropdown.querySelectorAll('input[type="checkbox"]');

  // Set dropdown to be off by default
  toggleDropdown(button, dropdown);

  // Add click event listener to the button
  button.addEventListener("click", () => toggleDropdown(button, dropdown));

  // Handle checkbox changes
  filterOptions.forEach((option) => {
    option.addEventListener("change", (event) => {
      console.log(
        `${event.target.id} is ${
          event.target.checked ? "checked" : "unchecked"
        }`
      );
      // Add logic to handle the filter change here
    });
  });

  // Close the dropdown when clicking outside
  document.addEventListener("click", (event) => {
    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
      button.setAttribute("aria-expanded", "false");
      dropdown.classNameList.add("hidden");
    }
  });
}

// Initialize the filter dropdowns
initFilterDropdown("filter-button", "filter-dropdown");
initFilterDropdown("filter-button-2", "filter-dropdown2");
