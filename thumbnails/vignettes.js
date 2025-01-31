/**
 * Exercice DOM 06
Créez une page avec un ensemble de vignettes. Lorsque l’on clique sur une vignette: l’image correspondante s’affiche en dessous des vignettes et la vignette affichée est mise en transparence (opacity:50% par exemple).
 */

const buildHTML = ()=> {
    document.querySelector('#myApp').innerHTML = `
        <ul></ul>
        <div id="selectedImage"></div>
    `;
}
const displaySelectedImage = ()=> {
    // afficher en grand la première image
    document.querySelector('#selectedImage').innerHTML = `<img src="${imgListUrl[selectedIndex]}" />`;
}
const displayThumbnails = () => {
    document.querySelector('ul').innerHTML = imgListUrl.map((url, index) => {
        return `<li id="${index}">
            <img src="${url}" style="height: 80px; opacity: ${index === selectedIndex ? '0.5' : '1'}" />
        </li>`
    }).join('');
}

buildHTML();
const imgListUrl = [
    'https://www.agria.fr/imagevault/publishedmedia/9vgy569fypmkernjg4x6/Orange_cat_laying_indoor.jpg',
    'https://fr.mypet.com/wp-content/uploads/sites/10/2024/02/chat-saviez-vous.png',
    'https://feelloo.com/wp-content/uploads/2019/10/jeune-chat-pexels-104827-900x598.jpeg'
];
let selectedIndex = 0;
// mettre les image dans le html ( miniatures )
displayThumbnails();
// afficher en grand la première image
displaySelectedImage();
// ajouter un click sur la liste des miniatures
document.querySelector('ul').addEventListener('click', (event) => {
    if (event.target.closest('LI')) {
        const id = event.target.closest('LI').id;
        selectedIndex = Number(id);
        // afficher la nouvelle image
        displaySelectedImage();
        displayThumbnails();
    }
});



const t = setTimeout(()=> {
    console.log('hello timout');
}, 1000);

const i = setInterval(()=> {
    console.log('hello interval');
    selectedIndex++;
    displaySelectedImage();
    displayThumbnails();
}, 1000);