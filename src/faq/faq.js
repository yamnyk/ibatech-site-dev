function toogle(e) {
    let elems = document.getElementsByClassName('faq-header-title');
    for (let i = 0; i < elems.length; i += 1) {
        elems[i].childNodes[3].style.display = 'none';
    }
    e.childNodes[3].style.display = 'block';
}