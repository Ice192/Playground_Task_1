const Disc = 0.1
const cartItems = [];

//Fungsi untuk kalkulasi semua item
function calculateSubtotal(items) {
  let subtotal = 0;

  for (const item of items) {
    subtotal += item.price * item.qty;
  }

  let discount = 0;

  if (subtotal > 50) {
    discount = subtotal * Disc;
  }

  const finalSubtotal = subtotal - discount;

  return { subtotal, discount, finalSubtotal };
}

//Fungsi untuk kalkulasi pajak
function calculateTax(amount) {
  return amount * 0.11;
}

//Fungsi untuk kalkulasi total pajak
function calculateTotal(amount, tax) {
  return amount + tax;
}

//Fungsi untuk format harga
function formatNumber(value) {
  return new Intl.NumberFormat("id-ID", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
}

function renderResult(result, tax, total) {
  const discountText = result.discount > 0
    ? `${formatNumber(result.discount)} dari ${Disc * 100} %`
    : `${formatNumber(result.discount)} Tidak dapat diskon`;

  document.getElementById("subtotal").textContent = formatNumber(result.subtotal);
  document.getElementById("discount").textContent = discountText;
  document.getElementById("after-discount").textContent = formatNumber(result.finalSubtotal);
  document.getElementById("tax").textContent = formatNumber(tax);
  document.getElementById("total").textContent = formatNumber(total);
}

function resetResult() {
  document.getElementById("subtotal").textContent = "0";
  document.getElementById("discount").textContent = "0";
  document.getElementById("after-discount").textContent = "0";
  document.getElementById("tax").textContent = "0";
  document.getElementById("total").textContent = "0";
}

function renderItemList() {
  const itemList = document.getElementById("item-list");
  if (!itemList) return;

  if (cartItems.length === 0) {
    itemList.innerHTML = `<li class="text-slate-400">Belum ada barang.</li>`;
    return;
  }

  itemList.innerHTML = cartItems
    .map((item, index) => {
      const lineTotal = item.price * item.qty;
      return `<li>${index + 1}. ${item.name} - ${item.qty} x Rp ${formatNumber(item.price)} = Rp ${formatNumber(lineTotal)}</li>`;
    })
    .join("");
}


function resetInputForm() {
  const nameInput = document.getElementById("item-name");
  const priceInput = document.getElementById("item-price");
  const qtyInput = document.getElementById("item-qty");

  if (!nameInput || !priceInput || !qtyInput) return;

  nameInput.value = "";
  priceInput.value = "";
  qtyInput.value = "";
  nameInput.focus();
}

function getCurrentInputItem() {
  const nameInput = document.getElementById("item-name");
  const priceInput = document.getElementById("item-price");
  const qtyInput = document.getElementById("item-qty");

  if (!nameInput || !priceInput || !qtyInput) return null;

  const name = nameInput.value.trim();
  const rawPrice = priceInput.value;
  const rawQty = qtyInput.value;
  const price = Number(rawPrice);
  const qty = Number(rawQty);

  if (
    name === "" ||
    rawPrice === "" ||
    rawQty === "" ||
    Number.isNaN(price) ||
    Number.isNaN(qty) ||
    price <= 0 ||
    qty <= 0
  ) {
    return null;
  }

  return {
    name,
    price,
    qty,
  };
}

const clearItemsButton = document.getElementById("clear-items");
const calculateButton = document.getElementById("calculate");

if (clearItemsButton) {
  clearItemsButton.addEventListener("click", function () {
    cartItems.length = 0;
    renderItemList();
    resetInputForm();
    resetResult();
  });
}

if (calculateButton) {
  calculateButton.addEventListener("click", function () {
    const item = getCurrentInputItem();
    if (!item) {
      alert("Semua input wajib diisi. Price dan Quantity harus lebih dari 0.");
      return;
    }

    // Alur calculate: simpan item baru -> update daftar -> reset form -> hitung total kumulatif.
    cartItems.push(item);
    renderItemList();
    resetInputForm();

    const result = calculateSubtotal(cartItems);
    const tax = calculateTax(result.finalSubtotal);
    const total = calculateTotal(result.finalSubtotal, tax);

    renderResult(result, tax, total);
  });
}
