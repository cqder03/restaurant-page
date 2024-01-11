function postHome() {
    const home_container = document.createElement('div')
    const item_holder = document.createElement('div');
    const main_h2_1 = document.createElement('h2')
    const main_h2_2 = document.createElement('h2');

    main_h2_1.textContent = 'Best coffe in your neighborhood, come and visit us.';
    main_h2_2.textContent = 'OUR MOST POPULAR ITEMS';

    home_container.setAttribute('id', 'home-container')
    item_holder.setAttribute('id', 'home-item-holder')

    document.querySelector('#content').appendChild(home_container);
    home_container.appendChild(main_h2_1);
    home_container.appendChild(main_h2_2);
    home_container.appendChild(item_holder);
    
    const item1 = document.createElement('div');
    const item2 = document.createElement('div');
    const item3 = document.createElement('div');
    
    item1.classList.add('item');
    item2.classList.add('item');
    item3.classList.add('item');

    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    const img3 = document.createElement('img');

    img1.setAttribute('src', '../src/assets/icons/croissant.png');
    img2.setAttribute('src', '../src/assets/icons/latte-art.png');
    img3.setAttribute('src', '../src/assets/icons/iced-coffee.png');

    const overlay1 = document.createElement('div');
    const overlay2 = document.createElement('div');
    const overlay3 = document.createElement('div');

    overlay1.classList.add('overlay');
    overlay2.classList.add('overlay');
    overlay3.classList.add('overlay');

    const h2_1 = document.createElement('h2');
    const h2_2 = document.createElement('h2');
    const h2_3 = document.createElement('h2');

    h2_1.textContent = 'Croissant';
    h2_2.textContent = 'Latte';
    h2_3.textContent = 'Iced coffe';

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');

    p1.classList.add('hidden-text');
    p2.classList.add('hidden-text');
    p3.classList.add('hidden-text');

    p1.textContent = 'Lorem,ipsum dolor sit amet consectetur adipisicing elit. Doloremque error cumque vaniam modi ea.'
    p2.textContent = 'Lorem,ipsum dolor sit amet consectetur adipisicing elit. Doloremque error cumque vaniam modi ea.'
    p3.textContent = 'Lorem,ipsum dolor sit amet consectetur adipisicing elit. Doloremque error cumque vaniam modi ea.'

    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    const button3 = document.createElement('button');

    button1.classList.add('overlay-btn');
    button2.classList.add('overlay-btn');
    button3.classList.add('overlay-btn');

    button1.textContent = 'Add to card';
    button2.textContent = 'Add to card';
    button3.textContent = 'Add to card';

    const see_more = document.createElement('button');
    see_more.classList.add('see-more');
    see_more.textContent = 'SEE MORE';
    home_container.appendChild(see_more);

    function insertItems(to, ...items) {
        items.forEach((item) => to.appendChild(item));
    }
    
    const itemsArr = [item1, item2, item3];
    const itemCollection1 = [img1, overlay1];
    const itemCollection2 = [img2, overlay2];
    const itemCollection3 = [img3, overlay3];
    const itemsCollection = [itemCollection1, itemCollection2, itemCollection3];
    const itemSubCollection1 = [h2_1, p1, button1];
    const itemSubCollection2 = [h2_2, p2, button2];
    const itemSubCollection3 = [h2_3, p3, button3];
    const itemsSubCollection = [itemSubCollection1, itemSubCollection2, itemSubCollection3];

    insertItems(item_holder, ...itemsArr);
    
    for (let i = 0; i < 3; i++) {
        
        itemsCollection[i].forEach((item) => itemsArr[i].appendChild(item));
        itemsSubCollection[i].forEach((item) => itemsCollection[i][1].appendChild(item));
    }
}

