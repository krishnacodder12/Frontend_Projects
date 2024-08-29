function generateTable() {
    var number = document.getElementById("numberInput").value;
    number = parseInt(number);

    var table = "<h2>Table of your value:" + number + "</h2><ul>";
    for (var i = 1; i <= 10; i++) {
        table += "<li>" + number + " x " + i + " = " + (number * i) + "</li>";
    }
    table += "</ul>";

    document.getElementById("output").innerHTML = table;
}