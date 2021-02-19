
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)
lightbox.innerHTML = `<div class="container">\n
                        <img class="previous" src='images/svg/left-arrow.svg'>\n
                        <img id="photo" src=''>\n
                        <img class="next" src='images/svg/right-arrow.svg'>\n
                    </div>\n
                    <h3 id="title"></h3>\n
                    <p id="caption"></p>`

const images = document.querySelectorAll('img')

const fullscreen = photos.fullscreen

images.forEach(image => {
    image.addEventListener('click', e => {
        const element = document.getElementsByClassName("photo")
        if (e.target = element){
            lightbox.classList.add('active')
            document.getElementById('photo').src = e.target.src
            document.getElementById('title').innerHTML = 
            document.getElementById('caption').innerHTML = 'test'
        }
    })
    lightbox.addEventListener('click', j =>{
        const lbComponents = document.getElementsByTagName('img')
        if (j.target = lbComponents){
            lightbox.classList.remove('active')
        }
    })
})

lightbox.addEventListener('click', n =>{
    const next = document.getElementsByClassName('next')
    if(n.target = next){
    document.getElementById('photo').src = "images/01.jpg"
    }
})

lightbox.addEventListener('click', n =>{
    const previous = document.getElementsByClassName('previous')
    if(n.target = previous){
        document.getElementById('photo').src = "images/03.jpg"
    }
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
