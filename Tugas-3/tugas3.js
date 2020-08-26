// Jawaban Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
var cut = kataKedua.substr(1);
var res = kataKedua.charAt(0).toUpperCase();
kataKedua = res.concat(cut);
var hasil = kataPertama + ' '.concat(kataKedua) + ' '.concat(kataKetiga) + ' '.concat(kataKeempat.toUpperCase());

console.log(hasil + '\n');

// Jawaban Soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
var hasil = parseInt(kataPertama) + parseInt(kataKedua) + parseInt(kataKetiga) + parseInt(kataKeempat);

console.log(hasil + '\n');

// Jawaban Soal 3
var kalimat = "wah javascript itu keren sekali";
var kataPertama = kalimat.substr(0,3);
var kataKedua = kalimat.substr(4, 10);
var kataKetiga = kalimat.substr(15, 3);
var kataKeempat = kalimat.substr(19, 5);
var kataKelima = kalimat.substr(25, 6);

console.log('Kata Pertama : ' + kataPertama);
console.log('Kata Kedua : ' + kataKedua);
console.log('Kata Ketiga  : ' + kataKetiga);
console.log('Kata Keempat : ' + kataKeempat);
console.log('Kata Kelima : ' + kataKelima + '\n');

// Jawaban Soal 4
var nilai = 77;
var index;
if(nilai >= 80){
  index = 'A';
}else if(nilai >= 70 && nilai < 80){
  index = 'B';
}else if(nilai >= 60 && nilai < 70){
  index = 'C';
}else if(nilai >= 50 && nilai < 60){
  index = 'D';
}else if(nilai < 50){
  index = 'E';
}

console.log('index : ' + index + '\n');

// Jawaban Soal 5
var tanggal = 20;
var bulan = 3;
var tahun = 2000;

switch(bulan){
  case 1: {bulan = 'Januari'; break;}
  case 2: {bulan = 'Februari'; break;}
  case 3: {bulan = 'Maret'; break;}
  case 4: {bulan = 'April'; break;}
  case 5: {bulan = 'Mei'; break;}
  case 6: {bulan = 'Juni'; break;}
  case 7: {bulan = 'Juli'; break;}
  case 8: {bulan = 'Agustus'; break;}
  case 9: {bulan = 'September'; break;}
  case 10: {bulan = 'Oktober'; break;}
  case 11: {bulan = 'November'; break;}
  case 12: {bulan = 'Desember'; break;}
  default: {break;}
};

console.log(String(tanggal).concat(' ') + bulan.concat(' ') + String(tahun))