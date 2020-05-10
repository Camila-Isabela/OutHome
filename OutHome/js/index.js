


function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
    setTimeout(() => typeWriter(document.querySelector('h2')),14000);
  }

  typeWriter(document.querySelector('h2'));

