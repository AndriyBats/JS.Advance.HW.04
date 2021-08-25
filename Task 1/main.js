function Human(gender, height, weight, colorSkin){ 
    this.gender = gender;
    this.height = height;
    this.weight = weight;
    this.colorSkin = colorSkin;
}
Human.prototype.abilityToSpeak = function(){
    console.log(`The ${this.gender} can speak.`);
}
Human.prototype.abilityToGo = function(){
    console.log(`The ${this.gender} can go.`);
}
Human.prototype.abilityToRun = function(){
    console.log(`The ${this.gender} can run.`);
}



function Man(gender, height, weight, colorSkin, nationality){
    Human.call(this, gender, height, weight, colorSkin);
    this.nationality = nationality;
}
Man.prototype = Object.create(Human.prototype);
Man.prototype.constructor = Man;
Man.prototype.abilityToSwim = function(){
    console.log(`The ${this.nationality} can swim.`);
}



function Woman(gender, height, weight, colorSkin, colorHair){
    Human.call(this, gender, height, weight, colorSkin);
    this.colorHair = colorHair;
}
Woman.prototype = Object.create(Human.prototype);
Woman.prototype.constructor = Woman;
Woman.prototype.abilityToSing = function(){
    console.log(`The ${this.gender} can sing.`);
}



function Librarian(gender, height, weight, colorSkin, colorHair, job){
    Woman.call(this, gender, height, weight, colorSkin, colorHair);
    this.job = job;
}
Librarian.prototype = Object.create(Woman.prototype);
Librarian.prototype.constructor = Librarian;
Librarian.prototype.abilityToRead = function(){
    console.log(`The ${this.job} can read.`);
}



function Nurse(gender, height, weight, colorSkin, colorHair, job){
    Woman.call(this, gender, height, weight, colorSkin, colorHair);
    this.job = job;
}
Nurse.prototype = Object.create(Woman.prototype);
Nurse.prototype.constructor = Nurse;
Nurse.prototype.whichClothesWear = function(){
    console.log(`The ${this.job} wears white robe.`);
}



function Hunter(gender, height, weight, colorSkin, nationality, strong){
    Man.call(this, gender, height, weight, colorSkin, nationality);
    this.strong = strong;
}
Hunter.prototype = Object.create(Man.prototype);
Hunter.prototype.constructor = Hunter;
Hunter.prototype.abilityToShoot = function(){
    console.log(`The ${this.nationality} can shoot.`);
}



function Worker(gender, height, weight, colorSkin, nationality, clever){
    Man.call(this, gender, height, weight, colorSkin, nationality);
    this.clever = clever;
}
Worker.prototype = Object.create(Man.prototype);
Worker.prototype.constructor = Worker;
Worker.prototype.abilityToHardWork = function(){
    console.log(`The ${this.nationality} can work hard.`);
}