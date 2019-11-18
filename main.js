document.querySelectorAll('#gallery > .photo > img').forEach(function (pic){
    const thing = document.querySelector('.photo');
    // console.log(thing)
    // const picInfo = document.querySelector('.img').innerHTML;
    // console.log(picInfo);
    // const pic = document.querySelector('.img > img');
    const iLink = document.createElement('a');
    // const picThumb = document.createElement('img')
    iLink.target = '_blank';
    iLink.href = pic.src; 
    // picThumb.src = picInfo
    iLink.innerHTML = pic.outerHTML
    // thing.removeChild(pic);
    thing.replaceChild(iLink, pic);
    // thing.appendChild(iLink);
})