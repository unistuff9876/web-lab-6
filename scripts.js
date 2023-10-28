function DoLeft(){
    const imgLeft = document.querySelector('#img-left');
    const imgRight = document.querySelector('#img-right');
    const containerLeft = document.querySelector('#img-container-left');
    const containerRight = document.querySelector('#img-container-right');
	
    imgLeft.style.display = 'block';
    imgRight.style.display = 'none';
	containerLeft.style.width = '100%';
    containerRight.style.width = '0%';
}

function DoRight(){
    const imgLeft = document.querySelector('#img-left');
    const imgRight = document.querySelector('#img-right');
    const containerLeft = document.querySelector('#img-container-left');
    const containerRight = document.querySelector('#img-container-right');
	
    imgLeft.style.display = 'none';
    imgRight.style.display = 'block';
	containerLeft.style.width = '0%';
    containerRight.style.width = '100%';
}

function DoBoth(){
    const imgLeft = document.querySelector('#img-left');
    const imgRight = document.querySelector('#img-right');
    const containerLeft = document.querySelector('#img-container-left');
    const containerRight = document.querySelector('#img-container-right');
	
    imgLeft.style.display = 'block';
    imgRight.style.display = 'block';
	containerLeft.style.width = '100%';
    containerRight.style.width = '100%';
}