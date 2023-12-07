$('#custListId').click(function (){
    console.log("ok");
    let selectedId = $('#custListId').val();
    console.log(selectedId);

    let customerIndex = customerArray.findIndex(customerArray => customerArray.id === selectedId);
    console.log("ok");

    console.log(customerArray["ok"]);
    $('#cusNamePO').val(customerArray[customerIndex].name);
});


$('#itemIdList').click(function (){
    console.log("ok");
    let selectedCode = $("#itemIdList").val();
    console.log(selectedCode);
    /*console.log("hri");*/

    let ItemIndex = itemArray.findIndex(itemArray => itemArray.issid === selectedCode);
    console.log("ok");
    console.log(itemArray[ItemIndex]);

    $('#itemDesPO').val(itemArray[ItemIndex].iname);
    $('#itemPricePO').val(itemArray[ItemIndex].iprice);
    $('#Qty').val(itemArray[ItemIndex].iquantity);
});


let amountOfTotal=0;
let OrderList=[];
let orderIndex;

$("#addToCard").click(function (){

    let tBody=$("#OrderTbl");
    let itemId = $('#inputItemid').val();
    let itemDec = $('#inputItemName').val();
    let unitPrice=$('#inputItemPrice').val();
    let qty=$('#inputItemQuantity').val();
    let total=unitPrice*qty

    let tr = $('<tr> <td>'+itemId+'</td> <td>'+itemDec+'</td> <td>'+ unitPrice+'</td> <td>'+qty+'</td> <td>'+total+'</td></tr>');

    OrderList.push({id:itemId,name:itemDec,price:unitPrice,number:qty})
    // CustomerList.push()
    //set the row to the table body
    tBody.append(tr);


//set total for bill
    amountOfTotal =total+amountOfTotal;
    console.log("AIFSA",amountOfTotal);
    $('#totalPlaceOrder').val(amountOfTotal);

});

let selectedOrderRow;
//load Customer
$("#tblCustomer").click(function (event){
    selectedCustomerRow = event.target.closest('tr');
    $('#inputitemID').val(selectedOrderRow.cells[0].textContent);
    $('#inputItemName').val(selectedOrderRow.cells[1].textContent);
    $('#itemPricePO').val(selectedOrderRow.cells[2].textContent);
    $('#Qty').val(selectedOrderRow.cells[3].textContent);
    $('#Total').val(selectedOrderRow.cells[4].textContent);

    orderIndex = OrderList.findIndex(OrderList => OrderList.id === selectedCustomerRow.cells[0].textContent);


});

//clear btn
function clearOrderFields() {
    $('#InputOID').val("");
    $('#InputDate').val("");
    $('#custListId').val("");
    $('#cusNamePO').val("");
    $('#itemIdList').val("");
    $('#itemDesPO').val("");
    $('#itemPricePO').val("");
    $('#itemQtyHandPO').val("");
    $('#Qty').val("");
    $('#totalPlaceOrder').val("");
    $('#discountPlaceOrder').val("");
    $('#subTotalPlaceOrder').val("");

}

$("#btnOrderClear").click(function(){
    clearOrderFields();
});

//add Order Total

// Discount
//sub total calculation part
$('#subTotalPlaceOrder').click(function (){
    let discount = $('#discountPlaceOrder').val();
    console.log("hate this");
    let subTotal = amountOfTotal -discount;
    $('#subTotalPlaceOrder').val(subTotal);

});

//btn purchase action
let finalOrderList = [];
$('#btnPurchaseFinalOrder').click(function (){

    let finalOrderId =  $('#InputOID').val();
    let finalOrderDate = $('#InputDate').val();
    let finalCustomerId = $('#custListId').val();
    let finalItemCode = $('#itemIdList').val();
    let finalQuantity = $('#Qty').val();
    let finalDiscount = $('#discountPlaceOrder').val();
    let finalTotal =  $('#subTotalPlaceOrder').val();

    let tBody=$("#tblFinalOrder");

    let tr = $('<tr> <td>'+finalOrderId+'</td>  <td>'+finalOrderDate+'</td>  <td>'+finalCustomerId+'</td> <td>'+finalItemCode+'</td> <td>'+finalQuantity+'</td> <td>'+finalDiscount+'</td>  <td>'+finalTotal+'</td> </tr>');

    tBody.append(tr);

    finalOrderList.push({oid:finalOrderId , date:finalOrderDate, id:finalCustomerId , code :finalItemCode,  qty : finalQuantity , discount :finalDiscount , subtotal:finalTotal})

    /* console.log(finalOrderList);*/

});

/*
loadAllOrders();

// Get the table body element
function loadAllOrders() {
    let tblOrdersBody = $('#tblOrders');

// Clear the table body
    tblOrdersBody.empty();

// Iterate over the orderDB array and add rows to the table
    orderDB.forEach(function (order) {
        let items = order.cart.map(function (cartItem) {
            return cartItem.item.code;
        }).join(', ');

        let row = '<tr>' +
            '<td>' + order.orderID + '</td>' +
            '<td>' + order.date + '</td>' +
            '<td>' + order.customer.id + '</td>' +
            '<td>' + items + '</td>' +
            '<td>' + order.discount + '</td>' +
            '<td>' + order.total + '</td>' +
            '</tr>';

        tblOrdersBody.append(row);
    });

}
*/
