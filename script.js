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
/* not working, need php i think
var crochet = [];
for (var i = 1; i < 10; i++) {
    a = new Image();
    a.onload = function() {crochet.push(this);}
    a.src=`/gallery/crochet/${i}.jpg`;
}
*/