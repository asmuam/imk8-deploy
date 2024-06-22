import os

# Baca konten file sumber
source_file_path = r"D:\STIS\IMK\Redesign\Pj. Wali Kota Bekasi Resmi Luncurkan Aplikasi E-Open 2.0.html"
with open(source_file_path, "r", encoding="utf-8") as file:
    konten_asli = file.read()

# Daftar judul berita
beritaData = [
    "Aplikasi SIMODALINDAG, Pj. Wali Kota Bekasi: Mempermudah Pelayanan Perindustrian dan Perdagangan",
    "Pj. Wali Kota Hadiri Acara Pisah Sambut di Kejaksaan Negeri Kota Bekasi",
    "Pemerintah Kota Bekasi Resmi Membatalkan Proyek PLTSa Bantargebang",
    "Yolla Gani Kukuhkan Bunda Literasi Tingkat Kecamatan dan Kelurahan se-Kota Bekasi",
    "Workshop Penguatan Tim Pencegahan dan Penanganan Kekerasan pada Satuan Pendidikan",
    "Pj Wali Kota Bekasi Sambut Ketua Komisi VIII DPR RI Dalam Rangka Kunker di Kota Bekasi",
    "TP PKK Kota Bekasi Hadir Di Seminar Literasi Digital Bagi Perempuan", 
    "Pj Wali Kota Bekasi Resmi Kunjungi Pusat Pembibitan Jamur di Pedesaan",
    "Ratusan Pelajar di Kota Bekasi Ikuti Lomba Pidato Bahasa Inggris"
]

# Path directory untuk menyimpan file duplikat
output_dir = os.path.dirname(source_file_path)

# Fungsi untuk mengganti karakter yang tidak diizinkan dalam nama file
def safe_filename(filename):
    return "".join(char if char.isalnum() or char in " _-" else "_" for char in filename)

# Simpan file HTML duplikat dengan nama file dari judul yang berbeda
for judul in beritaData:
    nama_file = safe_filename(judul) + ".html"
    file_path = os.path.join(output_dir, nama_file)
    with open(file_path, "w", encoding="utf-8") as file:
        file.write(konten_asli)

print("File HTML duplikat telah dibuat.")
