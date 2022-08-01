/*
crea una classe
crea un metodo per prelevare gli input
crea un metodo per inserire gli input in una tabella
crea un metodo che stampa la tabella
*/

class Form {
    constructor() {

        this.tabella = document.querySelector('.tabella')

        this.insertRow('th','Nome','Cognome','Data di nascita');
        this.getInput();
    }

    getInput() {
        let bottone = document.querySelector('#btn');

        bottone.addEventListener('click', () => {
            let nome = document.querySelector("#nome");
            let cognome = document.querySelector("#cognome");
            let data = document.querySelector("#data");

            this.insertRow('td',nome.value, cognome.value, new Date(data.value).toLocaleDateString());
        })

    }

    insertRow(tag,nome,cognome,data){

        let tr = document.createElement('tr');

        let name = document.createElement(tag);
        let lastName = document.createElement(tag);
        let date = document.createElement(tag);

        name.innerHTML = nome;
        lastName.innerHTML = cognome;
        date.innerHTML = data;

        tr.append(name, lastName, date);
        
        this.tabella.append(tr)

    }

    
}

let form = new Form;