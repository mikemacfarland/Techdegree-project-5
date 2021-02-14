


function photo(value){
    return   `<div class="thumb">\n
                <img src="${value.thumb}">\n
                <h3>${value.title}</h3>\n
                <p>${value.caption}</p>\n
            </div>`;
        }

function lessCode(value){
        return document.querySelector("main").innerHTML = photo(value);
    }

lessCode(bluebells);
