
    let customerArray=[];
    $("#btnCustomer").click(function (){


    //get typed values of input fields
    let cusid = $("#inputid").val();
    let cusname = $("#inputName").val();
    let cusaddress = $("#inputAddress").val();
    let cussalary = $("#inputSalary").val();


    let CustomerObject={
    id :cusid ,
    name :cusname,
    address:cusaddress,
    salary: cussalary
}
    //let's print it
    /*  console.log(id,name,address,salary);*/

    //catch the table body
    let tBody= $("#tblCustomer");
    /*   let tr = $('<tr> <td>'+cusid+'</td> <td>'+cusname+'</td> <td>'+cusaddress+'</td> <td>'+cussalary+'</td> </tr>');*/

    /* customerArray.push(CustomerObject);*/
    if (!checkExistCustomer(CustomerObject.id)) {
    customerArray.push(CustomerObject);
} else {
    alert("Same ID !");
}

    getAllCustomers();

    // let's see how we should insert a table row using html format
    //<tr>
    // <td>id</td>
    // <td>name</td>
    // <td>address</td>
    // <td>salary</td>
    // </tr>

    //ok then, let's create the above row
    /*let tr= document.createElement("tr");

    //let's create another four columns
    let col1= document.createElement("td");
    let col2= document.createElement("td");
    let col3= document.createElement("td");
    let col4= document.createElement("td");

    //set input fields values to the above created columns
    col1.textContent=id;
    col2.textContent=name;
    col3.textContent=address;
    col4.textContent=salary;

    //set 4 columns to the previously created row
    tr.appendChild(col1);
    tr.appendChild(col2);
    tr.appendChild(col3);
    tr.appendChild(col4);*/

    //set the row to the table body
    tBody.append(tr);

    //Work done;
    //done
});

    //get data from raw
    $("#tblCustomer").on('click','tr',function (){
    let cusid =$(this).find('td:eq(0)').text();
    let cusname =$(this).find('td:eq(1)').text();
    let  cusaddress =$(this).find('td:eq(2)').text();
    let cussalary =$(this).find('td:eq(3)').text();

    //set values to textfield
    $("#inputid").val(cusid);
    $("#inputName").val(cusname);
    $("#inputAddress").val(cusaddress);
    $("#inputSalary").val(cussalary);

});

    $("#btnCustomerDelete").click(function (){
    let selectedID =$("#inputid").val();
    for(let i =0;i<customerArray.length;i++){
    if (selectedID===customerArray[i].id){
    customerArray.splice(i,1);
    break;

}
}
    getAllCustomers();
    clearAll();
})

    /*update*/
    $('#btnUpdateCustomer').click(function () {
    // Get data

    let cusid = $("#inputid").val();
    let cusname = $("#inputName").val();
    let cusaddress = $("#inputAddress").val();
    let cussalary = $("#inputSalary").val();

    // Set new data to existing object (using id)
    for (let i = 0; i < customerArray.length; i++) {
    if (cusid === customerArray[i].id) {
    // Confirm update
    let confirmUpdate = confirm("Do you want to update?");

    if (confirmUpdate) {
    // Update the object in the array
    customerArray[i].name = cusname;
    customerArray[i].address = cusaddress;
    customerArray[i].salary =cussalary;

    // Exit the loop
    break;
}
}
}

    // Update table
    getAllCustomers();
});

    // check customer is exists
    function checkExistCustomer(cusid) {
    for (let i = 0; i < customerArray.length; i++) {
    if (cusid === customerArray[i].id) {
    return true;
}
}
    return false;
}

    //tab
    $("#inputid,#inputName,#inputAddress,#inputSalary").keydown(function (e){
    if (e.key==="Tab"){
    e.preventDefault();
}
});

    //enter key
    $("#inputid").keydown(function (e){
    if(e.key=="Enter"){
    $('#inputName').focus();
}
});

    $("#inputName").keydown(function (e){
    if(e.key=="Enter"){
    $('#inputAddress').focus();
}
});
    $("#inputAddress").keydown(function (e){
    if(e.key=="Enter"){
    $('#inputSalary').focus();
}
});

    //validation for customer
    const CusIdRegex = /^(C00-)[0-9]{3}$/;
    const CusNameRegex = /^[A-Za-z ]{5,}$/;
    const CusAddressRegex = /^[A-Za-z0-9 ]{5,}$/;
    const CusContactRegex = /^[0-9]{10,}$/;

    //add validations set text fields
    let cusValidateArray = new Array();
    cusValidateArray.push({field: $("#inputid"), regEx: CusIdRegex});
    cusValidateArray.push({field: $("#inputName"), regEx: CusNameRegex});
    cusValidateArray.push({field: $("#inputAddress"), regEx: CusAddressRegex});
    cusValidateArray.push({field: $("#inputSalary"), regEx: CusContactRegex});

    function checkValidations(object) {
    if (object.regEx.test(object.field.val())) {
    setBorder(true, object)
    return true;
}
    setBorder(false, object)
    return false;
}


    function setBorder(bol, ob) {
    if (!bol) {
    if (ob.field.val().length >= 1) {
    ob.field.css("border", "2px solid red");
} else {
    ob.field.css("border", "1px solid #ced4da");
}
} else {
    if (ob.field.val().length >= 1) {
    ob.field.css("border", "2px solid green");
} else {
    ob.field.css("border", "1px solid #ced4da");
}
}

}


    function checkAll() {
    for (let i = 0; i < cusValidateArray.length; i++) {
    if (!checkValidations(cusValidateArray[i])) return false;
}
    return true;
}



    /*....................................*/

    function getAllCustomers() {
    let tBody = $("#tblCustomer");

    // Clear table
    tBody.empty();

    // Load all values
    for (let i = 0; i < customerArray.length; i++) {
    let tr = $(`<tr>
                        <td>${customerArray[i].id}</td>
                        <td>${customerArray[i].name}</td>
                        <td>${customerArray[i].address}</td>
                        <td>${customerArray[i].salary}</td>
                   </tr>`);
    tBody.append(tr);
}
}
    function clearAll(){
    $("#inputid").val("");
    $("#inputName").val("");
    $("#inputAddress").val("");
    $("#inputSalary").val("");
}



