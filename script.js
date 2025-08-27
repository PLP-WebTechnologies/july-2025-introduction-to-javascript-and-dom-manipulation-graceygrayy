// ====================
// Part 1: Variables & Conditionals
// ====================

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

function applyDiscount(price, discountPercent) {
  let discountAmount = (price * discountPercent) / 100;
  return price - discountAmount;
}

function showWelcomeMessage() {
  let welcome = document.getElementById("welcome-message");
  welcome.textContent = "✨ Welcome to Gracey’s Oil Perfume – Luxury in Every Drop ✨";
}
showWelcomeMessage();


// ====================
// Part 3: Loops
// ====================

let bestSellers = ["Royal Oud", "Velvet Rose", "Golden Musk"];
let bestSellersList = document.getElementById("best-sellers");

for (let i = 0; i < bestSellers.length; i++) {
  let li = document.createElement("li");
  li.textContent = bestSellers[i];
  bestSellersList.appendChild(li);
}

for (let countdown = 5; countdown > 0; countdown--) {
  console.log("Sale starts in: " + countdown + " days");
}


// ====================
// Part 4: DOM Interactions
// ====================

let header = document.querySelector("header");
header.addEventListener("mouseover", function () {
  header.style.backgroundColor = "#1e4025"; // darker green on hover
});
header.addEventListener("mouseout", function () {
  header.style.backgroundColor = "#244c2b"; // back to normal
});

document.getElementById("discount-btn").addEventListener("click", function () {
  let discountedPrice = applyDiscount(price, 10);
  document.getElementById("discount-result").textContent =
    "🎉 Special Discount Price: $" + discountedPrice;
});
