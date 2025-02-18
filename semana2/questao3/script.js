function validarPalindromo(event) {
   event.preventDefault();

   const texto = document.getElementById("texto").value;
   
   const textoLimpo = texto.replace(/\s+/g, '').toLowerCase();

   const textoInvertido = textoLimpo.split('').reverse().join('');

   const isPalindromo = textoLimpo === textoInvertido;

   alert(`O texto "${texto}" ${isPalindromo ? "é" : "não é"} um palíndromo`);
}
