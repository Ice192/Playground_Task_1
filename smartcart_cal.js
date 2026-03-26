const Disc = 0.1

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

function calculateTax(amount) {
  return amount * 0.11;
}

function calculateTotal(amount, tax) {
  return amount + tax;
}

function getItems() {
  const itemBlocks = document.querySelectorAll(".item");
  const parsedItems = [];

  for (const block of itemBlocks) {
    const inputs = block.querySelectorAll("input");
    if (inputs.length < 3) continue;

    const name = inputs[0].value.trim();
    const rawPrice = inputs[1].value;
    const rawQty = inputs[2].value;

    if (name === "" && rawPrice === "" && rawQty === "") {
      continue;
    }

    parsedItems.push({
      name: name || "Item",
      price: Number(rawPrice) || 0,
      qty: Number(rawQty) || 0,
    });
  }

  return parsedItems;
}

function formatNumber(value) {
  return value.toFixed(2);
}

function renderResult(result, tax, total) {
  document.getElementById("subtotal").textContent = formatNumber(result.subtotal);
  document.getElementById("discount").textContent = `${formatNumber(result.discount)} dari ${Disc * 100} %`;
  document.getElementById("after-discount").textContent = formatNumber(result.finalSubtotal);
  document.getElementById("tax").textContent = formatNumber(tax);
  document.getElementById("total").textContent = formatNumber(total);
}

const calculateButton = document.getElementById("calculate");

if (calculateButton) {
  calculateButton.addEventListener("click", function () {
    const items = getItems();
    const result = calculateSubtotal(items);
    const tax = calculateTax(result.finalSubtotal);
    const total = calculateTotal(result.finalSubtotal, tax);

    renderResult(result, tax, total);

    console.log(`------- Selamat Datang ------`);
    console.log(`Subtotal: ${result.subtotal}`);
    console.log(`Diskon: ${result.discount} dari ${Disc * 100} %`);
    console.log(`Harga setelah diskon: ${result.finalSubtotal}`);
    console.log(`Tax: ${tax}`);
    console.log(`Total Belanja: ${total}`);
  });
}
