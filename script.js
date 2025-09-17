
// Get all three squares
const square1 = document.getElementById("square1");
const square2 = document.getElementById("square2");
const square3 = document.getElementById("square3");

const squares = [square1, square2, square3];

// Function to set others to coffee on hover
squares.forEach((square, index) => {
  square.addEventListener("mouseenter", () => {
    squares.forEach((s, i) => {
      if (i !== index) {
        s.style.backgroundColor = "#6F4E37"; // Coffee
      }
    });
  });

  square.addEventListener("mouseleave", () => {
    squares.forEach((s) => {
      s.style.backgroundColor = "#E6E6FA"; // Reset to Lavender
    });
  });
});
