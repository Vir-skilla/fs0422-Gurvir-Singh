let y:HTMLInputElement | null= document.querySelector('#btn');
if (y)y.addEventListener('click', function(){
    let z:HTMLInputElement | null = document.querySelector('#redditoLordo')
    let n  
        if(z) n= z.value

    abstract class tasse {

        redditoannuolordo:any;
        tasseinps:any;
        tasseirpef:any;

        constructor(redditoannuolordo:any, tasseinps:any, tasseirpef:any) {
            this.redditoannuolordo =redditoannuolordo;
            this.tasseinps = tasseinps;
            this.tasseirpef = tasseirpef;
        }


        abstract getTasseInps():any;
        abstract getTasseIrpef(): any;
        abstract getRedditoAnnuoNetto(): any;

    }

    class Inps extends tasse {
        constructor(redditoannuolordo: any, tasseinps: any, tasseirpef: any){
            super(redditoannuolordo, tasseinps, tasseirpef);
        }
        getTasseInps(): any {
            return (this.redditoannuolordo * this.tasseinps) / 100;
        }
        getTasseIrpef(): any {
            return (this.redditoannuolordo * this.tasseirpef) / 100;
        }
        getRedditoAnnuoNetto(): any {
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
    let d = document.getElementById('tasseInps') as HTMLInputElement;
    let e = document.getElementById('tasseIrpef') as HTMLInputElement;
    let f = document.getElementById('redditoNetto') as HTMLInputElement;
    d.value = a;
    e.value = b;
    f.value = c;

})