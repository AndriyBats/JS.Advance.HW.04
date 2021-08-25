function Animal(view, height, weight, numberOfLegs){ 
    this.view = view;
    this.height = height;
    this.weight = weight;
    this.numberOfLegs = numberOfLegs;
}
Animal.prototype.abilityToHaveHair = function(){
    console.log(`The ${this.view} can speak.`);
}
Animal.prototype.abilityToGo = function(){
    console.log(`The ${this.view} can go.`);
}
Animal.prototype.abilityToRun = function(){
    console.log(`The ${this.view} can run.`);
}



function Herbivorous(view, height, weight, numberOfLegs, ungulates){
    Animal.call(this, view, height, weight, numberOfLegs, ungulates);
    this.ungulates = ungulates;
}
Herbivorous.prototype = Object.create(Animal.prototype);
Herbivorous.prototype.constructor = Herbivorous;
Herbivorous.prototype.abilityToJump = function(){
    console.log(`The ${this.ungulates} can jump.`);
}



function Predator(view, height, weight, numberOfLegs, amphibia){
    Animal.call(this, view, height, weight, numberOfLegs);
    this.amphibia = amphibia;
}
Predator.prototype = Object.create(Animal.prototype);
Predator.prototype.constructor = Predator;
Predator.prototype.abilityToSwim = function(){
    console.log(`The ${this.amphibia} can swim.`);
}



function DomesticAnimal(view, height, weight, numberOfLegs, ungulates, horns){
    Herbivorous.call(this, view, height, weight, numberOfLegs, ungulates);
    this.horns = horns;
}
DomesticAnimal.prototype = Object.create(Herbivorous.prototype);
DomesticAnimal.prototype.constructor = DomesticAnimal;
DomesticAnimal.prototype.abilityToliveOutdoor = function(){
    console.log(`The ${this.ungulates} can live outdoor.`);
}



function WildAnimal(view, height, weight, numberOfLegs, ungulates, colorHair){
    Herbivorous.call(this, view, height, weight, numberOfLegs, ungulates);
    this.colorHair = colorHair;
}
WildAnimal.prototype = Object.create(Herbivorous.prototype);
WildAnimal.prototype.constructor = WildAnimal;
WildAnimal.prototype.abilityToliveInHole = function(){
    console.log(`The ${this.view} can live in a hole.`);
}



function SeaAnimal(view, height, weight, numberOfLegs, amphibia, numberOfTeeth){
    Predator.call(this, view, height, weight, numberOfLegs, amphibia);
    this.numberOfTeeth = numberOfTeeth;
}
SeaAnimal.prototype = Object.create(Predator.prototype);
SeaAnimal.prototype.constructor = SeaAnimal;
SeaAnimal.prototype.abilityToBreatheUnderwater = function(){
    console.log(`The ${this.view} can breathe underwater.`);
}



function LandAnimal(view, height, weight, numberOfLegs, amphibia, tail){
    Predator.call(this, view, height, weight, numberOfLegs, amphibia);
    this.tail = tail;
}
LandAnimal.prototype = Object.create(Predator.prototype);
LandAnimal.prototype.constructor = LandAnimal;
LandAnimal.prototype.abilityToChangeColorHair = function(){
    console.log(`The ${this.view} can change color of hair.`);
}