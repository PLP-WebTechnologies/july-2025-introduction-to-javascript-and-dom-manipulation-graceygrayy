// ====================
// Part 1: Variables & Conditionals
// ====================

// Example customer preference
let perfumeSize = "large"; // can be "small", "medium", or "large"
let price;

if (perfumeSize === "small") {
  price = 50;
} else if (perfumeSize === "medium") {
  price = 90;
} else {
  price = 150;
}
console.log("Selected size: " + perfumeSize + " | Price: $" + price);


// ====================
// Part 2: Custom Functions
// ====================

// Function 1: Calculate Discount
function applyDiscount(price, discountPercent) {
  let discountAmount = (price * discountPercent) / 100;
  return price - discountAmount;
}

// Function 2: Show Welcome Message
function showWelcomeMessage() {
  let welcome = document.getElementById("welcome-message");
  welcome.textContent = "✨ Welcome to Gracey’s Oil Perfume – Luxury in Every Drop ✨";
}
showWelcomeMessage();


// ====================
// Part 3: Loops
// ====================

// Example: Display top selling perfumes
let bestSellers = ["Royal Oud", "Velvet Rose", "Golden Musk"];
let bestSellersList = document.getElementById("best-sellers");

for (let i = 0; i < bestSellers.length; i++) {
  let li = document.createElement("li");
  li.textContent = bestSellers[i];
  bestSellersList.appendChild(li);
}

// Example: Countdown to a special sale
for (let countdown = 5; countdown > 0; countdown--) {
  console.log("Sale starts in: " + countdown + " days");
}


// ====================
// Part 4: DOM Interactions
// ====================

// Change header color on hover
let header = document.querySelector("header");
header.addEventListener("mouseover", function () {
  header.style.backgroundColor = "#333";
});
header.addEventListener("mouseout", function () {
  header.style.backgroundColor = "black";
});

// Show discounted price when button is clicked
document.getElementById("discount-btn").addEventListener("click", function () {
  let discountedPrice = applyDiscount(price, 10);
  document.getElementById("discount-result").textContent =
    "🎉 Special Discount Price: $" + discountedPrice;
});
