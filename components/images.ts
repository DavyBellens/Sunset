const r1 = {
  image: require("@/assets/images/restaurant-1.png"),
  type: "R",
  title: "La Piazza",
};
const r2 = {
  image: require("@/assets/images/restaurant-2.png"),
  type: "R",
  title: "Le Bistro",
};
const i1 = {
  image: require("@/assets/images/ice-1.png"),
  type: "I",
  title: "Ice Cream City",
};
const i2 = {
  image: require("@/assets/images/ice-2.png"),
  type: "I",
  title: "Frosty Fudge",
};
const i3 = {
  image: require("@/assets/images/ice-3.png"),
  type: "I",
  title: "Gelato Gusto",
};
const i4 = {
  image: require("@/assets/images/ice-4.png"),
  type: "I",
  title: "Scoops & Smiles",
};
const f1 = {
  image: require("@/assets/images/ff-1.png"),
  type: "F",
  title: "McDonalds",
};
const f2 = {
  image: require("@/assets/images/ff-2.png"),
  type: "F",
  title: "Quick",
};
const f3 = {
  image: require("@/assets/images/ff-3.png"),
  type: "F",
  title: "KFC",
};
const b1 = {
  image: require("@/assets/images/boba-1.png"),
  type: "B",
  title: "Bubble Tea City",
};
const b2 = {
  image: require("@/assets/images/boba-2.png"),
  type: "B",
  title: "Boba on the go",
};
const b3 = {
  image: require("@/assets/images/boba-3.png"),
  type: "B",
  title: "T-POP Boba Tea",
};
const c1 = {
  image: require("@/assets/images/coffee-1.png"),
  type: "C",
  title: "Cat Café",
};
const c2 = {
  image: require("@/assets/images/coffee-2.png"),
  type: "C",
  title: "Morning Brew",
};

const t1 = {
  image: require("@/assets/images/tinder-1.png"),
  type: "T",
  title: "Sara, 24",
};

const t2 = {
  image: require("@/assets/images/tinder-2.png"),
  type: "T",
  title: "Sara, 24",
};

const t3 = {
  image: require("@/assets/images/tinder-3.png"),
  type: "T",
  title: "Sara, 24",
};

const d1 = {
  image: require("@/assets/images/drink-1.png"),
  type: "D",
  title: "McLaren's",
};

const d2 = {
  image: require("@/assets/images/drink-2.png"),
  type: "D",
  title: "Astronomika",
};

const d3 = {
  image: require("@/assets/images/drink-3.png"),
  type: "D",
  title: "Cocktail Cove",
};

export const tinder = [t1, t2, t3];

export const restaurantMain = {
  image: require("@/assets/images/restaurant-m.png"),
  type: "R",
  title: "Restaurant Main",
};

export const fastfoodMain = {
  image: require("@/assets/images/ff-m.png"),
  type: "F",
  title: "Fast Food Main",
};

export const coffeeMain = {
  image: require("@/assets/images/coffee-m.png"),
  type: "C",
  title: "Coffee Main",
};

export const bubbleTeaMain = {
  image: require("@/assets/images/bubbleTea-m.png"),
  type: "B",
  title: "Bubble Tea Main",
};

export const iceCreamMain = {
  image: require("@/assets/images/iceCream-m.png"),
  type: "I",
  title: "Ice Cream Main",
};

export const drinkMain = {
  image: require("@/assets/images/drink-m.png"),
  type: "D",
  title: "Drink Main",
};

export const coffee = [c1, c2];
export const fastfood = [f1, f2, f3];
export const bubbleTea = [b1, b2, b3];
export const iceCream = [i1, i2, i3, i4];
export const restaurant = [r1, r2];
export const drink = [d1, d2, d3];

export function findByTitleAndType(title: string, type: string) {
  if (type === "R") {
    return restaurant.find((image) => image.title === title);
  }
  if (type === "I") {
    return iceCream.find((image) => image.title === title);
  }
  if (type === "F") {
    return fastfood.find((image) => image.title === title);
  }
  if (type === "B") {
    return bubbleTea.find((image) => image.title === title);
  }
  if (type === "C") {
    return coffee.find((image) => image.title === title);
  }
  if (type === "D") {
    return drink.find((image) => image.title === title);
  }
}
