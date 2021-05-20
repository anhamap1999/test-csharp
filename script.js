import html from './core';
const cars = [1, 2, 3];

const view = html`
    <h1>${true}</h1>
    <ul>
        ${cars.map(i => <li>${i}</li>)}
    </ul>
`

console.log(view);