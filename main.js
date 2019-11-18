document.querySelectorAll('.photo').forEach(function (div){
    const pic = div.firstChild;
    const iLink = document.createElement('a');
    iLink.target = '_blank';
    iLink.href = document.querySelector('.photo > img').src; 
    iLink.innerHTML = pic.outerHTML
    div.replaceChild(iLink, pic);
})