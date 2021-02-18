function createPhoto(photos){
    return   `<div class="thumb">\n
                <img src="${photos.fullscreen}" alt="${photos.alt}"></a>\n
            </div>`;
        }

function insertPhotos(){
        return document.querySelector("main").innerHTML = photos.map(photos => createPhoto(photos)).join('');
    }

insertPhotos();