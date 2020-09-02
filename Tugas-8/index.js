const readBooks = require('./callback');

let books = [
    {name: 'LOTR', timeSpent: 3000},
    {name: 'Fidas', timeSpent: 2000},
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'Komik', timeSpent: 1000}
]
let time = 10000;
let i = 0;
const reading = (t) => {
    readBooks(t, books[i], (left) => {
        if((i <= books.length) && (left > 0)){
            i++;
            if(left >= books[i].timeSpent){
                reading(left);
            }
        }
    })
};

reading(time);
