document.addEventListener("DOMContentLoaded", function() {
    // Populate currency dropdowns
    populateCurrencies("fromCurrency");
    populateCurrencies("toCurrency");
});

function populateCurrencies(elementId) {
    const currencyDropdown = document.getElementById(elementId);

    fetch("https://open.er-api.com/v6/latest")
        .then(response => response.json())
        .then(data => {
            const currencies = Object.keys(data.rates);

            currencies.forEach(currency => {
                const option = document.createElement("option");
                option.value = currency;
                option.text = currency;
                currencyDropdown.add(option);
            });
        });
}

function convertCurrency() {
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const amount = document.getElementById("amount").value;

    fetch(`https://open.er-api.com/v6/latest?base=${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.rates[toCurrency];
            const result = (amount * exchangeRate).toFixed(2);

            document.getElementById("result").innerHTML = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
        })
        .catch(error => {
            console.error("Error fetching exchange rates:", error);
        });
}
