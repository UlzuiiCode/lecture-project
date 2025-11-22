import { Dosen, Penilaian } from '@/types/dosen';

export const dummyDosen: Dosen[] = [
  {
    id: 'D001',
    nama: 'Dr. Amirhud Dalimunthe, S.T., M.Kom.',
    nip: '197506182008121002',
    foto: 'https://api.dicebear.com/7.x/avataaars/svg?seed=amirhud',
    mataKuliah: ['Matematika Lanjutan', 'Basis Data'],
    email: 'amirhud.dalimunthe@university.ac.id',
    jabatan: 'Lektor Kepala'
  },
  {
    id: 'D002',
    nama: 'Rosma Siregar, S.Kom., M.Kom.',
    nip: '199605072022032024',
    foto: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rosma',
    mataKuliah: ['Disain Grafis', 'Struktur Data'],
    email: 'rosma.siregar@university.ac.id',
    jabatan: 'Asisten Ahli'
  },
  {
    id: 'D003',
    nama: 'Muhammad Akbar Syahbana Pane, S.T., M.Sc',
    nip: '199012102015041002',
    foto: 'https://api.dicebear.com/7.x/avataaars/svg?seed=akbar',
    mataKuliah: ['Cloud Computing', 'Sistem Pengambilan Keputusan'],
    email: 'akbar.syahbana@university.ac.id',
    jabatan: 'Asisten Ahli'
  },
  {
    id: 'D004',
    nama: 'Reni Rahmadani, S.Kom., M.Kom.',
    nip: '199303092019032023',
    foto: 'https://api.dicebear.com/7.x/avataaars/svg?seed=reni',
    mataKuliah: ['TIK', 'Rekayasa Perangkat Lunak'],
    email: 'reni.rahmadani@university.ac.id',
    jabatan: 'Lektor'
  },
  {
    id: 'D005',
    nama: 'Bagoes Maulana, S.Kom., M.Kom.',
    nip: '198505122015041002',
    foto: 'https://api.dicebear.com/7.x/avataaars/svg?seed=bagoes',
    mataKuliah: ['Pemrograman Dasar', 'Internet of Things'],
    email: 'bagoes.maulana@university.ac.id',
    jabatan: 'Lektor'
  }
];

export const dummyPenilaian: Penilaian[] = [
  // Penilaian untuk Dr. Amirhud Dalimunthe
  {
    id: 'P001',
    dosenId: 'D001',
    namaMahasiswa: 'Rizki Pratama',
    kompetensiMengajar: 9,
    penyampaianMateri: 8,
    disiplinWaktu: 9,
    interaksiSikap: 9,
    komentar: 'Sangat baik dalam menjelaskan konsep pemrograman',
    timestamp: '2025-01-15T10:30:00Z'
  },
  {
    id: 'P002',
    dosenId: 'D001',
    namaMahasiswa: 'Dewi Lestari',
    kompetensiMengajar: 8,
    penyampaianMateri: 9,
    disiplinWaktu: 8,
    interaksiSikap: 9,
    komentar: 'Materi disampaikan dengan jelas dan mudah dipahami',
    timestamp: '2025-01-16T14:20:00Z'
  },
  {
    id: 'P003',
    dosenId: 'D001',
    namaMahasiswa: 'Ahmad Zain',
    kompetensiMengajar: 9,
    penyampaianMateri: 9,
    disiplinWaktu: 9,
    interaksiSikap: 10,
    timestamp: '2025-01-17T09:15:00Z'
  },
  
  // Penilaian untuk Rosma Siregar
  {
    id: 'P004',
    dosenId: 'D002',
    namaMahasiswa: 'Fani Rahmawati',
    kompetensiMengajar: 10,
    penyampaianMateri: 9,
    disiplinWaktu: 10,
    interaksiSikap: 10,
    komentar: 'Profesor terbaik! Sangat menguasai materi AI',
    timestamp: '2025-01-15T11:00:00Z'
  },
  {
    id: 'P005',
    dosenId: 'D002',
    namaMahasiswa: 'Hendra Kusuma',
    kompetensiMengajar: 9,
    penyampaianMateri: 10,
    disiplinWaktu: 9,
    interaksiSikap: 9,
    komentar: 'Penjelasan tentang machine learning sangat detail',
    timestamp: '2025-01-16T13:45:00Z'
  },
  {
    id: 'P006',
    dosenId: 'D002',
    namaMahasiswa: 'Indah Permata',
    kompetensiMengajar: 10,
    penyampaianMateri: 10,
    disiplinWaktu: 10,
    interaksiSikap: 10,
    timestamp: '2025-01-18T10:30:00Z'
  },
  {
    id: 'P007',
    dosenId: 'D002',
    namaMahasiswa: 'Joko Widodo',
    kompetensiMengajar: 9,
    penyampaianMateri: 9,
    disiplinWaktu: 10,
    interaksiSikap: 9,
    timestamp: '2025-01-19T15:00:00Z'
  },

  // Penilaian untuk Muhammad Akbar Syahbana Pane
  {
    id: 'P008',
    dosenId: 'D003',
    namaMahasiswa: 'Kartika Sari',
    kompetensiMengajar: 7,
    penyampaianMateri: 7,
    disiplinWaktu: 8,
    interaksiSikap: 8,
    komentar: 'Baik, namun terkadang terlalu cepat menjelaskan',
    timestamp: '2025-01-14T09:00:00Z'
  },
  {
    id: 'P009',
    dosenId: 'D003',
    namaMahasiswa: 'Lukman Hakim',
    kompetensiMengajar: 8,
    penyampaianMateri: 7,
    disiplinWaktu: 7,
    interaksiSikap: 8,
    timestamp: '2025-01-17T14:30:00Z'
  },

  // Penilaian untuk Reni Rahmadani
  {
    id: 'P010',
    dosenId: 'D004',
    namaMahasiswa: 'Maria Ulfa',
    kompetensiMengajar: 9,
    penyampaianMateri: 8,
    disiplinWaktu: 9,
    interaksiSikap: 9,
    komentar: 'Sangat membantu dalam memahami RPL',
    timestamp: '2025-01-15T13:00:00Z'
  },
  {
    id: 'P011',
    dosenId: 'D004',
    namaMahasiswa: 'Nina Karina',
    kompetensiMengajar: 8,
    penyampaianMateri: 9,
    disiplinWaktu: 8,
    interaksiSikap: 9,
    timestamp: '2025-01-18T11:15:00Z'
  },
  {
    id: 'P012',
    dosenId: 'D004',
    namaMahasiswa: 'Oscar Pratama',
    kompetensiMengajar: 9,
    penyampaianMateri: 9,
    disiplinWaktu: 9,
    interaksiSikap: 8,
    timestamp: '2025-01-19T10:00:00Z'
  },

  // Penilaian untuk Bagoes Maulana
  {
    id: 'P013',
    dosenId: 'D005',
    namaMahasiswa: 'Putri Amelia',
    kompetensiMengajar: 8,
    penyampaianMateri: 8,
    disiplinWaktu: 7,
    interaksiSikap: 8,
    komentar: 'Kreatif dalam mengajar mobile programming',
    timestamp: '2025-01-16T15:30:00Z'
  },
  {
    id: 'P014',
    dosenId: 'D005',
    namaMahasiswa: 'Qori Nugroho',
    kompetensiMengajar: 8,
    penyampaianMateri: 9,
    disiplinWaktu: 8,
    interaksiSikap: 9,
    timestamp: '2025-01-18T14:00:00Z'
  }
];

// Initialize localStorage with dummy data if empty
export const initializeDummyData = () => {
  // Always update dosen data from dummyDosen to ensure latest data
  localStorage.setItem('dosen', JSON.stringify(dummyDosen));
  
  // Only initialize penilaian if empty (preserve existing penilaian)
  if (!localStorage.getItem('penilaian')) {
    localStorage.setItem('penilaian', JSON.stringify(dummyPenilaian));
  }
};
