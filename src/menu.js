function postMenu() {
    const menuContainer = document.createElement('div');
    const menuH2 = document.createElement('h2');
    const itemsContainer = document.createElement('div');

    menuH2.textContent = 'MENU';
    itemsContainer.setAttribute('class', 'items-container');
    menuContainer.setAttribute('id', 'menu-container');
    menuContainer.appendChild(menuH2);
    menuContainer.appendChild(itemsContainer);
    document.querySelector('#content').appendChild(menuContainer);

    const item1 = document.createElement('div');
    const item2 = document.createElement('div');
    const item3 = document.createElement('div');
    const item4 = document.createElement('div');
    const item5 = document.createElement('div');
    const item6 = document.createElement('div');
    const item7 = document.createElement('div');
    const item8 = document.createElement('div');
    const item9 = document.createElement('div');

    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    const img3 = document.createElement('img');
    const img4 = document.createElement('img');
    const img5 = document.createElement('img');
    const img6 = document.createElement('img');
    const img7 = document.createElement('img');
    const img8 = document.createElement('img');
    const img9 = document.createElement('img');

    img1.setAttribute('src', '../src/assets/icons/bagels.png');
    img2.setAttribute('src', '../src/assets/icons/croissant.png');
    img3.setAttribute('src', '../src/assets/icons/cup-cake.png');
    img4.setAttribute('src', '../src/assets/icons/donut.png');
    img5.setAttribute('src', '../src/assets/icons/expresso.png');
    img6.setAttribute('src', '../src/assets/icons/iced-coffee.png');
    img7.setAttribute('src', '../src/assets/icons/latte-art.png');
    img8.setAttribute('src', '../src/assets/icons/pizza.png');
    img9.setAttribute('src', '../src/assets/icons/sandwich.png');
    
    const overlay1 = document.createElement('div');
    const overlay2 = document.createElement('div');
    const overlay3 = document.createElement('div');
    const overlay4 = document.createElement('div');
    const overlay5 = document.createElement('div');
    const overlay6 = document.createElement('div');
    const overlay7 = document.createElement('div');
    const overlay8 = document.createElement('div');
    const overlay9 = document.createElement('div');

    const h2_1 = document.createElement('h2');
    const h2_2 = document.createElement('h2');
    const h2_3 = document.createElement('h2');
    const h2_4 = document.createElement('h2');
    const h2_5 = document.createElement('h2');
    const h2_6 = document.createElement('h2');
    const h2_7 = document.createElement('h2');
    const h2_8 = document.createElement('h2');
    const h2_9 = document.createElement('h2');

    h2_1.textContent = 'Bagel';
    h2_2.textContent = 'Croissant';
    h2_3.textContent = 'Cup Cake';
    h2_4.textContent = 'Donut';
    h2_5.textContent = 'Expresso';
    h2_6.textContent = 'Iced Coffe';
    h2_7.textContent = 'Latte';
    h2_8.textContent = ' Pizza';
    h2_9.textContent = 'Sandwitch';

    const h_text_1 = document.createElement('p');
    const h_text_2 = document.createElement('p');
    const h_text_3 = document.createElement('p');
    const h_text_4 = document.createElement('p');
    const h_text_5 = document.createElement('p');
    const h_text_6 = document.createElement('p');
    const h_text_7 = document.createElement('p');
    const h_text_8 = document.createElement('p');
    const h_text_9 = document.createElement('p');

   

    const price_text_1 = document.createElement('p');
    const price_text_2 = document.createElement('p');
    const price_text_3 = document.createElement('p');
    const price_text_4 = document.createElement('p');
    const price_text_5 = document.createElement('p');
    const price_text_6 = document.createElement('p');
    const price_text_7 = document.createElement('p');
    const price_text_8 = document.createElement('p');
    const price_text_9 = document.createElement('p');

    price_text_1.textContent = '$0.99';
    price_text_2.textContent = '$0.50';
    price_text_3.textContent = '$1.25';
    price_text_4.textContent = '$0.60';
    price_text_5.textContent = '$1.25';
    price_text_6.textContent = '$1.50';
    price_text_7.textContent = '$3.00';
    price_text_8.textContent = '$2.50';
    price_text_9.textContent = '$1.00';

    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    const button3 = document.createElement('button');
    const button4 = document.createElement('button');
    const button5 = document.createElement('button');
    const button6 = document.createElement('button');
    const button7 = document.createElement('button');
    const button8 = document.createElement('button');
    const button9 = document.createElement('button');

    let itemList = [item1, item2, item3, item4, item5, item6, item7, item8, item9];
    itemList.forEach((item) => item.classList.add('item'));

    let imgList = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
    
    let overlayList = [overlay1, overlay2, overlay3, overlay4, overlay5, overlay6, overlay7, overlay8, overlay9];
    overlayList.forEach((element) => element.classList.add('overlay'));

    let h2TitleList = [h2_1, h2_2, h2_3, h2_4, h2_5, h2_6, h2_7, h2_8, h2_9];
    
    let para_textList = [h_text_1, h_text_2, h_text_3, h_text_4, h_text_5, h_text_6, h_text_7, h_text_8, h_text_9];
    para_textList.forEach((para) => para.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corrupti nobis porro ipsa delectus repellat sapiente illum veritatis quod ex?');
    para_textList.forEach((classAdd) => classAdd.classList.add('hidden-text'));

    let paraPriceList = [price_text_1, price_text_2, price_text_3, price_text_4, price_text_5, price_text_6, price_text_7, price_text_8, price_text_9];
    paraPriceList.forEach((priceTag) => priceTag.classList.add('price'));
    
    let btnList = [button1, button2, button3, button4, button5, button6, button7, button8, button9];
    btnList.forEach((btn) => btn.textContent = 'Add to the card');
    btnList.forEach((btn) => btn.classList.add('bottom-button'));
    itemList.forEach((item) => itemsContainer.appendChild(item));

    for (let i = 0; i <= 8; i++) {
        itemList[i].appendChild(imgList[i]);
        itemList[i].appendChild(overlayList[i]);
    }

    for (let i = 0; i <= 8; i++) {
        overlayList[i].appendChild(h2TitleList[i]);
        overlayList[i].appendChild(para_textList[i]);
        overlayList[i].appendChild(paraPriceList[i]);
        overlayList[i].appendChild(btnList[i]);
    }
}

export default postMenu