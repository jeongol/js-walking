let starbucks = [
    {
        name: '카페 라떼',
        icedOnly: false,
    },
    {
        name: '콜드 브루',
        icedOnly: true,
    },
    {
        name: '돌체 라떼',
        icedOnly: false,
    },
    {
        name: '돌체 콜드 브루',
        icedOnly: true,
    },
];

var icedOnly = starbucks.filter(function (coffee) {
    return coffee.icedOnly;
});

console.log(icedOnly);