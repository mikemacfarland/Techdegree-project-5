
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)
lightbox.innerHTML = `<div class="container">\n
                        <img class="previous">\n
                        <img class="photo" src=''>\n
                        <img class="next">\n
                    </div>\n
                    <h3></h3>\n
                    <p></p>`

const images = document.querySelectorAll('img')

images.forEach(image => {
    image.addEventListener('click', e => {
        const element = document.getElementsByClassName("photo")
        if (e.contains = element){
            lightbox.classList.add('active')
            lightbox.document.getElementsByClassName('photo').src = 'test'
        }
    })
})







        
    

// -------------------
// OLD CODE SNIPPETS
// -------------------

// if (e.contains !== element){ lightbox.classList.remove('active')
        // }

// img.src = image.src
        // while(lightbox.firstChild) {
        //     lightbox.removeChild(lightbox.firstChild)
        // }
        // lightbox.appendChild(img)

// const lightbox = document.createElement('div')
// lightbox.id = 'lightbox'
// // document.queryselector('div').innerHTML = `test`
// document.body.appendChild(lightbox)

// const images = document.querySelectorAll('img')
// images.forEach(image => {
//     image.addEventListener('click', e => {
//         lightbox.classList.add('active')}
        // const img = document.createElement('img')
        // img.src = image.src
        // while(lightbox.firstChild) {
        //     lightbox.removeChild(lightbox.firstChild)
        // }
        // lightbox.appendChild(img)
        
//         const title = document.createElement('h3')
        // title.innerHTML = 
        // while(lightbox.) {
        //     lightbox.removeChild(lightbox.firstChild)
        // }
        // lightbox.appendChild(title)

        // const captions = document.createElement('p')
        // captions.src = ''
        // while(lightbox.firstChild) {
        //     lightbox.removeChild(lightbox.firstChild)
        // }
        // lightbox.appendChild(img)
//     })
    
// })

// const titles = document.createElement('h3')
//         titles.innerHTML = photos.title
        // const captions = document.createElement('p')
        // captions.innerHTML = photos.caption;

// adds an event listener to remove the class .active upon mouse click
// lightbox.addEventListener('click', e => {
//     if (e.target !== e.currentTarget) return //checking if the click "e" target is not equal to the current target
//     lightbox.classList.remove('active') 
// })
