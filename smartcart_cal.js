// function getItem() {
//   const inputs = document.querySelectorAll(".item input");

//   const name = inputs[0].value;
//   const price = Number(inputs[1].value);
//   const qty = Number(inputs[2].value);

//   if (!name || isNaN(price) || isNaN(qty)) return null;

//   return { name, price, qty };
// }
const Disc = 0.1

const items = [
  { name: "Fish A", price: 20, qty: 2 },
  { name: "Fish B", price: 5, qty: 4 },
];

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

// const calculateButton = document.getElementById("#calculate");

// if (calculateButton) {
//   calculateButton.addEventListener("click", function () {
//     const items = getItems();

//     const subtotal = calculateSubtotal(items);
//     const tax = calculateTax(subtotal);
//     const total = calculateTotal(subtotal, tax);

//     document.getElementById("subtotal").textContent = subtotal;
//     document.getElementById("tax").textContent = tax;
//     document.getElementById("total").textContent = total;
//   });
// }


const result = calculateSubtotal(items);

const tax = calculateTax(result.finalSubtotal);
const total = calculateTotal(result.finalSubtotal, tax);


// OUTPUT
console.log(`------- Selamat Datang ------`);
console.log(`Subtotal: ${result.subtotal}`);
console.log(`Diskon: ${result.discount} dari ${Disc * 100} %`);
console.log(`Harga setelah diskon: ${result.finalSubtotal}`);
console.log(`Tax: ${tax}`);
console.log(`Total Belanja: ${total}`);

