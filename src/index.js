import postHome from '../src/home';
import postMenu from '../src/menu';
import postAbout from '../src/about';

const postHeader = (function() {
    const head = document.createElement('header');
    const h1 = document.createElement('h1');
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');

    h1.textContent = 'THE BEST COFFE SHOP';
    li1.textContent = 'Home';
    li2.textContent = 'Menu';
    li3.textContent = 'About';
    li1.setAttribute('id', 'home');
    li2.setAttribute('id', 'menu');
    li3.setAttribute('id', 'about');

    // [li1, li2, li3].forEach((item) => item.classList.add('header-link'));

    document.querySelector('#content').appendChild(head);
    head.appendChild(h1);
    head.appendChild(ul)
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    
})();

function setActive(set) {
    const list = document.querySelectorAll('li');
    
    
    if (set === 'home') {
        if(document.querySelector('#menu').getAttribute('class') === 'active') {
            document.querySelector("#content").removeChild(document.querySelector("#menu-container"));
        } 
        if (document.querySelector('#about').getAttribute('class') === 'active') {
            document.querySelector('#content').removeChild(document.querySelector('#about-container'));
        }
        postHome();
        document.querySelector('.see-more').addEventListener('click', () => setActive('menu'))
    } else if (set === 'menu') {
        if(document.querySelector('#home').getAttribute('class') === 'active') {
            document.querySelector("#content").removeChild(document.querySelector("#home-container"));
        }
        if (document.querySelector('#about').getAttribute('class') === 'active') {
            document.querySelector('#content').removeChild(document.querySelector('#about-container'));
        }
        postMenu();
    } else if (set === 'about') {
        if (document.querySelector('#home').getAttribute('class') === 'active') {
            document.querySelector("#content").removeChild(document.querySelector("#home-container"));
        }
        if (document.querySelector('#menu').getAttribute('class') === 'active') {
            document.querySelector("#content").removeChild(document.querySelector("#menu-container"));
        }
        postAbout();
    }
    
    list.forEach((el) => el.classList.remove('active'));
    document.querySelector(`#${set}`).classList.add('active');
}

document.querySelector('ul').addEventListener('click', (event) => {
    let eventId = event.target.id;

    switch(eventId) {
        case 'home':
            if(document.querySelector('#home').getAttribute('class') === 'active') {
                break;
            }
            setActive('home');
            break;
        case 'menu':
            if (document.querySelector('#menu').getAttribute('class') === 'active') {
                break
            }
            setActive('menu');
            break;
        case 'about':
            setActive('about');
            break;
    }
});

setActive('home');