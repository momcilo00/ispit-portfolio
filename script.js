const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.style.display = 'none'; // hide the lightbox initially
document.body.appendChild(lightbox);

const images = document.querySelectorAll('img');
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.style.display = 'block';
        const img = document.createElement('img');
        img.src = image.src;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    });
});

lightbox.addEventListener('click', e => {
    lightbox.style.display = 'none';
});
