const content = document.getElementById('content');

const createMenuItem = function (price, name, description) {
    const price1 = document.createElement('span');
    price1.classList.add('price');
    price1.textContent = price;

    const itemName1 = document.createElement('h2');
    itemName1.classList.add('itemName');
    itemName1.innerText = name + " - ";
    itemName1.appendChild(price1);

    const itemDescription1 = document.createElement('p');
    itemDescription1.classList.add('itemDescription');
    itemDescription1.innerText = description;

    const menuItem1 = document.createElement('div');
    menuItem1.classList.add('menuItem');
    menuItem1.appendChild(itemName1);
    menuItem1.appendChild(itemDescription1);

    return menuItem1;
};

const menuItem1 = createMenuItem('$55', 'Tenderloin Steak', '8oz AAA tenderloin steak served with mashed potatoes and steamed vegetables')
const menuItem2 = createMenuItem('$45', 'Ribeye Steak', '12oz ribeye steak served with mashed potatoes and steamed vegetables')
const menuItem3 = createMenuItem('$35', 'New York Strip Steak', '8oz New York Strip steak served with mashed potatoes and steamed vegetables')
const menuItem4 = createMenuItem('$55', 'T-Bone Steak', '18oz T-Bone Steak served with mashed potatoes and steamed vegetables')
const menuItem5 = createMenuItem('$40', 'Pink Salmon', 'Salmon Fillet steak served over rice with steamed vegetables')
const menuItem6 = createMenuItem('$30', 'Chicken Parmesan', 'Chicken breast with marginara sauce and parmesean over pasta')


export function menuComponent() {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('id', 'menuWrapper');
    wrapper.appendChild(menuItem1);
    wrapper.appendChild(menuItem2);
    wrapper.appendChild(menuItem3);
    wrapper.appendChild(menuItem4);
    wrapper.appendChild(menuItem5);
    wrapper.appendChild(menuItem6);
    content.appendChild(wrapper);
};