// Soal 1
// Release 0
class Animal {
    constructor(name){
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }
    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }
    get legs(){
        return this._legs;
    }
    set legs(legs){
        this._legs = legs;
    }
    get cold_blooded(){
        return this._cold_blooded;
    }
    set cold_blooded(cb){
        this._cold_blooded = cb;
    }
}

var sheep = new Animal('Shaun');
console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);

// Release 1
class Ape extends Animal {
    constructor(name){
        super(name);
        this._legs = 2;
    }
    yell(){
        console.log('AUOOO');
    }
}

class Frog extends Animal{
    constructor(name){
        super(name);
    }
    jump(){
        console.log('hop hop');
    }
}
var sungokong = new Ape('Kera Sakti');
var kodok = new Frog('Buduk');
sungokong.yell();
kodok.jump();

// Soal 2
class Clock {
    constructor(template){
        this._template = template;
        this._timer = 0;
    }
    render(){
        this._date = new Date();
        this._hours = this._date.getHours();
        this._minutes = this._date.getMinutes();
        this._seconds = this._date.getSeconds();
        let hours = this._hours;
        if(hours < 10) hours = '0' + hours;
        let minutes = this._minutes;
        if(minutes < 10) minutes = '0' + minutes;
        let seconds = this._seconds;
        if(seconds < 10) seconds = '0' + seconds;
        let output = this._template.template.replace('h', hours).replace('m', minutes).replace('s', seconds);
        console.log(output);
    }
    start(){
        const run = () => {
            this.render();
        }
        run();
        this._timer = setInterval(run, 1000)
    }
    stop(){
        clearInterval(this._timer);
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();
