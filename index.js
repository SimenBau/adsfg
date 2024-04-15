var randomTall = Math.round(Math.random()*100)
console.log(randomTall);
 
document.querySelector(".check").addEventListener("click", function () {
    var mittTall = document.getElementsByClassName("searchbox").value;
    if (mittTall == randomTall) {
        document.querySelector(".result").innerHTML = "Gratulere. Du har funnet nummeret"
    } else if (mittTall < randomTall) {
        document.querySelector(".result").innerHTML = "Tallet er større"
    } else if (mittTall > randomTall) {
        document.querySelector(".result").innerHTML = "Tallet er mindre"
    } 
})