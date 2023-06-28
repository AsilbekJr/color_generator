const values = [
    'a',
    'b',
    'c',
    'd',
    'f',
    'e',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
];

const body = document.querySelector('body');
const container = document.querySelector('.container');
const hex_codes = document.querySelector('.hex-codes');
const text_color = document.querySelector('.text-color');


const createBgColor = () => {
    let color = "#";
    for(let i = 0; i < 6; i++){
        const randomGen = Math.trunc(Math.random() * values.length);
        color += values[randomGen];
    }
    return color;
}
const createColor = () => {
    let color = "#";
    for(let i = 0; i < 6; i++){
        const randomGen = Math.trunc(Math.random() * values.length);
        color += values[randomGen];
    }
    return color;
}
const setColor = () => {
    const degr = Math.trunc(Math.random() * 360);
    const color = createColor()
    const bgColor1 = createBgColor();
    const bgColor2 = createBgColor();
    const linear = `linear-gradient(
        ${degr}deg,
        ${bgColor1},
        ${bgColor2}
    )`
    
    body.style.background = linear;
    container.style.background = linear;
    text_color.style.color = color;
};

container.addEventListener('click', setColor)

