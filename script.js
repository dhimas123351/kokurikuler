document.addEventListener('DOMContentLoaded', () => {
    // Ambil elemen-elemen DOM
    const modal = document.getElementById('budayaModal');
    const openBtn = document.getElementById('openBudayaModal');
    const closeSpans = document.querySelectorAll('.close-btn, .btn-close-modal');

    // Ketika tombol 'Lihat Keunikan Budaya Kuliner' diklik, tampilkan modal
    openBtn.onclick = function() {
        modal.style.display = "block";
    }

    // Ketika tombol close (x atau Tutup) diklik, sembunyikan modal
    closeSpans.forEach(btn => {
        btn.onclick = function() {
            modal.style.display = "none";
        }
    });

    // Ketika pengguna mengklik di luar modal, sembunyikan modal
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});
// Data Kuliner Nusantara (10 Makanan)
const kulinerData = {
    rendang: {
        nama: "Rendang Daging Sapi",
        asal: "Sumatera Barat",
        sejarah: "Rendang adalah hidangan adat Minangkabau yang melambangkan kekayaan budaya dan ketahanan. Proses memasaknya yang memakan waktu lama melambangkan kesabaran dan kebijaksanaan. Dahulu dibawa untuk perjalanan jauh.",
        resep: [
            "Bahan Utama: Daging sapi, santan kental.",
            "Bumbu Dasar: Cabai, bawang, jahe, lengkuas, serai, daun kunyit, daun jeruk.",
            "Proses: Dimasak perlahan (dirandang) hingga santan mengering dan bumbu meresap sempurna, berubah dari gulai, kalio, hingga rendang."
        ]
    },
    soto: {
        nama: "Soto Ayam Kuning",
        asal: "Berbagai Daerah (Ikonik)",
        sejarah: "Soto diperkirakan berasal dari pengaruh masakan Tionghoa. Diadaptasi dengan rempah lokal, menghasilkan ratusan variasi di seluruh nusantara. Cepat populer karena disajikan hangat dan mengenyangkan.",
        resep: [
            "Bahan Utama: Ayam suwir, bihun, tauge, telur rebus, kuah kaldu.",
            "Bumbu Dasar: Kunyit (untuk warna kuning), jahe, bawang putih, merica.",
            "Penyajian: Ditaburi koya (kerupuk udang halus) dan sambal."
        ]
    },
    nasigoreng: {
        nama: "Nasi Goreng Ikonik",
        asal: "Ikon Nasional",
        sejarah: "Berasal dari tradisi Tionghoa untuk menghindari pembuangan sisa nasi semalam. Di Indonesia, dikembangkan menggunakan kecap manis yang menjadikannya ciri khas, mudah ditemukan dan dimasak.",
        resep: [
            "Bahan Utama: Nasi putih dingin, telur, irisan ayam/udang.",
            "Bumbu Dasar: Bawang merah, bawang putih, cabai, dan kecap manis.",
            "Teknik: Dimasak cepat di atas wajan panas."
        ]
    },
    gadogado: {
        nama: "Gado-Gado Betawi",
        asal: "Jakarta / Betawi",
        sejarah: "Nama 'Gado-gado' berarti campur-aduk. Populer sejak zaman kolonial, menunjukkan akulturasi masakan Eropa dengan bahan-bahan lokal (sayuran segar) yang disiram saus kacang khas Jawa.",
        resep: [
            "Bahan Utama: Aneka sayuran rebus (kangkung, kacang panjang), tauge, kentang rebus, lontong.",
            "Saus: Saus kacang kental yang kaya rasa dengan asam jawa dan gula merah.",
            "Pelengkap: Kerupuk udang dan bawang goreng."
        ]
    },
    sate: {
        nama: "Sate Ayam Madura",
        asal: "Madura",
        sejarah: "Sate muncul pada awal abad ke-19, dipengaruhi oleh pedagang India dan Arab. Sate Madura menonjol dengan potongan daging yang lebih kecil dan saus kacang yang manis-gurih.",
        resep: [
            "Bahan Utama: Potongan daging ayam/kambing, tusuk sate.",
            "Bumbu: Bumbu kacang (Madura) atau bumbu kecap pedas (Maranggi).",
            "Proses: Dimarinasi, dibakar, lalu disiram saus saat disajikan."
        ]
    },
    rawon: {
        nama: "Rawon Daging Sapi",
        asal: "Jawa Timur",
        sejarah: "Rawon adalah salah satu masakan tertua di Jawa. Ciri khasnya adalah penggunaan kluwek (biji hitam) yang memberikan warna gelap dan rasa gurih yang unik. Dahulu sering disajikan dalam upacara adat kerajaan.",
        resep: [
            "Bahan Utama: Daging sapi sandung lamur, kuah.",
            "Bumbu Dasar: Kluwek (memberi warna hitam), bawang merah, bawang putih, jahe.",
            "Penyajian: Disajikan dengan tauge pendek, sambal, dan telur asin."
        ]
    },
    nasipadang: {
        nama: "Nasi Padang (Aneka Lauk)",
        asal: "Sumatera Barat",
        sejarah: "Muncul seiring migrasi suku Minangkabau. Konsepnya dirancang agar cepat saji di rumah makan (*lapau*), dengan semua lauk (seperti rendang dan gulai) sudah dimasak dan dipajang (*hidang*).",
        resep: [
            "Komponen: Nasi putih, lauk pilihan (Ayam Pop, Gulai, Rendang), sayur nangka.",
            "Ciri Khas: Setiap lauk memiliki bumbu santan dan cabai yang sangat kaya dan meresap."
        ]
    },
    pempek: {
        nama: "Pempek Kapal Selam",
        asal: "Palembang, Sumatera Selatan",
        sejarah: "Pempek sudah ada sejak abad ke-16. Konon, nama 'Pempek' berasal dari sapaan Apek (pria tua Tionghoa) yang mempopulerkan makanan berbahan ikan dan sagu ini.",
        resep: [
            "Bahan Utama: Adonan ikan (Belida/Tenggiri) dan tepung sagu.",
            "Cuko: Kuah hitam kental yang terbuat dari gula merah, asam jawa, dan cuka, memberikan rasa pedas, manis, dan asam.",
            "Variasi: Kapal Selam (diisi telur), Lenjer, Adaan."
        ]
    },
    gudeg: {
        nama: "Gudeg Nangka",
        asal: "Yogyakarta",
        sejarah: "Gudeg lahir pada masa pembangunan Kesultanan Mataram. Para pekerja memasak nangka muda yang melimpah dan dimasak dalam waktu sangat lama untuk menghasilkan rasa manis dan tekstur lembut.",
        resep: [
            "Bahan Utama: Nangka muda, santan, gula merah.",
            "Ciri Khas: Dimasak berjam-jam (dikudek), menggunakan daun jati untuk warna merah kecokelatan yang khas.",
            "Penyajian: Disajikan dengan krecek (kulit sapi) dan telur pindang."
        ]
    },
    ayambetutu: {
        nama: "Ayam Betutu",
        asal: "Bali",
        sejarah: "Ayam Betutu adalah hidangan tradisional yang sering digunakan dalam upacara adat dan persembahan. Proses memasaknya yang diisi bumbu lalu dikukus/dipanggang utuh melambangkan kesempurnaan.",
        resep: [
            "Bahan Utama: Ayam utuh.",
            "Bumbu: Bumbu *Base Genep* (bumbu dasar Bali) yang sangat kaya rempah seperti kunyit, jahe, kencur, cabai, dan terasi.",
            "Proses: Dimasak utuh dalam waktu lama (slow-cooked) hingga bumbu meresap ke tulang."
        ]
    }
};

// Logika Pop-up
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('kulinerModal');
    const modalBody = document.getElementById('modal-body-content');
    const openBtns = document.querySelectorAll('.open-modal-btn');
    const closeBtn = document.querySelector('.close-btn');

    // 1. Fungsi untuk mengisi dan menampilkan Modal
    openBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const foodId = this.getAttribute('data-food');
            const data = kulinerData[foodId];
            
            if (data) {
                // Buat konten HTML untuk Modal
                let contentHTML = `
                    <h2>${data.nama} <small>(${data.asal})</small></h2>
                    
                    <h3>📜 Sejarah Singkat</h3>
                    <p class="history">${data.sejarah}</p>
                    
                    <h3>🌶️ Resep Singkat</h3>
                    <ul>
                        ${data.resep.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                `;
                
                modalBody.innerHTML = contentHTML;
                modal.style.display = "block"; // Tampilkan Modal
            }
        });
    });

    // 2. Menutup Modal ketika tombol 'x' diklik
    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // 3. Menutup Modal ketika di luar area Modal diklik
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});