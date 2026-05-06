// tab changer
document.addEventListener("DOMContentLoaded", () => {

    'use strict';
    
    const tabs = document.querySelectorAll('.tab');
    const boxes = document.querySelectorAll('.box');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const i = parseInt(tab.dataset.index);
            
            boxes.forEach((b, j) => b.classList.toggle('hidden', j !== i));
        });
    });
});