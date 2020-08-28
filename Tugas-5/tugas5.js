// Soal 1
function halo() {
    return "Halo Sanbers!";
}
console.log(halo() + '\n');

// Soal 2
function kalikan(a, b){
    return a * b;
}
console.log(kalikan(12, 2) + '\n');

// Soal 3
function introduce(name, age, address, hobby){
    var detailName = 'Nama saya ' + name;
    var detailAge = ' umur saya ' + age + ' tahun';
    var detailAddress = ' alamat saya di ' + address;
    var detailHobby = ' dan saya punya hobby yaitu ' + hobby;
    var kalimat = [detailName, detailAge, detailAddress, detailHobby];
    return kalimat.join();
}
var name = 'Bas';
var age = '20';
var address = 'Jalan Kemangi';
var hobby = 'Gaming';
console.log(introduce(name, age, address, hobby) + '\n');

// Soal 4
var arrayDaftarPeserta = ['Asep', 'laki-laki', 'baca buku', 1992];
arrayDaftarPeserta = {
    nama: arrayDaftarPeserta[0], 
    jenisKelamin: arrayDaftarPeserta[1], 
    hobi: arrayDaftarPeserta[2], 
    tahunLahir: arrayDaftarPeserta[3]
};
console.log(arrayDaftarPeserta);

// Soal 5
var buah1 = {
    nama: 'strawberry',
    warna: 'merah',
    adaBijinya: false,
    harga: 9000,
}
var buah2 = {
    nama: 'jeruk',
    warna: 'oranye',
    adaBijinya: true,
    harga: 8000,
}
var buah3 = {
    nama: 'semangka',
    warna: ['hijau', 'merah'],
    adaBijinya: true,
    harga: 10000,
}
var buah4 = {
    nama: 'pisang',
    warna: 'kuning',
    adaBijinya: false,
    harga: 5000,
}
var fruits = [buah1, buah2, buah3, buah4];
console.log(fruits[0] = '\n');

// Soal 6
var dataFilm = [];
function tambahFilm(nama, durasi, genre, tahun){
    var personalFilm = {
        nama: nama,
        durasi: durasi,
        genre: genre,
        tahun: tahun
    }
    dataFilm.push(personalFilm);
}
tambahFilm('Home alone', '2 jam', 'comedy', 1999);
tambahFilm('Home alone 2', '2 jam', 'comedy', 1999);
console.log(dataFilm);
