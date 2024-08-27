"use strict";

function convertToKelvin() {
  const celsius = parseFloat(document.getElementById("celsius").value);
  if (!isNaN(celsius)) {
    const kelvin = celsius + 273.15;
    document.getElementById(
      "result"
    ).innerText = `${celsius} ºC is equal to ${kelvin.toFixed(2)}`;
  } else {
    document.getElementById("result").innerText =
      "Please Enter a valid Celsius number!";
  }
}

function convertToCelsius() {
  const kelvin = parseFloat(document.getElementById("kelvin").value);
  if (!isNaN(kelvin)) {
    const celsius = kelvin - 273.15;
    document.getElementById(
      "result"
    ).innerText = `${kelvin} K is equal to ${celsius.toFixed(2)} ºC`;
  } else {
    document.getElementById("result").innerText =
      " Please Enter a valid Kelvin number";
  }
}

// function convertToFahrenheit() {
//   const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
//   if (!isNaN(fahrenheit)) {
//     const celsius = (fahrenheit - 32) * (5 / 9);
//     document.getElementById(
//       "result"
//     ).innerText = `${fahrenheit} F is equal to ${celsius.toFixed(2)} ºC`;
//   } else {
//     document.getElementById("result").innerText =
//       "Please Enter a valid Fahrenheit number";
//   }
// }

// function convertToKelvin() {
//   const celsius = parseFloat(document.getElementById("celsius").value);
//   if (!isNaN(celsius)) {
//     const kelvin = celsius + 273.15;
//     document.getElementById(
//       "result"
//     ).innerText = `${celsius} °C is equal to ${kelvin.toFixed(2)} K.`;
//   } else {
//     document.getElementById("result").innerText =
//       "Please enter a valid number for Celsius.";
//   }
// }

// function convertToCelsius() {
//   const kelvin = parseFloat(document.getElementById("kelvin").value);
//   if (!isNaN(kelvin)) {
//     const celsius = kelvin - 273.15;
//     document.getElementById(
//       "result"
//     ).innerText = `${kelvin} K is equal to ${celsius.toFixed(2)} °C.`;
//   } else {
//     document.getElementById("result").innerText =
//       "Please enter a valid number for Kelvin.";
//   }
// }
