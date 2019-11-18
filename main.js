const navLinks = document.querySelectorAll('#navBox > a');

function darkenButton(){
    // event.target.style.backGroundColor = 'black';
    event.target.style.color = 'white';
}

navLinks.forEach(item => {
    item.addEventListener('onmouseover', darkenButton);
})

function fadeIn(){
    event.target.style.opacity = '50'
}
const awsLogo = document.querySelector('#ads #aws');

awsLogo.addEventListener('load', fadeIn)