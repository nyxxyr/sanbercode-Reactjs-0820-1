// Soal 1
console.log('LOOPING PERTAMA');
var condition = true;
var jumlah = 0;
var note = 'I love coding';
while(condition){
    jumlah+=2;
    console.log(jumlah + ' - ' + note);
    if(jumlah == 20){
        condition = false;
    }
}
console.log('LOOPING KEDUA');
condition = true;
note = 'I will become a frontend developer';
while(condition){
    console.log(jumlah + ' - ' + note);
    jumlah-=2;
    if(jumlah == 0){
        condition = false;
    }
}
console.log('\n');

// Soal 2
for(var i = 1; i <= 20; i++){
    if((i%3 == 0) && (i%2 != 0)){
        note = 'I Love Coding';
    }else if(i%2 == 0){
        note = 'Berkualitas';
    }else{
        note = 'Santai';
    }
    console.log(i + ' - ' + note);
}
console.log('\n');

// Soal 3
var triangle = [];
var shape = '#';
for(var i = 1; i <= 7; i++){
    for(var j = 0; j < i; j++){
        triangle.push(shape); 
    }
    console.log(triangle.join(''));
    triangle = [];
}
console.log('\n');

// Soal 4
var kalimat = "saya sangat senang belajar javascript";
var kata = kalimat.split(' ');
console.log(kata);
console.log('\n');

// Soal 5
var daftarBuah = ['2. Apel', '5. Jeruk', '3. Anggur', '4. Semangka', '1. Mangga'];
var sortedBuah = daftarBuah.sort();
for(var i = 0; i < sortedBuah.length; i++){
    console.log(sortedBuah[i]);
}

