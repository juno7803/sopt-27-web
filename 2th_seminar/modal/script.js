const btnClick = ()=>{
    document.querySelector('.modal-container').style.display = 'block';
    document.querySelector('.black_bg').style.display = 'block';
}
const closeBtnClick = () =>{
    document.querySelector('.modal-container').style.display = 'none';
    document.querySelector('.black_bg').style.display = 'none';
}

document.getElementById('modal-btn').addEventListener('click',btnClick);
document.getElementById('close-btn').addEventListener('click',closeBtnClick);