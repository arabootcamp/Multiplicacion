let button1 = document.getElementById('play1');
let button2 = document.getElementById('play2');

button1.addEventListener('click', function () {

  let i = 0;
  let cont = 0;
  do {
    i++;
    if (i == 16)
      continue;
    if (i == 45)
      break;

    if (i % 4 == 0)
      console.log(`${i} es múltiplo de 4`);
    else
      cont++;

  } while (i <= 50);

  console.log(`La cantidad de números no múltiplos de cuatro es: ${cont}`)
});

button2.addEventListener('click', function () {

  let change = (num) => {
    msj = (num % 2 == 0) ? 'Número Par' : 'Número Impar';
    alert(`El número ${num} es un ${msj}`);
  }

  change(Math.floor(Math.random() * 1000));

});