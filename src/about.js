function postAbout() {
    const aboutContainer = document.createElement('div');
    const aboutH2 = document.createElement('h2');

    aboutH2.textContent = 'ABOUT';
    aboutContainer.setAttribute('id', 'about-container');
    aboutContainer.appendChild(aboutH2);
    document.querySelector('#content').appendChild(aboutContainer);

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const uList = document.createElement('ul');
    uList.classList.add('social-media-list');

    p1.textContent = `Culture Espresso is an independent and locally owned coffee \n
    shop that opened in 2009.`;
    p2.textContent = `We pride ourselves on bringing the best coffee to the heart \n
    of //Imaginary city//.  We also offer a daily assortment of fresh \n
    baked goods and our Award Winning Cup Cakes.`;
    p3.textContent = 'You can also check catch us at these places:';

    [p1, p2 ,p3, uList].forEach((item) => aboutContainer.appendChild(item));

    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const li4 = document.createElement('li');

    const liList = [li1, li2, li3, li4];

    const a1 = document.createElement('a');
    const a2 = document.createElement('a');
    const a3 = document.createElement('a');
    const a4 = document.createElement('a');

    const aList = [a1, a2, a3, a4];
    aList.forEach((link) => link.setAttribute('href', '#'));

    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    const img3 = document.createElement('img');
    const img4 = document.createElement('img');

    img1.setAttribute('src', '../src/assets/social-media-icons/facebook-logo.png');
    img2.setAttribute('src', '../src/assets/social-media-icons/instagram-logo.png');
    img3.setAttribute('src', '../src/assets/social-media-icons/whatsapp-logo.png');
    img4.setAttribute('src', '../src/assets/social-media-icons/x-logo.png');

    const imgList = [img1, img2, img3, img4];
    imgList.forEach((img) => img.classList.add('social-media-icon'));

    for (let i = 0; i <= 3; i++) {
        uList.appendChild(liList[i]);
        liList[i].appendChild(aList[i]);
        aList[i].appendChild(imgList[i])
    }

}

export {postAbout};