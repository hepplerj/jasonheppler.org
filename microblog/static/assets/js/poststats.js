document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleTableBtn");
    const tableContainer = document.getElementById("tableContainer");

    toggleButton.addEventListener("click", function() {
        if (tableContainer.classList.contains("collapsed")) {
            tableContainer.classList.remove("collapsed");
            toggleButton.textContent = "Hide Posts by Year";
        } else {
            tableContainer.classList.add("collapsed");
            toggleButton.textContent = "Show Posts by Year";
        }
    });
});
