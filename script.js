const loginBtn = document.getElementById('loginBtn');
const loginPopup = document.getElementById('loginPopup');
const closeBtn = document.querySelector('.close');
const submitclBtn = document.querySelector('.submitcl');

loginBtn.addEventListener('click', () => {
    loginPopup.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    loginPopup.style.display = 'none';
});
submitclBtn.addEventListener('click', () => {
    loginPopup.style.display = 'none';
});
window.addEventListener('click', (event) => {
    if (event.target === loginPopup) {
        loginPopup.style.display = 'none';
    }
});
