let modelList = [
  {
    product: "iPhone X ",
    capacity: "128 GB",
    color: "Star blue",
    charger: "Yes",
  },
  {
    product: "AirPods Pro 2nd ",
    capacity: "4 GB",
    color: "White",
    charger: "No",
  },

];

function initialize() {
  const PRODUCT_FORM = document.getElementById("product-form");
  PRODUCT_FORM.addEventListener("submit", addOrUpdateProduct);
  showProducts();
}

let editingIndex = null;

function showProducts() {
  const APPLES = document.getElementById("apples");
  let allProducts = "";

  for (let i = 0; i < modelList.length; i++) {
    allProducts += `<li>${modelList[i].product} - ${modelList[i].capacity} - Color: ${modelList[i].color} - Charger: ${modelList[i].charger} <button class="button button-edit" onclick="editProduct(${i})">Edit</button><button class="button button-delete" onclick="deleteProduct(${i})">Delete</button></li>`;
  }
  APPLES.innerHTML = allProducts;
}

function editProduct(index) {
  editingIndex = index;

  const product = modelList[index];
  document.getElementById('product').value = product.product;
  document.getElementById('capacity').value = product.capacity;
  document.getElementById('color').value = product.color;
  document.getElementById('charger').value = product.charger;

  const submitButton = document.querySelector("#product-form button[type='submit']");
  submitButton.textContent = 'Update';
}

function addOrUpdateProduct(event) {
  event.preventDefault();
  const PRODUCT = event.target.product.value;
  const CAPACITY = event.target.capacity.value;
  const COLOR = event.target.color.value;
  const CHARGER = event.target.charger.checked ? "Yes" : "No";

  document.getElementById("product-error").style.visibility = "hidden";
  document.getElementById("capacity-error").style.visibility = "hidden";
  document.getElementById("finish-error").style.visibility = "hidden";
  document.getElementById("extra-error").style.visibility = "hidden";
  let hasErrors = false;

  if (PRODUCT === "") {
    document.getElementById("product-error").style.visibility = "visible";
    hasErrors = true;
  }
  if (CAPACITY === "") {
    document.getElementById("capacity-error").style.visibility = "visible";
    hasErrors = true;
  }
  if (COLOR === "") {
    document.getElementById("finish-error").style.visibility = "visible";
    hasErrors = true;
  }
  if (CHARGER === "") {
    document.getElementById("extra-error").style.visibility = "visible";
    hasErrors = true;
  };
  if (!hasErrors) {
    const newProduct = {
      product: PRODUCT,
      capacity: CAPACITY,
      color: COLOR,
      charger: CHARGER,
    };

    if (editingIndex !== null) {
      modelList[editingIndex] = newProduct;
    } else {
      modelList.push(newProduct);
    }
    const submitButton = document.querySelector("#product-form button[type='submit']");
    submitButton.textContent = 'Submit';
    editingIndex = null;
  }
  showProducts();
}

const PRODUCT_FORM = document.getElementById("product-form");
PRODUCT_FORM.addEventListener("submit", addOrUpdateProduct);

function deleteProduct(productId) {
  modelList.splice(productId, 1);

  showProducts();
}
initialize();