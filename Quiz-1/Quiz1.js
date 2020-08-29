// Soal 1
function luasLingkaran(rad){
    return (3.14*rad*rad);
}
function luasPersegi(p, l = p){
    return (p*l);
}
function luasSegitiga(a, t){
    return ((a*t)/2);
}
console.log('Luas Lingkaran radius 10 : ', + luasLingkaran(10));
console.log('Luas Segitiga alas 3 dan tinggi 4 : ' + luasSegitiga(3,4));
console.log('Luas Persegi dengan panjang sisi 6 : ' + luasPersegi(6));

// Soal 2
var daftarAlatTulis = [
    '2. Pensil',
    '5. Penghapus',
    '3. Pulpen',
    '4. Penggaris',
    '1. Buku'
];
var arrBaru = daftarAlatTulis.sort();
arrBaru.map(function(item){
    console.log(item);
});

// Soal 3
var pesertaLomba = [['Budi', 'Pria', '172cm'], ['Susi', 'Wanita', '162cm'], ['Lala', 'Wanita', '155cm'], ['Agung', 'Pria', '175cm']];
var dataPeserta = [];
pesertaLomba.forEach(function(item){
    var tempObj = {};
    tempObj.nama = item[0];
    tempObj.jenisKelamin = item[1];
    tempObj.tinggi = item[2];
    dataPeserta.push(tempObj);
});
console.log(dataPeserta);

// Soal 4
var daftarNama = [];
function tambahNama(nama, gender){
    var temp = {};
    temp.nama = nama;
    temp.jenisKelamin = gender;
    if(gender.toLowerCase() == 'laki - laki'){
        temp.panggilan = 'Bapak';
    }else if(gender.toLowerCase() == 'perempuan'){
        temp.panggilan = 'Ibu';
    }
    daftarNama.push(temp);
};
tambahNama('Asep', 'Laki - laki');
tambahNama('Siti', 'Perempuan');
tambahNama('Yeni', 'Perempuan');
tambahNama('Rudi', 'Laki - laki');
tambahNama('Adit', 'Laki - laki');
daftarNama.forEach(function(item, index){
    console.log((index+1) + '. ' + item.panggilan + ' ' + item.nama);
});