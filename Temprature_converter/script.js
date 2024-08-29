function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("tempInput").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const resultElement = document.getElementById("result"); // any variable inside the string we have to use dollar symbol with flower brackets
    
    if (fromUnit === "celsius") {
        resultElement.innerHTML = `Converted Temperatures: ${inputTemp}°C = ${((inputTemp * 9/5) + 32).toFixed(2)}°F and ${(inputTemp + 273.15).toFixed(2)}K`;
    } else if (fromUnit === "fahrenheit") {
        resultElement.innerHTML = `Converted Temperatures: ${inputTemp}°F = ${((inputTemp - 32) * 5/9).toFixed(2)}°C and ${((inputTemp - 32) * 5/9 + 273.15).toFixed(2)}K`;
    } else if (fromUnit === "kelvin") {
        resultElement.innerHTML = `Converted Temperatures: ${inputTemp}K = ${(inputTemp - 273.15).toFixed(2)}°C and ${((inputTemp - 273.15) * 9/5 + 32).toFixed(2)}°F`;
    }
}