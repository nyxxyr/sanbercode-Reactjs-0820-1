const readBooksPromise = require('./promise');

let i = 0;
let time = 10000;
let books = [
    {name: 'LOTR', timeSpent: 3000},
    {name: 'Fidas', timeSpent: 2000},
    {name: 'Kalkulus', timeSpent: 4000}
];

const reading = () => {
    readBooksPromise(time, books[i])
        .then(fulfilled => {
            if(i <= books.length){
                i++;
                if(fulfilled >= books[i].timeSpent){
                    reading();
                }
            }
        }).catch(error => {});
}
reading();

