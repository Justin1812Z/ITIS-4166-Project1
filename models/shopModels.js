
const { v4: uuid4 } = require('uuid');

const items = [{
    id: '1',
    title: 'item1',
    seller: 'seller1',
    condition: 'mint',
    price: '100',
    details: 'Item 1 details',
    image: '../../paradym.png',
    active: 'true',
    offers: '7'
}, {
    id: '2',
    title: 'item2',
    seller: 'seller2',
    condition: 'lightly used',
    price: '200',
    details: 'Item 3 details',
    image: '../../paradym.png',
    active: 'false',
    offers: '10'
}, {
    id: '3',
    title: 'item3',
    seller: 'seller3',
    condition: 'well loved',
    price: '50',
    details: 'Item 3 details',
    image: '../../paradym.png',
    active: 'true',
    offers: '7'
}, {
    id: '4',
    title: 'item4',
    seller: 'seller4',
    condition: 'mint',
    price: '500',
    details: 'Item 4 details',
    image: '../../paradym.png',
    active: 'true',
    offers: '16'
}, {
    id: '5',
    title: 'item5',
    seller: 'seller5',
    condition: 'lightly used',
    price: '350',
    details: 'Item 5 details',
    image: '../../paradym.png',
    active: 'true',
    offers: '3'
}, {
    id: '6',
    title: 'item6',
    seller: 'seller6',
    condition: 'mint',
    price: '150',
    details: 'Item 6 details',
    image: '../../paradym.png',
    active: 'true',
    offers: '8'
}, {
    id: '1',
    title: 'item1',
    seller: 'seller1',
    condition: 'mint',
    price: '100',
    details: 'Item 1 details',
    image: '../../paradym.png',
    active: 'true',
    offers: '7'
}, {
    id: '2',
    title: 'item2',
    seller: 'seller2',
    condition: 'lightly used',
    price: '200',
    details: 'Item 3 details',
    image: '../../paradym.png',
    active: 'false',
    offers: '10'
}, {
    id: '3',
    title: 'item3',
    seller: 'seller3',
    condition: 'well loved',
    price: '50',
    details: 'Item 3 details',
    image: '../../paradym.png',
    active: 'true',
    offers: '7'
}
]

exports.find = () => items;

exports.findById = id => items.find(item => item.id === id);

exports.getSortedItems = function () {
    items.sort((a, b) => {
        return a.price - b.price;
    });
    return items;
}

// exports.search = data.filter(function(item) {
//     const sortedItems = getSortedItems();
//     const itemName = item.name.toLowerCase();
//     return itemName.includes(searchString);
//   });

exports.save = function (item) {
    console.log('saving');
    item.id = uuid4();
    item.active = 'true';
    console.log(item);
    items.push(item);
};

exports.searchString = function (str) {

    const searchStr = str.toLowerCase();
    // Filter items based on the search string
    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchString)
    );
    return filteredItems;
}

exports.deleteById = function (id) {
    console.log('finding item with id ' + id);
    const del = items.find(item => item.id === id);
    console.log(del);
    let indexToRemove = items.indexOf(del);
    if (indexToRemove !== -1) {
        items.splice(indexToRemove, 1); // Remove 1 item at the found index
    }

    console.log(items)
    return items;
    // del.active = 'false';
}
