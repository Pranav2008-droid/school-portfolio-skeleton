new hoverEffect({
    parent: document.querySelector('.distortion'),
    intensity: 0.2,
    image1: './image'+Math.ceil(Math.random() * 4)+'.jpg',
    image2: './image'+Math.ceil(Math.random() * 4)+'.jpg',
    displacementImage: './diss'+Math.ceil(Math.random() * 14)+'.png'
})