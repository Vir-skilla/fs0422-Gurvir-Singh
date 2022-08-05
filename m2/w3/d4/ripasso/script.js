//prendere dal file json gli utenti e stamparli dentro una tabella
class Users {
  constructor() {

    fetch("db.json")
      .then(res => res.json())
      .then(utenti => {
        console.log(utenti)
      })

  }
  creaTabella() {
    let table = document.createElement("table")
    let tr = document.createElement("tr")
    let thNome = document.createElement("th")
    let thCognome = document.createElement("th")
    let thData = document.createElement("th")

    thNome.innerHTML = "nome"
    thCognome.innerHTML = "cognome"
    thData.innerHTML = "data"


  }


}
const users = new Users();

/*
<table>
</table>

  <tr>  
  </tr>

  <th>nome</th>
  <th>cognome</th>
  <th>data</th>
 ----------------------------------------------- 
  <tr>
    <td></td>
    <td></td>
    <td></td>

  </tr>

  <tr>
    <td></td>
    <td></td>
    <td></td>

  </tr>
*/