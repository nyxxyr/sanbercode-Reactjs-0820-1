// Promise
var isMomHappy = true;

var willGetNewPhone = new Promise((resolve, reject) => {
    if(isMomHappy){
        let phone = {
            brand: 'Samsung',
            color: 'black'
        };
        resolve(phone);
    }else{
        let reason = new Error('Not happy enough');
        reject(reason);
    }
});
const askMom = () => {
    willGetNewPhone
        .then((fulfilled) => {
            console.log(fulfilled);
        })
        .catch((error) => {
            console.log(error.message);
        })
}
askMom();

// Callback function
const periksaDokter = (nomerAntri, callback) => {
    if(nomerAntri > 50){
        callback(false);
    }else if(nomerAntri < 10){
        callback(true);
    }
}
periksaDokter(9, (check) => {
    console.log(check);
    if(check){
        console.log('sebentar lagi giliran saya');
    }else{
        console.log('saya jalan - jalan dulu');
    }
})