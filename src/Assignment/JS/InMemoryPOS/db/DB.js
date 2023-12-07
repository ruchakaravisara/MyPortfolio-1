var customerDB = [

    {id: "C00-001", name: "ruchaka ", address: "Galle", salary: 100000}
];

var itemDB = [

    {code: "I00-001", itemName: "rice", qtyOnHand: 50, unitPrice: 200.00}
];

var orderDB = [

    {
        orderID: "O00-001",
        date: "2023/01/01",
        customer: customerDB[1],
        cart: [{item: itemDB[2], qty: 1}, {item: itemDB[1], qty: 1}, {item: itemDB[0], qty: 1}],
        discount: 10,
        total: 1000
    }
];