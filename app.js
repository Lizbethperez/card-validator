

$("#confirm-purchase").click(function (event) {
    event.preventDefault();

    var inputName = $("#owner").val();
    var inputCreditNumber = $("#cardNumber").val();
    var inputMonth = $("#monthValue").val();
    var inputYear = $("#yearValue").val();
    var inputCvv = $("#cvv").val();

    console.log(inputName);
    console.log(inputCreditNumber);
    console.log(inputCvv);
    console.log(inputMonth);
    console.log(inputYear);

    compareAllData(inputName, inputCreditNumber, inputMonth, inputYear, inputCvv);

    if (!compareAllData(inputName, inputCreditNumber, inputMonth, inputYear, inputCvv)) {
        swal("TARJETA RECHAZADA", "Intente de nuevo", "error");

    } else {
        swal("TARJETA APROBADA", "Gracias por su compra", "success");
    }


});

