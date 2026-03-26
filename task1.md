# 🧪 Task: Smart Cart Calculator (JavaScript)

## 🎯 Tujuan

Membuat sistem perhitungan sederhana menggunakan JavaScript untuk menghitung total belanja dari beberapa item.

Task ini bertujuan untuk melihat:

- Cara berpikir logika
- Struktur kode
- Kerapihan penulisan fungsi
- Kemampuan handle edge cases

---

## 📥 Input Data

Gunakan contoh data berikut:

```js
const items = [
  { name: "Fish A", price: 10, qty: 2 },
  { name: "Fish B", price: 5, qty: 4 },
];
```

---

## 📤 Output yang Diharapkan

Program harus menghasilkan:

- Subtotal (jumlah harga × qty semua item)
- Pajak 11%
- Total akhir (subtotal + pajak)

Contoh output (bebas format, yang penting jelas):

```
Subtotal: 40
Tax (11%): 4.4
Total: 44.4
```

---

## ⚙️ Requirements

1. Gunakan **function terpisah** (jangan semua logic dalam 1 blok)

   Minimal harus ada:
   - `calculateSubtotal(items)`
   - `calculateTax(subtotal)`
   - `calculateTotal(subtotal, tax)`

2. Kode harus:
   - Mudah dibaca
   - Tidak redundant
   - Menggunakan variable yang jelas

3. Output harus ditampilkan menggunakan:
   - `console.log()` (minimal)

---

## ⭐ Bonus (Opsional, tapi sangat dianjurkan)

Jika ingin nilai lebih, coba tambahkan:

- Diskon (misalnya jika subtotal > 50, diskon 10%)
- Validasi input (misalnya qty tidak boleh negatif)
- Format output lebih rapi
- Buat function reusable (bisa dipakai ulang)

---

## 🚀 Challenge Tambahan (Jika Selesai Cepat)

Convert logic ini menjadi:

- Halaman HTML sederhana
- User bisa input item sendiri
- Hasil langsung ditampilkan di browser

---

## 📊 Penilaian

Yang akan dinilai:

- Struktur kode
- Cara berpikir
- Kerapihan
- Kemampuan menjelaskan kode
- Inisiatif (bonus features)

---

## ⏱️ Waktu Pengerjaan

Estimasi: 1–2 jam

---

## ❗ Catatan

Jika ada yang tidak jelas, **silakan bertanya**. Cara kamu bertanya juga menjadi bagian dari penilaian.
