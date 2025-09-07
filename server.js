// server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.static("public")); // buat akses index.html

// Halaman utama
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// API utama
app.get("/api/:date?", (req, res) => {
  const dateParam = req.params.date;

  // Kalau kosong → pakai waktu sekarang
  if (!dateParam) {
    const now = new Date();
    return res.json({ unix: now.getTime(), utc: now.toUTCString() });
  }

  // Kalau angka → parse sebagai milliseconds
  if (/^-?\d+$/.test(dateParam)) {
    const ms = Number(dateParam);
    const dateObj = new Date(ms);
    if (dateObj.toString() === "Invalid Date") {
      return res.json({ error: "Invalid Date" });
    }
    return res.json({ unix: dateObj.getTime(), utc: dateObj.toUTCString() });
  }

  // Kalau bukan angka → parse sebagai string tanggal
  const dateObj = new Date(dateParam);
  if (dateObj.toString() === "Invalid Date") {
    return res.json({ error: "Invalid Date" });
  }

  // Kalau valid → kirim hasil
  return res.json({ unix: dateObj.getTime(), utc: dateObj.toUTCString() });
});

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
