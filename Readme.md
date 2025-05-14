# 📋 Task Manager CLI

Aplikasi Command Line Interface (CLI) sederhana untuk mengelola daftar tugas (to-do list) menggunakan Node.js dan file JSON sebagai penyimpanan data.

## 🧾 Fitur

- Menambahkan tugas baru
- Memperbarui judul tugas
- Menghapus tugas
- Mengubah status tugas (todo, inprogress, done)
- Menampilkan semua tugas
- Menampilkan tugas berdasarkan status:
  - ✅ Selesai (done)
  - 🚧 Sedang dikerjakan (inprogress)
  - ❌ Belum dikerjakan (todo)

## 🚀 Cara Menjalankan

### 1. Clone atau Download Proyek

```bash
git clone https://github.com/namauser/task-manager-cli.git
cd task-manager-cli
```

### 2. Install Dependency

```bash
npm install
```

## 📎 Contoh Penggunaan

### 1. Menambahkan tugas

```
node index.js add --title="Mengerjakan tugas"
```

### 2. Update tugas

```
node index.js update --id=1 --title="Mengerjakan tugas matematika"
```

### 3. Menghapus Tugas

```
node index.js delete --id=1
```

### 4. Mengubah status tugas

```
node index.js status --id=2 --status=done
```

### 5. Menampilkan tugas

- Menampilkan semua tugas

```
node index.js list --filter=all
```

- Menampilkan tugas yang sudah selesai

```
node index.js list --filter=done
```

- Menampilkan tugas yang sedang dikerjakan

```
node index.js list --filter=inprogress
```

- Menampilkan tugas yang akan dikerjakan

```
node index.js list --filter=todo
```
