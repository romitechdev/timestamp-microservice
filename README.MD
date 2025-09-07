
# 🕒 Timestamp Microservice

Proyek ini adalah implementasi **Timestamp Microservice** menggunakan **Node.js** + **Express**.  
Proyek ini dibuat untuk menyelesaikan tantangan **freeCodeCamp Back End Development and APIs**.

## 🚀 Fitur

- **GET /api/**  
  Mengembalikan **waktu sekarang** dalam format Unix dan UTC.
- **GET /api/:date**  
  - Jika `:date` berupa **string tanggal** (contoh: `2015-12-25`), API akan mengembalikan timestamp valid.
  - Jika `:date` berupa **angka** (contoh: `1451001600000`), API akan memprosesnya sebagai **milliseconds**.
  - Jika `:date` tidak valid, API akan mengembalikan:
    ```json
    { "error": "Invalid Date" }
    ```

---

## 🧩 Contoh Penggunaan API

### 1. Waktu Sekarang
**Request**  
````

GET /api/

````

**Response**
```json
{
  "unix": 1694083200000,
  "utc": "Thu, 07 Sep 2025 00:00:00 GMT"
}
````

---

### 2. Input String Tanggal

**Request**

```
GET /api/2015-12-25
```

**Response**

```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

---

### 3. Input Unix Timestamp

**Request**

```
GET /api/1451001600000
```

**Response**

```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

---

### 4. Input Tidak Valid

**Request**

```
GET /api/abcde
```

**Response**

```json
{
  "error": "Invalid Date"
}
```

---

## 🛠️ Teknologi yang Digunakan

* [Node.js](https://nodejs.org/) — Runtime JavaScript
* [Express.js](https://expressjs.com/) — Framework backend
* [Cors](https://www.npmjs.com/package/cors) — Mengatasi masalah CORS
* [Vercel](https://vercel.com/) — Deploy project

---

## 📦 Instalasi & Menjalankan Proyek Secara Lokal

### 1. Clone Repository

```bash
git clone https://github.com/romitechdev/timestamp-microservice.git
cd timestamp-microservice
```

### 2. Install Dependency

```bash
npm install
```

### 3. Jalankan Server

```bash
npm start
```

### 4. Akses Project

Buka browser dan masuk ke:
[http://localhost:3000](http://localhost:3000)

---

## 🌐 Deploy ke Vercel

1. Push project ke GitHub.
2. Buka [https://vercel.com/](https://vercel.com/).
3. Klik **New Project** → pilih repository kamu.
4. Klik **Deploy**.
5. Selesai! Kamu akan dapat link publik, misalnya:

   ```
   https://timestamp-microservice-voad.vercel.app
   ```

---

## 🧾 Link Penting

* **Solution Link (Vercel):**
  [https://timestamp-microservice-romi.vercel.app](https://timestamp-microservice-voad.vercel.app)
* **Source Code (GitHub):**
  [https://github.com/<username>/timestamp-microservice-romi](https://github.com/romitechdev/timestamp-microservice)

---

## 👨‍💻 Kontributor

* **Nama:** Muhromin
* **Project:** FreeCodeCamp - Timestamp Microservice
* **Jurusan:** IT

---

## 📜 Lisensi

Proyek ini bebas digunakan untuk belajar dan keperluan pribadi.
Lisensi: **MIT**

