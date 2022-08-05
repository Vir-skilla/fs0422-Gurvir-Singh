async function getUsers() {
  let url = 'users.json';
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
let ul = document.getElementById('contenitore')

function creaTabella(user){
  let div = document.createElement("div");
  let h2 = document.createElement("h2");
  let span = document.createElement("span");
  let p = document.createElement("p");
  let img = document.createElement("img")
  console.log(user.profileURL)
  h2.innerHTML = `${user.firstName} ${user.lastName}`;
  img.src = "../" + user.profileURL;
  span.innerHTML = `${user.email}`;
  p.innerHTML = `${user.gender}`;
  
  div.append(h2, span, p, img)
  ul.append(div)
  console.log(div)
}



async function renderUsers() {
  let users = await getUsers();

  users.forEach(user => {
    creaTabella(user)
  });
  console.log(users)
  
}

renderUsers();
