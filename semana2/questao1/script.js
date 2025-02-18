function formatarData() {
   const diasDaSemana = [
       "domingo", "segunda-feira", "terça-feira", "quarta-feira", 
       "quinta-feira", "sexta-feira", "sábado"
   ];
   const mesesDoAno = [
       "janeiro", "fevereiro", "março", "abril", "maio", "junho", 
       "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
   ];

   const hoje = new Date(); 
   const diaSemana = diasDaSemana[hoje.getDay()];
   const dia = hoje.getDate();
   const mes = mesesDoAno[hoje.getMonth()];
   const ano = hoje.getFullYear(); 

   const diaSemanaCapitalizado = diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);

   return `${diaSemanaCapitalizado}, ${dia} de ${mes} de ${ano}`;
}

document.getElementById("data").textContent = formatarData();
