// Data settingan terstruktur (Absen 1 = Soal 1, dst sampai 30)
const dataSiswa = [
    { absen: 1, nama: "Siswa 01" }, { absen: 2, nama: "Siswa 02" },
    { absen: 3, nama: "Siswa 03" }, { absen: 4, nama: "Siswa 04" },
    { absen: 5, nama: "Siswa 05" }, { absen: 6, nama: "Siswa 06" },
    { absen: 7, nama: "Siswa 07" }, { absen: 8, nama: "Siswa 08" },
    { absen: 9, nama: "Siswa 09" }, { absen: 10, nama: "Siswa 10" },
    { absen: 11, nama: "Siswa 11" }, { absen: 12, nama: "Siswa 12" },
    { absen: 13, nama: "Siswa 13" }, { absen: 14, nama: "Siswa 14" },
    { absen: 15, nama: "Siswa 15" }, { absen: 16, nama: "Siswa 16" },
    { absen: 17, nama: "Siswa 17" }, { absen: 18, nama: "Siswa 18" },
    { absen: 19, nama: "Siswa 19" }, { absen: 20, nama: "Siswa 20" },
    { absen: 21, nama: "Siswa 21" }, { absen: 22, nama: "Siswa 22" },
    { absen: 23, nama: "Siswa 23" }, { absen: 24, nama: "Siswa 24" },
    { absen: 25, nama: "Siswa 25" }, { absen: 26, nama: "Siswa 26" },
    { absen: 27, nama: "Siswa 27" }, { absen: 28, nama: "Siswa 28" },
    { absen: 29, nama: "Siswa 29" }, { absen: 30, nama: "Siswa 30" }
];

let currentIndex = 0; // Penanda urutan absen saat ini

function jalankanSpin() {
    const wheelAbsen = document.getElementById("wheel-absen");
    const wheelSoal = document.getElementById("wheel-soal");
    const spinBtn = document.getElementById("spin-btn");
    const resultBox = document.getElementById("result-box");
    const resultText = document.getElementById("result-text");

    // Cek jika sudah mencapai siswa ke-30
    if (currentIndex >= dataSiswa.length) {
        wheelAbsen.innerHTML = "Habis";
        wheelSoal.innerHTML = "Habis";
        spinBtn.disabled = true;
        resultText.innerHTML = "Semua siswa sudah mendapatkan bagian soal masing-masing!";
        resultBox.classList.remove("hidden");
        return;
    }

    spinBtn.disabled = true;
    resultBox.classList.add("hidden");

    let counter = 0;
    // Efek animasi putar bersamaan pada kedua kotak
    let interval = setInterval(() => {
        let randAbsen = Math.floor(Math.random() * dataSiswa.length);
        let randSoal = Math.floor(Math.random() * 30) + 1;

        wheelAbsen.innerHTML = `Absen ${dataSiswa[randAbsen].absen}`;
        wheelSoal.innerHTML = `Soal No. ${randSoal}`;
        
        counter++;
        
        // Berhenti setelah 20 siklus kedipan (animasi putar)
        if (counter > 20) {
            clearInterval(interval);

            // Ambil data asli sesuai urutan (settingan)
            let siswaAktif = dataSiswa[currentIndex];
            let nomorSoalSet = currentIndex + 1; // Absen 1 -> Soal 1

            // Tampilkan hasil akhir yang akurat
            wheelAbsen.innerHTML = `Absen ${siswaAktif.absen}<br><small>${siswaAktif.nama}</small>`;
            wheelSoal.innerHTML = `Soal No. ${nomorSoalSet}`;

            resultText.innerHTML = `Absen ${siswaAktif.absen} (${siswaAktif.nama}) mendapatkan Soal No. ${nomorSoalSet}`;
            resultBox.classList.remove("hidden");

            currentIndex++; // Geser ke absen berikutnya untuk putaran selanjutnya
            spinBtn.disabled = false;
        }
    }, 80);
}
