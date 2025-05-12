/* When the hamburger is clicked, toggle between showing
and hiding the nav items */
//document.getElementById("toggle-nav")
document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
  };
  
  document.getElementById("btn-loop").onclick = () => {
    const ul = document.getElementById("numbers");
  
    for(let i = 0; i < 10; i++){
      const li = document.createElement("li");
      li.innerHTML = i+1;
      ul.append(li);
      li.setAttribute("id", "li" + i);
  
      li.onclick = () => {
        console.log(`Lucky number ${i+1}`);
      };
    }
  }

  /* Learning arrays */
  let toys = ["drum", "ball", "rope", "balloon", "tire"];

  /*
  for(let i = 0; i < toys.length; i++){
    console.log(toys[i]);
  }
*/

  /*Shows you can get the index if you need it
  toys.forEach((toy, i) => {
    console.log(i + toy);
  });
    */

  toys.forEach((toy) => {
    const p = document.createElement("p");
    p.innerHTML = toy;
    document.getElementById("List").append();
});

/* Santas Expenses */

let toyPrices = [];
toyPrices["barbie"]=7.50;
toyPrices["dollhouse"]=86.50;
toyPrices["slide"]=7.50;
toyPrices["ken"]=5.50;
toyPrices["bike"]=7.50;

/* Associative Array */
for(let toy in toyPrices) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    
    console.log(`${toy} costs ${toyPrices[toy]}`);
}

