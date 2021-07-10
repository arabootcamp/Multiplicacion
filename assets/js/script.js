let button = document.getElementById('play');

button.onclick= function() {

  let requestNumber = () => {
    let num, error = false;
    do {
      if (error == true)
        alert("Número fuera del rango.");
      num = parseInt(prompt("Ingrese un número entre 1 a 20 para realizar las operaciones."));
      error = true;
    } while (isNaN(num) || !Number.isInteger(num) || num > 20 || num < 1);
    return num;
  }

  let multiplication = (num) => {
    for (let i = 1; i <= num; i++) {
      console.log(`${i} x ${num} = ${i*num}`);
    }
    console.log(`\n`);
  }

  let factorial = (num) => {
    for (let i = 1; i <= num; i++) {
      let fac = 1;
      for (let j = 1; j <= i; j++) {
        fac = fac * j;
      }
      console.log(`Factorial de ${i} es: ${fac}`);
    }
  }

  let numOk = requestNumber();
  console.log(`\nNúmero ingresado: ${numOk}\n\n`);
  multiplication(numOk);
  factorial(numOk);
};