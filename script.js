// ===============================
// Part 1: Variable declarations and conditionals
// ===============================

let perfumeName = "Amber Rose";
let stock = 5;
let isAvailable = stock > 0; // boolean

if (isAvailable) {
  console.log(perfumeName + " is in stock.");
} else {
  console.log(perfumeName + " is sold out.");
}

// ===============================
// Part 2: Custom functions
// ===============================

// Function 1: Greet user
function greetUser(name) {
  return "Hello " + name + ", welcome to Gracey Oil Perfume!";
}

// Function 2: Check discount
function checkDiscount(amount) {
  if (amount > 100) {
    return "You get a 10% discount!";
  } else {
    return "No discount available.";
  }
}

// ===============================
// Part 3: Loops
// ===============================

let perfumes = ["Amber Rose", "Oud Musk", "Citrus Breeze", "Vanilla Woods"];

// Loop 1: For loop
for (let i = 0; i < perfumes.length; i++) {
  console.log("Perfume: " + perfumes[i]);
}

// Loop 2: For-of loop
for (let scent of perfumes) {
  console.log("Available scent: " + scent);
}

// ===============================
// Part 4: DOM Interactions
// ===============================

// DOM 1: Greeting button
document.getElementById("greetBtn").addEventListener("click", function() {
  document.getElementById("greeting").textContent = greetUser("Gracey");
});

// DOM 2: Discount button
document.getElementById("discountBtn").addEventListener("click", function() {
  document.getElementById("discountMsg").textContent = checkDiscount(120);
});

// DOM 3: Display perfume list
let perfumeList = document.getElementById("perfumeList");
perfumes.forEach(function(item) {
  let li = document.createElement("li");
  li.textContent = item;
  perfumeList.appendChild(li);
});
