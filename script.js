const items = {
  "Mini Idli Chaat": "₹120",
  "Medu Vada with Coconut Chutney": "₹100",
  "Paneer Pepper Fry": "₹180",
  "Paneer Tikka": "₹200",
  "Hara Bhara Kabab": "₹150",
  "Masala Dosa with Sambhar": "₹130",
  "Kerala Appam with Vegetable Stew": "₹160",
  "Dal Makhni": "₹170",
  "Butter Chicken": "₹220",
  "Gulab Jamun": "₹90",
  "Rasmalai": "₹100"
};

const foodSelect = document.getElementById("food");
const itemDisplay = document.getElementById("itemDisplay");
const menuForm = document.getElementById("menuForm");

foodSelect.addEventListener("change", () => {
  const selected = foodSelect.value;
  if (items[selected]) {
    itemDisplay.innerHTML = `<div class="price">Price: ${items[selected]}</div>`;
  } else {
    itemDisplay.innerHTML = "";
  }
});

menuForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const selected = foodSelect.value;

  if (!selected) {
    showNotification("Please select an item from the menu.", "error");
    return;
  }

  showNotification(`✅ Your order for ${selected} has been confirmed!`, "success");
});

menuForm.addEventListener("reset", () => {
  itemDisplay.innerHTML = "";
});

function showNotification(message, type) {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.innerText = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}
