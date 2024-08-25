class Felidae {
	constructor(claws, hat, feet, toes, lid, back){
		this.claws = "sharp",
		this.hat = hat,
		this.feet = feet,
		this.toes = toes,
		this.lid = lid,
		this.back = back
	}
}


let kitty = new Panthera("sharp", "big", "small", "round", "brimmed", "hair")

class Panthera extends Felidae {
	constructor(claws, hat, feet, toes, lid, back, mittens) {
    super(claws, hat, feet, toes, lid, back, mittens);
		this.roar = "loud";
		this.mittens = mittens;
	}
}

console.log(kitty.claws);

class Tiger extends Panthera {
	constructor() {
    super();
		this.hasStripes = "true";
	}
}

let tigger = new Tiger();

console.log(tigger);