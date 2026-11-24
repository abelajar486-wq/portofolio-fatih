import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface SeedPage {
  title: string;
  body: string;
}

interface SeedBook {
  title: string;
  author: string;
  year: number;
  genre: string;
  synopsis: string;
  pages: SeedPage[];
}

const pages = (items: [string, string][]): SeedPage[] =>
  items.map(([title, body]) => ({ title, body }));

const categories = [
  { name: "Penguasa Langit Mars", genre: "Novel", description: "Novel dan cerita rekaan" },
  { name: "Buku Materi Kelas 10 IPA", genre: "Ilmu Pengetahuan", description: "Buku ilmu pengetahuan alam" },
  { name: "Pemenang Perang Dunia 2", genre: "Non-Fiksi", description: "Buku tentang peristiwa masa lalu" },
  { name: "Bagaimana Cara Membuat AI", genre: "Pendidikan", description: "Komputer, pemrograman, dan internet" },
  { name: "Al-Qur'an", genre: "Bekal Akhirat", description: "Kitab suci umat Islam" },
];

const featuredBooks: SeedBook[] = [
  {
    title: "Penguasa Langit Mars",
    author: "Raka Ardiansyah",
    year: 2024,
    genre: "Fiksi Ilmiah",
    synopsis:
      "Tahun 2187. Ketika bandara antariksa terakhir di Mars kehilangan kendali, seorang teknisi muda harus memilih antara menyelamatkan kota atau mengungkap rahasia yang dikubur tiga generasi.",
    pages: pages([
      [
        "Pembukaan",
        "Langit Mars Tidak Pernah Biru\n\nDi atas kota Nadir, langit berwarna karat. Debu merah bergulir pelan seperti sungai yang lupa arah pulang. Nala berdiri di teras observatorium, memegang cangkir kopi yang sudah dingin sejak sejam lalu.\n\n\"Kamu masih di sini?\" tanya Biru, rekan sejawatnya, sambil menyandarkan tubuh di tiang pintu.\n\n\"Aku sedang menghitung,\" jawab Nala. \"Berapa lama lagi sebelum langit ini jatuh.\"\n\nBiru tertawa kecil, tapi tawanya patah di tengah.",
      ],
      [
        "Bab 1 — Sinyal",
        "Pukul 03.12 waktu koloni, seluruh sistem di Nadir berbicara dalam bahasa yang tidak dikenal.\n\nNala membuka log terminal dan menemukan satu baris pesan yang terus berulang: *jangan naikkan perisai.*\n\nBukan kode, bukan peringatan teknis. Manusia.\n\nEntah dari mana. Entah siapa.",
      ],
      [
        "Bab 2 — Teknisi Malam",
        "Ruang mesin di bawah menara tua hanya lampu darurat yang menyala. Nala menyusuri koridor yang berbau logam panas dan membuat segalanya terasa seperti rongsokan berteriak.\n\nAda jejak kaki segar di debu.\n\nBiru sudah lebih dulu di sini.",
      ],
      [
        "Bab 3 — Kota yang Menahan Napas",
        "Dewan koloni mengadakan rapat darurat. Nala duduk di barisan paling belakang sambil mengamati layar besar yang menampilkan prakiraan badai.\n\nKatanya badai. Tapi badai tidak pernah bergerak melawan angin.",
      ],
      [
        "Epilog",
        "Pagi pertama setelah badai, langit Mars masih karat. Tapi untuk pertama kalinya sejak lama, Nala tidak menghitung.\n\nIa hanya menatap, dan langit itu, entah kenapa, terasa sedikit lebih ringan.",
      ],
    ]),
  },
  {
    title: "Bagaimana Cara Membuat AI",
    author: "Siti Rahmawati",
    year: 2025,
    genre: "Pendidikan",
    synopsis:
      "Panduan santai untuk pelajar SMA yang ingin paham cara kerja kecerdasan buatan — dari data, model, sampai kenapa AI kadang keliru.",
    pages: pages([
      [
        "Pembukaan",
        "Kecerdasan buatan bukan sihir\n\nKalau kamu pernah bertanya-tanya bagaimana aplikasi bisa menebak selera musikmu, atau bagaimana kamera mengenali wajah temanmu, jawabannya selalu berawal dari dua kata: data dan pola.\n\nBuku ini tidak akan membuatmu jadi ilmuwan AI dalam satu malam. Tapi setidaknya, setelah membaca, kamu akan berhenti menganggap AI sebagai kotak hitam.",
      ],
      [
        "Bab 1 — Apa Itu AI?",
        "AI adalah program yang belajar dari contoh. Bayangkan kamu mengajarkan anak kecil mengenali kucing dengan menunjukkan ratusan gambar kucing. Tidak ada rumus, hanya contoh yang banyak.\n\nModel AI bekerja kurang lebih sama, hanya saja ia melihat jutaan contoh dalam hitungan menit.",
      ],
      [
        "Bab 2 — Data adalah Bahan Bakar",
        "Model yang baik bergantung pada data yang baik. Kalau datanya berisi prasangka, keluaran model juga akan berprasangka.\n\nInilah kenapa etika data bukan pelajaran tambahan — ia bagian inti.",
      ],
      [
        "Bab 3 — Latih, Uji, Ulangi",
        "Setiap model punya tiga tahap: latihan, pengujian, dan penyempurnaan. Sama seperti belajar untuk ujian. Tidak ada yang sekali jadi, kecuali mitos.",
      ],
      [
        "Latihan",
        "1. Cari satu aplikasi yang memakai AI.\n2. Tebak data apa yang mungkin dipakai untuk melatihnya.\n3. Diskusikan dengan temanmu: apa yang bisa salah?",
      ],
    ]),
  },
  {
    title: "Pemenang Perang Dunia II",
    author: "Bima Prasetyo",
    year: 2021,
    genre: "Sejarah",
    synopsis:
      "Rangkaian peristiwa, tokoh, dan keputusan besar yang membentuk akhir Perang Dunia II — ditulis ringkas dan mudah dicerna.",
    pages: pages([
      [
        "Pembukaan",
        "Enam tahun, enam benua\n\nPerang Dunia II dimulai dari satu tembakan di Polandia dan berakhir di atas kapal perang di Teluk Tokyo. Di antaranya, jutaan nyawa dan keputusan yang mengubah peta dunia.\n\nBuku ini mencoba menceritakannya tanpa membebani pembaca dengan rentetan tanggal.",
      ],
      [
        "Bab 1 — Titik Balik",
        "Stalingrad, 1943. Kota itu menjadi simbol bagaimana medan dan cuaca bisa mengalahkan jumlah pasukan yang jauh lebih besar.\n\nSejarawan sepakat: setelah Stalingrad, arah perang berubah.",
      ],
      [
        "Bab 2 — Pesan di Tengah Malam",
        "Banyak kemenangan tidak terjadi di medan tempur, tetapi di ruang sandi. Enigma dan Ultra adalah nama yang wajib disebut di sini.",
      ],
      [
        "Penutup",
        "Damai tidak dibuat sekali jadi. Ia dirawat setiap hari oleh orang-orang yang memilih untuk mengingat.",
      ],
    ]),
  },
  {
    title: "Ruang Tunggu di Ujung Kota",
    author: "Dewi Anggraini",
    year: 2023,
    genre: "Novel",
    synopsis:
      "Seorang petugas stasiun yang mencatat semua kedatangan dan kepergian menemukan surat tanpa nama di bangku ruang tunggu setiap Sabtu pagi.",
    pages: pages([
      [
        "Pembukaan",
        "Kereta terakhir pukul 23.40\n\nPak Sumarno sudah tiga puluh tahun duduk di bilik kaca itu. Ia mengenal setiap jadwal, setiap suara roda, dan setiap wajah yang tertidur di bangku kayu ruang tunggu.\n\nYang tidak ia kenal, sampai Sabtu itu, adalah surat yang tertinggal di bangku nomor tujuh.",
      ],
      [
        "Bab 1 — Surat Pertama",
        "\"Untuk siapa pun yang menemukan ini,\"\n\nBunyinya. Tidak ada nama, tidak ada alamat.\n\nPak Sumarno membaca sampai tiga kali, lalu melipatnya dengan rapi dan menyimpannya di saku seragam.",
      ],
      [
        "Bab 2 — Setiap Sabtu",
        "Surat berikutnya datang seminggu kemudian. Dan yang berikutnya lagi. Selalu di bangku yang sama, selalu sebelum kereta jam tujuh.\n\nPak Sumarno mulai datang lebih pagi.",
      ],
      [
        "Epilog",
        "Stasiun itu akhirnya direnovasi. Bangku nomor tujuh diganti bangku logam yang dingin.\n\nTapi Pak Sumarno tetap membawa satu surat di sakunya, setiap hari, ke mana pun ia pergi.",
      ],
    ]),
  },
  {
    title: "Fisika untuk Penasaran",
    author: "Dr. Hana Lestari",
    year: 2022,
    genre: "Ilmu Pengetahuan",
    synopsis:
      "Kenapa langit biru, kenapa es mengapung, kenapa waktu terasa lambat saat menunggu — fisika di balik pertanyaan sehari-hari.",
    pages: pages([
      [
        "Pembukaan",
        "Fisika ada di kelas, dan di dapur\n\nKalau kamu pernah mengaduk teh dengan gula dan mengamati prosesnya, kamu sudah melakukan eksperimen fisika.\n\nBuku ini adalah kumpulan pertanyaan \"kenapa\" yang sering dianggap remeh, lalu dijawab dengan fisika yang sesungguhnya.",
      ],
      [
        "Bab 1 — Kenapa Langit Biru?",
        "Cahaya matahari putih berisi semua warna. Ketika melewati molekul udara, warna biru tersebar paling banyak. Inilah yang disebut hamburan Rayleigh.\n\nWarna biru sampai ke matamu dari segala arah.",
      ],
      [
        "Bab 2 — Kenapa Es Mengapung?",
        "Air adalah pengecualian aneh: wujud padatnya lebih ringan daripada wujud cairnya. Ikatan hidrogen menyusun kristal dengan celah.\n\nItulah sebabnya es mengapung, dan ikan bisa bertahan hidup di bawahnya.",
      ],
      [
        "Bab 3 — Waktu yang Relatif",
        "Waktu tidak berjalan sama untuk semua orang. Itu terdengar seperti kalimat puitis, sampai kamu melihat jam atom di pesawat terbang dan di darat.",
      ],
    ]),
  },
  {
    title: "Surga di Balik Jendela",
    author: "Nadia Kartika",
    year: 2024,
    genre: "Novel",
    synopsis:
      "Dua anak yang tumbuh di gang sempit menemukan jendela toko buku tua yang memperlihatkan dunia yang tidak pernah mereka bayangkan.",
    pages: pages([
      [
        "Pembukaan",
        "Gang itu sempit, tapi jendelanya lebar\n\nOrang dewasa bilang toko buku itu sudah tutup sejak sebelum kita lahir. Tapi lampu di dalamnya masih menyala setiap malam.\n\nAku dan Sulaiman menemuinya di malam yang tidak sengaja.",
      ],
      [
        "Bab 1 — Toko yang Tidak Pernah Tutup",
        "Pintunya berdecit, tetapi raknya bersih. Bau kertas tua menyambut, seperti jalanan setelah hujan.\n\nTidak ada penjaga. Hanya satu tulisan di meja: silakan baca, jangan lupa pulang.",
      ],
      [
        "Bab 2 — Dunia di Rak Ketiga",
        "Setiap buku yang kami buka menampilkan kota yang tidak ada di peta. Ada laut, ada gunung, ada jalanan sehebat gang kami.\n\nKami mulai datang setiap malam.",
      ],
      [
        "Epilog",
        "Toko itu tetap di gang yang sama, di pojok yang sama.\n\nTapi baru setelah lama, aku sadar: jendela itu tidak menampilkan dunia lain. Ia hanya menampilkan dunia yang selama ini kami abaikan.",
      ],
    ]),
  },
];

async function main() {
  for (const category of categories) {
    const existing = await prisma.category.findFirst({ where: { name: category.name } });
    if (!existing) {
      await prisma.category.create({ data: category });
    }
  }

  for (const book of featuredBooks) {
    const existing = await prisma.book.findFirst({ where: { title: book.title } });
    const data = {
      author: book.author,
      year: book.year,
      genre: book.genre,
      synopsis: book.synopsis,
      pages: JSON.stringify(book.pages),
    };

    if (existing) {
      await prisma.book.update({ where: { id: existing.id }, data });
    } else {
      await prisma.book.create({ data: { title: book.title, ...data } });
    }
  }

  const [bookCount, categoryCount] = await Promise.all([
    prisma.book.count(),
    prisma.category.count(),
  ]);

  console.log(`Seed selesai: ${bookCount} buku, ${categoryCount} kategori.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
