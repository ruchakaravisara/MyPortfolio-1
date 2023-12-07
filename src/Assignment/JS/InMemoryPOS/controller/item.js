let itemArray=[];


$("#btnItem").click(function (){


    //get typed values of input fields
    let itemsid = $("#inputItemid").val();
    let itemname = $("#inputItemName").val();
    let itemprice = $("#inputItemPrice").val();
    let itemquantity = $("#inputItemQuantity").val();


    let ItemObject={
        issid :itemsid,
        iname :itemname ,
        iprice:itemprice,
        iquantity: itemquantity
    }

    let tBody= $("#tblItem");
    /* let tr = $('<tr> <td>'+itemsid+'</td> <td>'+itemname+'</td> <td>'+itemprice+'</td> <td>'+itemquantity+'</td> </tr>');

     itemArray.push({isid:itemsid,iname:itemname,iprice:itemprice,iquantity:itemquantity });*/
    // itemArray.push(ItemObject);

    if (!checkExistItem(ItemObject.issid)) {
        itemArray.push(ItemObject);
    } else {
        alert("Same ID !");
    }

    getAllItem();

    tBody.append(tr);

});

$("#tblItem").on('click','tr',function (){
    let itemsid  =$(this).find('td:eq(0)').text();
    let itemname =$(this).find('td:eq(1)').text();
    let  itemprice =$(this).find('td:eq(2)').text();
    let itemquantity =$(this).find('td:eq(3)').text();

    //set values to textfield
    $("#inputItemid").val(itemsid );
    $("#inputItemName").val(itemname);
    $("#inputItemPrice").val(itemprice);
    $("#inputItemQuantity").val(itemquantity);

});

$("#btnItemDelete").click(function (){
    let selectedID =$("#inputItemid").val();
    for(let i =0;i<itemArray.length;i++){
        if (selectedID===itemArray[i].issid){
            itemArray.splice(i,1);
            break;

        }
    }
    getAllItem();
    clearAll();
})

/*update*/
$('#btnUpdateItem').click(function () {
    // Get data

    let itemsid = $("#inputItemid").val();
    let itemname = $("#inputItemName").val();
    let itemprice = $("#inputItemPrice").val();
    let itemquantity = $("#inputItemQuantity").val();

    // Set new data to existing object (using id)
    for (let i = 0; i < itemArray.length; i++) {
        if (itemsid === itemArray[i].issid) {
            // Confirm update
            let confirmUpdate = confirm("Do you want to update?");

            if (confirmUpdate) {
                // Update the object in the array
                itemArray[i].iname = itemname;
                itemArray[i].iprice = itemprice;
                itemArray[i].iquantity =itemquantity;

                // Exit the loop
                break;
            }
        }
    }

    // Update table
    getAllItem();
});

function checkExistItem(itemsid) {
    for (let i = 0; i < itemArray.length; i++) {
        if (itemsid === itemArray[i].issid) {
            return true;
        }
    }
    return false;
}

//tab
$("#inputItemid,#inputItemName,#inputItemPrice,#inputItemQuantity").keydown(function (e){
    if (e.key==="Tab"){
        e.preventDefault();
    }
});

//enter key
$("#inputItemid").keydown(function (e){
    if(e.key=="Enter"){
        $('#inputItemName').focus();
    }
});

$("#inputItemName").keydown(function (e){
    if(e.key=="Enter"){
        $('#inputItemPrice').focus();
    }
});
$("#inputItemPrice").keydown(function (e){
    if(e.key=="Enter"){
        $('#inputItemQuantity').focus();
    }
});

function getAllItem() {
    let tBody = $("#tblItem");

    // Clear table
    tBody.empty();

    // Load all values
    for (let i = 0; i < itemArray.length; i++) {
        let tr = $(`<tr>
                        <td>${itemArray[i].issid}</td>
                        <td>${itemArray[i].iname}</td>
                        <td>${itemArray[i].iprice}</td>
                        <td>${itemArray[i].iquantity}</td>
                   </tr>`);
        tBody.append(tr);
    }
}
function clearAll(){
    $("#inputItemid").val("");
    $("#inputItemName").val("");
    $("#inputItemPrice").val("");
    $("#inputItemQuantity").val("");
}