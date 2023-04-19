const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// 1 спосіб
// const makeGallery = images.forEach(({ url, alt }) => {
//   const galleryEl = document.createElement('li');
//   const imageEl = document.createElement('img');
//   imageEl.src = url;
//   imageEl.alt = alt;
//   galleryEl.appendChild(imageEl);
//   const galleryList = document.querySelector('.gallery');
//   galleryList.appendChild(galleryEl);
//   return galleryList;
// });

// 2 спосіб
// const makeGallery = ({ url, alt }) => {
//   const galleryEl = document.createElement('li');
//   const imageEl = document.createElement('img');
//   imageEl.src = url;
//   imageEl.alt = alt;
  
//   galleryEl.append(imageEl);

//   return galleryEl;
// };

// const makeGalleryImages = images.map(makeGallery);
// const galleryList = document.querySelector('.gallery');

// galleryList.append(...makeGalleryImages);

// 3 спосіб
const makeGallery = ({ url, alt }) => {
  return `
  <li>
  <img src=${url} alt="${alt}"/>
  </li>
  `;
}
const galleryList = document.querySelector('.gallery');
const makeGalleryImages = images
  .map(makeGallery)
  .join('');

galleryList.insertAdjacentHTML('afterbegin', makeGalleryImages);

console.log(galleryList);


  
