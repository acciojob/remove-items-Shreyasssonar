//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    // Get references to the dropdown list and the remove button
    var colorSelect = document.getElementById("colorSelect");
    var removeButton = document.getElementById("removeButton");

    // Add a click event listener to the remove button
    removeButton.addEventListener("click", function() {
        // Get the selected option
        var selectedOption = colorSelect.options[colorSelect.selectedIndex];

        // Remove the selected option from the dropdown
        if (selectedOption) {
            colorSelect.removeChild(selectedOption);
        }
    });
});
