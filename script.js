function updateContentOpacity() {
    const scrollPos = this.window.scrollY;
    const content = this.document.getElementById('content');
    // const chevron = this.document.getElementById('chevron');
    const windowHeight = this.window.innerHeight;

    const opacity = (scrollPos / windowHeight) * 4;
    content.style.opacity = Math.min(1, opacity);
    // chevron.style.visibility = "hidden";
}

window.addEventListener('scroll', updateContentOpacity);
window.addEventListener('load', updateContentOpacity);