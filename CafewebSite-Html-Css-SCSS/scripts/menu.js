'use strict';

let xhr = new XMLHttpRequest();

function getMenu(menuType) {
    if (xhr) {
        let obj = document.getElementById('menu');
        xhr.open("get", `images/${menuType}.png`);

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                obj.innerHTML = `<img src="images/${menuType}.png" alt="${menuType} Menu">`;
            }
        }

        xhr.send();
    }
}


