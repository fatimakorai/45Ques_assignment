"use strict";
function creatingcar(manufacture, model, optional) {
    return Object.assign({ model,
        manufacture }, optional);
}
const mycar = creatingcar('Hyundai', 'Creta', { color: 'Black', year: '2024' });
console.log(mycar);
