function createPhoto(photos){
    return   `<div class="thumb">\n
                <a src="${photos.fullscreen}"><img src="${photos.thumb}"></a>\n
            </div>`;
        }

function insertPhotos(){
        return document.querySelector("main").innerHTML = photos.map(photos => createPhoto(photos)).join('');
    }

insertPhotos();
