const photo = [
{
title: 'Hay Bales',
thumbnail: './photos/thumbnails/01.jpg',
source: './photos/01.jpg',
caption: 'I love hay bales. Took this snap on a drive through the countryside past some straw fields.'
},
{
title: "Lake",
thumbnail: './photos/thumbnails/02.jpg',
source: './photos/02.jpg',
caption: "The lake was so calm today. We had a great view of the snow on the mountains from here."
},
{
title: 'Canyon',
thumbnail: './photos/thumbnails/03.jpg',
source: './photos/03.jpg',
caption: 'I hiked to the top of the mountain and got this picture of the canyon and trees below.'
},
{
title: 'Iceberg',
thumbnail: './photos/thumbnails/04.jpg',
source: './photos/04.jpg',
caption: 'It was amazing to see an iceberg up close, it was so cold but didn’t snow today.'
},
{
title: 'Desert',
thumbnail: './photos/thumbnails/05.jpg',
source: './photos/05.jpg',
caption: 'The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.'
},
{
title: 'Fall',
thumbnail: './photos/thumbnails/06.jpg',
source: './photos/06.jpg',
caption: 'Fall is coming, I love when the leaves on the trees start to change color.'
},
{
title: 'Plantation',
thumbnail: './photos/thumbnails/07.jpg',
source: './photos/07.jpg',
caption: 'I drove past this plantation yesterday, everything is so green!'
},
{
title: 'Dunes',
thumbnail: './photos/thumbnails/08.jpg',
source: './photos/08.jpg',
caption: 'My summer vacation to the Oregon Coast. I love the sandy dunes!'
},
{
title: 'Countryside Lane',
thumbnail: './photos/thumbnails/09.jpg',
source: './photos/09.jpg',
caption: 'We enjoyed a quiet stroll down this countryside lane.'
},
{
title: 'Sunset',
thumbnail: './photos/thumbnails/10.jpg',
source: './photos/10.jpg',
caption: 'Sunset at the coast! The sky turned a lovely shade of orange.'
},
{
title: 'Cave',
thumbnail: './photos/thumbnails/11.jpg',
source: './photos/11.jpg',
caption: 'I did a tour of a cave today and the view of the landscape below was breathtaking.'
},
{
Btitle: 'Bluebells',
thumbnail: './photos/thumbnails/12.jpg',
source: './photos/12.jpg',
caption: 'I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.'
}
]

function createThumbnails(photo){
    return  `<a id="${photo.title}" href="${photo.source}" data-caption="${photo.caption}">
                <img src="${photo.thumbnail}" alt="${photo.title}">
            </a>`}

    document.getElementById('gallery').innerHTML = photo.map(photo => createThumbnails(photo)).join('');