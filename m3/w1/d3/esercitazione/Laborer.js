"use strict";
class Laborer {
    constructor(codredd, redditoannuolordo) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
    }
    getUtileTasse() {
        return this.getTasseInps() + this.getTasseIrpef();
    }
    getTasseInps() {
        this.tasseinps = ((this.redditoannuolordo / 100) * 22);
        return this.tasseinps;
    }
    getTasseIrpef() {
        let tax;
        switch (true) {
            case (this.redditoannuolordo >= 0 && this.redditoannuolordo <= 15000):
                tax = 23;
                break;
            case (this.redditoannuolordo >= 15001 && this.redditoannuolordo <= 28000):
                tax = 27;
                break;
            case (this.redditoannuolordo >= 28001 && this.redditoannuolordo <= 55000):
                tax = 38;
                break;
            case (this.redditoannuolordo >= 55001 && this.redditoannuolordo <= 75000):
                tax = 41;
                break;
            case (this.redditoannuolordo > 75000):
                tax = 43;
                break;
        }
        this.tasseirpef = (this.redditoannuolordo / 100) * tax;
        return this.tasseirpef;
    }
    getRedditoAnnuoNetto() {
        let redditoAnnuoNetto = this.redditoannuolordo - this.getUtileTasse();
        return redditoAnnuoNetto;
    }
}
class Artigiano extends Laborer {
    constructor(codredd, redditoannuolordo) {
        super(codredd, redditoannuolordo);
        this.getRedditoAnnuoNetto();
    }
}
let x = new Artigiano(0, 25000);
console.log(x, x.getRedditoAnnuoNetto());
