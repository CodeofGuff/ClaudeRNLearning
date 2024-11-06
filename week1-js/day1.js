const name1 = "David Guffre";
let score = 0;
const user = {
  name: "User1",
  isActive: true,
  hasGold: false,
};

// Object Deconstructing
const { name, isActive } = user;
console.log(name); // "User1"
console.log(isActive); // true
