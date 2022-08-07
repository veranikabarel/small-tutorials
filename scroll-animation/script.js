let mainHeading = document.createElement('h1')
let mainHeadingText = document.createTextNode('Scroll to see animation')
mainHeading.appendChild(mainHeadingText)
document.body.appendChild(mainHeading)

for (let i = 0; i < 10; i++) {
    let box = document.createElement('div')
    box.className = 'box'
    let boxTitle = document.createElement('h2')
    let boxTitleText = document.createTextNode('Content')
    boxTitle.appendChild(boxTitleText)
    box.appendChild(boxTitle)
    document.body.appendChild(box);
};

const boxes = document.querySelectorAll('.box')

const checkBoxes = () => {
    const triggerPoint = window.innerHeight / 5 * 4.5;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        boxTop < triggerPoint ? box.classList.add('show') : box.classList.remove('show')
    })
}

window.addEventListener('scroll', checkBoxes)
