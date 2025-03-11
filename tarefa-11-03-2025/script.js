const alunos = new Map();
const professores = new Map();

function submitForm(event) {
    if (!event) {
        return;
    }
    
    const form = event.target;

    const nome = form.userName.value.trim();
    const email = form.email.value.trim();
    const date = form.birthday.value.trim();
    const homePhone = form.phoneFixed.value.trim();
    const cellPhone = form.phoneMobile.value.trim();
    const matricula = form.matricula.value.trim();
    const area = form.area.value.trim();
    const lattes = form.lattes.value.trim();
    const curso = form.course.value.trim();
    const role = form.role.value; 
    
    if (!nome || !email || !date || !homePhone || !cellPhone || !matricula || (role === 'aluno' && !curso) || (role === 'professor' && (!area || !lattes))) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    const pessoa = role == "aluno" 
        ? new Aluno(nome, email, date, homePhone, cellPhone, matricula, curso)
        : new Professor(nome, email, date, homePhone, cellPhone, matricula, area, lattes);

    if (typeof pessoa == Aluno) {
        alunos.set(pessoa.matricula, pessoa)
    } else if (typeof pessoa == Professor) {
        professores.set(pessoa.matricula, pessoa)
    }

    console.log("alunos", alunos);
    console.log("professores", professores);
}

function toggleFields() {
    const alunoRadio = document.getElementById("aluno");
    const professorRadio = document.getElementById("professor");

    const areaField = document.getElementById("area-field");
    const lattesField = document.getElementById("lattes-field");
    const cursoField = document.getElementById("curso-field");

    if (!alunoRadio.checked && !professorRadio.checked) {
        areaField.style.display = "none";
        lattesField.style.display = "none";
        cursoField.style.display = "none";
    } else if (alunoRadio.checked) {
        cursoField.style.display = "flex";
        
        areaField.style.display = "none";
        lattesField.style.display = "none";
    } else if (professorRadio.checked) {
        areaField.style.display = "flex";
        lattesField.style.display = "flex";
        
        cursoField.style.display = "none";
    }
}

function resetForm() {
    const form = document.querySelector('form');
    
    form.reset();
    
    const areaField = document.getElementById("area-field");
    const lattesField = document.getElementById("lattes-field");
    const cursoField = document.getElementById("curso-field");
    
    areaField.style.display = "none";
    lattesField.style.display = "none";
    cursoField.style.display = "none";
    
    const radioButtons = document.querySelectorAll('input[name="role"]');
    radioButtons.forEach((radio) => {
        radio.checked = false;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    toggleFields();

    const alunoRadio = document.getElementById("aluno");
    const professorRadio = document.getElementById("professor");

    alunoRadio.addEventListener("change", toggleFields);
    professorRadio.addEventListener("change", toggleFields);

    const resetButton = document.getElementById('reset-form');
    resetButton.addEventListener('click', resetForm);

    const form = document.getElementById("add-form");
    form.addEventListener("submit", submitForm)
});
