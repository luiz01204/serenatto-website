const inputCheck = document.querySelector('#modo-noturno');
const element = document.querySelector('body');

inputCheck.addEventListener('click', () => {
    const modo = inputCheck.checked  ? 'dark' : 'light';
    element.setAttribute("data-bs-theme", modo)
});