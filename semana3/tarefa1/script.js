 let valuesArray = [];

 function updateList() {
     valuesArray.sort();

     const listElement = document.getElementById('valuesList');
     listElement.innerHTML = '';

     valuesArray.forEach(value => {
         const listItem = document.createElement('li');
         listItem.textContent = value;
         listElement.appendChild(listItem);
     });
 }

 document.getElementById('form').addEventListener('submit', function(event) {
     event.preventDefault();

     const valueInput = document.getElementById('valueInput');
     const newValue = valueInput.value.trim();

     if (newValue) {
         valuesArray.push(newValue);
         valueInput.value = ''; 

         updateList();
     }
 });