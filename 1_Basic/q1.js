let arr = [
    { firstName: 'Govind', lastName: 'jha', age: 25 },
    { firstName: 'Donald', lastName: 'Trump', age: 76 },
    { firstName: 'Vimpol', lastName: 'Xyz', age: 20 },
    { firstName: 'Deepika', lastName: 'Padukone', age: 25 }
];

let result = arr.reduce((acc, item) => {
    // acc[item.age] = (acc[item.age] || 0) + 1;
    if(acc[item.age]){
        acc[item.age]++;
    }
    else{
        acc[item.age] = 1;
    }
    return acc;
}, {});

console.log(result)