"use strict";
let y = document.querySelector('#btn');
if (y)
    y.addEventListener('click', function () {
        let z = document.querySelector('#redditoLordo');
        let n;
        if (z)
            n = z.value;
        class tasse {
            constructor(redditoannuolordo, tasseinps, tasseirpef) {
                this.redditoannuolordo = redditoannuolordo;
                this.tasseinps = tasseinps;
                this.tasseirpef = tasseirpef;
            }
        }
        class Inps extends tasse {
            constructor(redditoannuolordo, tasseinps, tasseirpef) {
                super(redditoannuolordo, tasseinps, tasseirpef);
            }
            getTasseInps() {
                return (this.redditoannuolordo * this.tasseinps) / 100;
            }
            getTasseIrpef() {
                return (this.redditoannuolordo * this.tasseirpef) / 100;
            }
            getRedditoAnnuoNetto() {
                return this.redditoannuolordo - (this.tasseinps + this.tasseirpef) / 100;
            }
        }
        let inps = new Inps(z, 106, 75);
        let a = inps.getTasseInps();
        let b = inps.getTasseIrpef();
        let c = inps.getRedditoAnnuoNetto();
        console.log(a);
        console.log(b);
        console.log(c);
        let d = document.getElementById('tasseInps');
        let e = document.getElementById('tasseIrpef');
        let f = document.getElementById('redditoNetto');
        d.value = a;
        e.value = b;
        f.value = c;
    });
