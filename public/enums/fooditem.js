import Enumerator from "js-enum";




export const FoodItemType = Enumerator({
  FRUITS: "Fruits",
  VEGETABLES: "Vegetables",
  DAIRY: "Dairy Products",
  MEAT: "Meat",
  SEAFOOD: "Seafood",
  GRAINS: "Grains & Cereals",
  BEVERAGES: "Beverages",
  SNACKS: "Snacks",
  DESSERTS: "Desserts"
});

export const ValidationMessage = Enumerator({
    REQUIRED: "This field is required.",
    INVALID_EMAIL: "Please enter a valid email address.",
    INVALID_PHONE: "Please enter a valid phone number.",
    INVALID_DATE: "Please enter a valid date.",
    INVALID_NUMBER: "Please enter a valid number.",
    MIN_LENGTH: (min) => `Minimum length is ${min} characters.`,
    MAX_LENGTH: (max) => `Maximum length is ${max} characters.`,
    PATTERN_MISMATCH: "Input does not match the required pattern."
})