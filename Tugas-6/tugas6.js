// Soal 1
let rad = 10;
const luasLingkaran = (rad) => (3.14*rad*rad);
const kelilingLingkaran = (rad) => (2*3.14*rad);
console.log(`Luas lingkaran dengan radius ${rad} : ${luasLingkaran(rad)}`);
console.log(`Keliling lingkaran dengan radius ${rad} : ${kelilingLingkaran(rad)}`);
console.log();

// Soal 2
let kalimat = '';
const tambahKata = (kata) => {
    if(kalimat === ''){
        kalimat = `${kata}`;
    }else{
        kalimat = `${kalimat} ${kata}`;
    }
}
tambahKata('saya');
tambahKata('adalah');
tambahKata('seorang');
tambahKata('frontend');
tambahKata('developer');
console.log(kalimat);
console.log();

// Soal 3
const newFunction = literal = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        fullName: () => {
            let name = `${firstName} ${lastName}`;
            console.log(name);
            return name;
        }
    }
}
console.log(newFunction('William', 'Imoh').fullName());
console.log();

// Soal 4
const newObj = {
    firstName: 'Harry',
    lastName: 'Potter Holt',
    destination: 'Hogwarts React Conf',
    occupation: 'Deve-wizard Avocado',
    spell: 'vimulus Renderus!!'
}
const {firstName, lastName, destination, occupation, spell} = newObj;
console.log(firstName, lastName, destination, occupation);
console.log();

// Soal 5
const west = ['Will', 'Chris', 'Sam', 'Holly'];
const east = ['Gill', 'Brian', 'Noel', 'Maggie'];
const combined = [...west,...east];
console.log(combined);

