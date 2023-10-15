total = 0;
function additionner(){
  let fruit = document.getElementById("fruit").value;
 

  switch (fruit) {
    case "Orange":
      total += 8;
      alert("vous avez choisit une orange ,donc le prix total des oranges sont " + total + " pesos");
      break;

    case "Avocat":
      total += 10;
      alert("vous avez choisit un Avocat ,donc le prix total des Avocats sont " + total + " pesos");
      break;

    case "Mangue":
      total += 15;
      alert("vous avez choisit une Mangue ,donc le prix total des Mangues sont " + total + " pesos");
      break;
    default:
      alert("Vous devez faire un choix");
      break;
  }
}

function finaliser(){
    alert("Le prix total des achats est " + total + "pesos")


}

