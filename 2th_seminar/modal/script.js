const modalBtn = document.getElementById('modal-btn');
const closeBtn = document.getElementById('close-btn');

const btnClick = () => {
    document.querySelector('.modal-container').style.display = 'block';
    document.querySelector('.black-body').style.display = 'block';
}
const closeBtnClick = () => {
    document.querySelector('.modal-container').style.display = 'none';
    document.querySelector('.black-body').style.display = 'none';
}

modalBtn.addEventListener('click',btnClick);
closeBtn.addEventListener('click',closeBtnClick);