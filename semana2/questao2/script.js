function formatarData() {
    const hoje = new Date();
    
    const hora = String(hoje.getHours()).padStart(2, '0');
    const minuto = String(hoje.getMinutes()).padStart(2, '0');
    const segundo = String(hoje.getSeconds()).padStart(2, '0');

   return `${hora}:${minuto}:${segundo}`;
}

setInterval(() => {
    document.getElementById("data").textContent = formatarData();
}, 1000)

