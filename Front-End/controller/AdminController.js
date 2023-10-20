let baseUrl = "http://localhost:8085/Back_End_war/";
$(function () {
    $('#adminDashboard').css("display", "flex");
    $("#manageRentalRequests_section").css('display', 'none');
    $("#manageVehicle_section").css('display', 'none');
    $("#manageBookings_section").css('display', 'none');
    $("#manageCustomer_section").css('display', 'none');
    $("#manageDriver_section").css('display', 'none');
    $("#viewDriverSchedule_section").css('display', 'none');
    $("#viewCarSchedule_section").css('display', 'none');
    $("#adminProfile_section").css('display', 'none');
    $("#manageRentDetails_section").css('display', 'none');
    $("#managePayment_section").css('display', 'none');
    loadDashBoard();
});

function loadDashBoard() {
    $.ajax({
        url: baseUrl + "customer/admin/dashBoard/getAllCustomerCount",
        method: "get",
        success: function (resp) {
            $('#registeredUsersCount').text(resp.data);
        }
    });

    $.ajax({
        url: baseUrl + "rent/admin/dashBoard/totalBookings",
        method: "get",
        success: function (resp) {
            $('#totalBookingsCount').text(resp.data);
        }
    });

    $.ajax({
        url: baseUrl + "rent/admin/dashBoard/allBookings/getActiveBookings",
        method: "get",
        success: function (resp) {
            $('#activeBookingsCount').text(resp.data);
        }
    });

    $.ajax({
        url: baseUrl + "car/admin/dashBoard/availableCars",
        method: "get",
        success: function (resp) {
            $('#availableCarCount').text(resp.data);
        }
    });

    $.ajax({
        url: baseUrl + "car/adminDashBoard/reservedCars",
        method: "get",
        success: function (resp) {
            $('#reservedCarCount').text(resp.data);
        }
    });

    $.ajax({
        url: baseUrl + "driver/adminDashBoard/occupiedDrivers",
        method: "get",
        success: function (resp) {
            $('#occupiedDriversCount').text(resp.data);
        }
    });

    $.ajax({
        url: baseUrl + "driver/admin/dashBoard/availableDrivers",
        method: "get",
        success: function (resp) {
            $('#availableDriversCount').text(resp.data);
        }
    });

    $.ajax({
        url: baseUrl + "car/admin/dashBoard/needToMaintenance/carCount",
        method: "get",
        success: function (resp) {
            $('#needToMaintenanceCount').text(resp.data);
        }
    });

    $.ajax({
        url: baseUrl + "car/admin/dashBoard/maintenance/underMaintenance/carCount",
        method: "get",
        success: function (resp) {
            $('#underMaintenanceCount').text(resp.data);
        }
    });
}

$('#btnAdminDashBoard').on('click', function () {
    $('#adminDashboard').css("display", "flex");
    $("#manageRentalRequests_section").css('display', 'none');
    $("#manageVehicle_section").css('display', 'none');
    $("#manageBookings_section").css('display', 'none');
    $("#manageCustomer_section").css('display', 'none');
    $("#manageDriver_section").css('display', 'none');
    $("#viewDriverSchedule_section").css('display', 'none');
    $("#viewCarSchedule_section").css('display', 'none');
    $("#adminProfile_section").css('display', 'none');
    $("#manageRentDetails_section").css('display', 'none');
    $("#managePayment_section").css('display', 'none');
    loadDashBoard();
});

$('#btnRentalRequests').on('click', function () {
    $('#adminDashboard').css("display", "none");
    $("#manageRentalRequests_section").css('display', 'block');
    $("#manageVehicle_section").css('display', 'none');
    $("#manageBookings_section").css('display', 'none');
    $("#manageCustomer_section").css('display', 'none');
    $("#manageDriver_section").css('display', 'none');
    $("#viewDriverSchedule_section").css('display', 'none');
    $("#viewCarSchedule_section").css('display', 'none');
    $("#adminProfile_section").css('display', 'none');
    $("#manageRentDetails_section").css('display', 'none');
    $("#managePayment_section").css('display', 'none');
    loadAllRentalRequests();
});

$('#btnManageVehicle').on('click', function () {
    $('#adminDashboard').css("display", "none");
    $("#manageRentalRequests_section").css('display', 'none');
    $("#manageVehicle_section").css('display', 'block');
    $("#manageBookings_section").css('display', 'none');
    $("#manageCustomer_section").css('display', 'none');
    $("#manageDriver_section").css('display', 'none');
    $("#viewDriverSchedule_section").css('display', 'none');
    $("#viewCarSchedule_section").css('display', 'none');
    $("#adminProfile_section").css('display', 'none');
    $("#manageRentDetails_section").css('display', 'none');
    $("#managePayment_section").css('display', 'none');
    loadAllCars();
});

$('#btnManageBookings').on('click', function () {
    $('#adminDashboard').css("display", "none");
    $("#manageRentalRequests_section").css('display', 'none');
    $("#manageVehicle_section").css('display', 'none');
    $("#manageBookings_section").css('display', 'block');
    $("#manageCustomer_section").css('display', 'none');
    $("#manageDriver_section").css('display', 'none');
    $("#viewDriverSchedule_section").css('display', 'none');
    $("#viewCarSchedule_section").css('display', 'none');
    $("#adminProfile_section").css('display', 'none');
    $("#manageRentDetails_section").css('display', 'none');
    $("#managePayment_section").css('display', 'none');
    loadAllBookings();
});

$('#btnManageCustomer').on('click', function () {
    $('#adminDashboard').css("display", "none");
    $("#manageRentalRequests_section").css('display', 'none');
    $("#manageVehicle_section").css('display', 'none');
    $("#manageBookings_section").css('display', 'none');
    $("#manageCustomer_section").css('display', 'block');
    $("#manageDriver_section").css('display', 'none');
    $("#viewDriverSchedule_section").css('display', 'none');
    $("#viewCarSchedule_section").css('display', 'none');
    $("#adminProfile_section").css('display', 'none');
    $("#manageRentDetails_section").css('display', 'none');
    $("#managePayment_section").css('display', 'none');
    loadAllCustomers();
});

$('#btnManageDriver').on('click', function () {
    $('#adminDashboard').css("display", "none");
    $("#manageRentalRequests_section").css('display', 'none');
    $("#manageVehicle_section").css('display', 'none');
    $("#manageBookings_section").css('display', 'none');
    $("#manageCustomer_section").css('display', 'none');
    $("#manageDriver_section").css('display', 'block');
    $("#viewDriverSchedule_section").css('display', 'none');
    $("#viewCarSchedule_section").css('display', 'none');
    $("#adminProfile_section").css('display', 'none');
    $("#manageRentDetails_section").css('display', 'none');
    $("#managePayment_section").css('display', 'none');
    loadAllDrivers();
});

$('#btnViewDriverSchedule').on('click', function () {
    $('#adminDashboard').css("display", "none");
    $("#manageRentalRequests_section").css('display', 'none');
    $("#manageVehicle_section").css('display', 'none');
    $("#manageBookings_section").css('display', 'none');
    $("#manageCustomer_section").css('display', 'none');
    $("#manageDriver_section").css('display', 'none');
    $("#viewDriverSchedule_section").css('display', 'block');
    $("#viewCarSchedule_section").css('display', 'none');
    $("#adminProfile_section").css('display', 'none');
    $("#manageRentDetails_section").css('display', 'none');
    $("#managePayment_section").css('display', 'none');
    loadAllDriversSchedule();
});

$('#btnViewCarSchedule').on('click', function () {
    $('#adminDashboard').css("display", "none");
    $("#manageRentalRequests_section").css('display', 'none');
    $("#manageVehicle_section").css('display', 'none');
    $("#manageBookings_section").css('display', 'none');
    $("#manageCustomer_section").css('display', 'none');
    $("#manageDriver_section").css('display', 'none');
    $("#viewDriverSchedule_section").css('display', 'none');
    $("#viewCarSchedule_section").css('display', 'block');
    $("#adminProfile_section").css('display', 'none');
    $("#manageRentDetails_section").css('display', 'none');
    $("#managePayment_section").css('display', 'none');
});

$('#btnManagePayments').on('click', function () {
    $('#adminDashboard').css("display", "none");
    $("#manageRentalRequests_section").css('display', 'none');
    $("#manageVehicle_section").css('display', 'none');
    $("#manageBookings_section").css('display', 'none');
    $("#manageCustomer_section").css('display', 'none');
    $("#manageDriver_section").css('display', 'none');
    $("#viewDriverSchedule_section").css('display', 'none');
    $("#viewCarSchedule_section").css('display', 'none');
    $("#adminProfile_section").css('display', 'none');
    $("#manageRentDetails_section").css('display', 'none');
    $("#managePayment_section").css('display', 'block');
    loadAllPayments();
});

$('#btnManageRentDetails').on('click', function () {
    $('#adminDashboard').css("display", "none");
    $("#manageRentalRequests_section").css('display', 'none');
    $("#manageVehicle_section").css('display', 'none');
    $("#manageBookings_section").css('display', 'none');
    $("#manageCustomer_section").css('display', 'none');
    $("#manageDriver_section").css('display', 'none');
    $("#viewDriverSchedule_section").css('display', 'none');
    $("#viewCarSchedule_section").css('display', 'none');
    $("#adminProfile_section").css('display', 'none');
    $("#manageRentDetails_section").css('display', 'block');
    $("#managePayment_section").css('display', 'none');
    loadAllRentDetails();
});

$('#btnAdminProfile').on('click', function () {
    $('#adminDashboard').css("display", "none");
    $("#manageRentalRequests_section").css('display', 'none');
    $("#manageVehicle_section").css('display', 'none');
    $("#manageBookings_section").css('display', 'none');
    $("#manageCustomer_section").css('display', 'none');
    $("#manageDriver_section").css('display', 'none');
    $("#viewDriverSchedule_section").css('display', 'none');
    $("#viewCarSchedule_section").css('display', 'none');
    $("#adminProfile_section").css('display', 'block');
    $("#manageRentDetails_section").css('display', 'none');
    $("#managePayment_section").css('display', 'none');
});

$('#option').on('click', function () {
    if ($('#header').css('left') == '-300px') {
        $('#header').css('left', 0);
    } else {
        $('#header').css('left', '-300px');
    }
});


$(".btnDeny").on('click', function () {
    const {value: email} = Swal.fire({
        title: 'Enter Your Denied Reason',
        input: 'textarea',
        inputLabel: 'Your Message',
        inputPlaceholder: 'Enter your message here',
        showCancelButton: true,
        confirmButtonText: "Send Message",
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')
        } else if (result.isCancelled) {
            Swal.fire('Changes are not saved', '', 'info')
        }
    })
});

function bindRowClickEventsOfTblManageVehicle() {
    $("#tblManageVehicle>tbody>tr").on('click', function () {
        let carId = $(this).children(":eq(0)").text();
        let regNo = $(this).children(":eq(1)").text();
        let brand = $(this).children(":eq(2)").text();
        let type = $(this).children(":eq(3)").text();
        let dailyRate = $(this).children(":eq(4)").text();
        let monthlyRate = $(this).children(":eq(5)").text();
        let dailyMileage = $(this).children(":eq(6)").text();
        let monthlyMileage = $(this).children(":eq(7)").text();
        let color = $(this).children(":eq(8)").text();
        let transmissionType = $(this).children(":eq(9)").text();
        let noOfPassengers = $(this).children(":eq(10)").text();
        let fuelType = $(this).children(":eq(11)").text();
        let pricePerExtraKm = $(this).children(":eq(12)").text();
        let LDW = $(this).children(":eq(13)").text();
        let lastServiceMileage = $(this).children(":eq(14)").text();
        let availabilityType = $(this).children(":eq(15)").text();

        $('#txtCarID').val(carId);
        $('#txtRegNo').val(regNo);
        $('#txtCarBrand').val(brand);
        $('#txtCarType').val(type);
        $('#txtDailyRate').val(dailyRate);
        $('#txtMonthlyRate').val(monthlyRate);
        $('#txtDailyMileage').val(dailyMileage);
        $('#txtMonthlyMileage').val(monthlyMileage);
        $('#txtCarColor').val(color);
        $('#txtTransmissionType').val(transmissionType);
        $('#txtNoOfPassengers').val(noOfPassengers);
        $('#txtFuelType').val(fuelType);
        $('#txtPricePerExtraKm').val(pricePerExtraKm);
        $('#txtLDWPayment').val(LDW);
        $('#txtLastServiceMileage').val(lastServiceMileage);
        $('#txtAvailabilityType').val(availabilityType);

        $.ajax({
            url: baseUrl + "car/getCarImages/" + carId,
            method: "get",
            dataType: "json",
            success: function (resp) {
                $("#carFront_image").attr('src', "../assets/img/uploads/carImages/" + resp.data.front);
                $("#carBack_image").attr('src', "../assets/img/uploads/carImages/" + resp.data.back);
                $("#carSide_image").attr('src', "../assets/img/uploads/carImages/" + resp.data.side);
                $("#carInterior_image").attr('src', "../assets/img/uploads/carImages/" + resp.data.interior);
            }
        });
    });
}

/* =============================================================================== */

/* ---------------------------------------- Manage Vehicle Section ----------------------------------------------- */

loadAllCars();

// Set Front Image
$("#frontCarImageUploader").on('change', function (e) {
    let file = e.target.files;
    if (FileReader && file && file.length) {
        let reader = new FileReader();
        reader.onload = function () {
            $("#carFront_image").attr('src', reader.result);
        }
        reader.readAsDataURL(file[0]);
    }
});

// Set Back Image
$("#backCarImageUploader").on('change', function (e) {
    let file = e.target.files;
    if (FileReader && file && file.length) {
        let reader = new FileReader();
        reader.onload = function () {
            $("#carBack_image").attr('src', reader.result);
        }
        reader.readAsDataURL(file[0]);
    }
});

// Set Side Image
$("#sideCarImageUploader").on('change', function (e) {
    let file = e.target.files;
    if (FileReader && file && file.length) {
        let reader = new FileReader();
        reader.onload = function () {
            $("#carSide_image").attr('src', reader.result);
        }
        reader.readAsDataURL(file[0]);
    }
});

// Set Interior Image
$("#interiorCarImageUploader").on('change', function (e) {
    let file = e.target.files;
    if (FileReader && file && file.length) {
        let reader = new FileReader();
        reader.onload = function () {
            $("#carInterior_image").attr('src', reader.result);
        }
        reader.readAsDataURL(file[0]);
    }
});

// Add Car
$("#btnAddCar").on('click', function () {
    let dailyRate = $("#txtDailyRate").val();
    let monthlyRate = $("#txtMonthlyRate").val();
    let dailyMileage = $("#txtDailyMileage").val();
    let monthlyMileage = $("#txtMonthlyMileage").val();

    let carObject = {
        carId: $("#txtCarID").val(),
        registerNum: $("#txtRegNo").val(),
        brand: $("#txtCarBrand").val(),
        type: $("#txtCarType").val(),
        priceRate: {dailyRate: dailyRate, monthlyRate: monthlyRate},
        freeMileage: {dailyMileage: dailyMileage, monthlyMileage: monthlyMileage},
        color: $("#txtCarColor").val(),
        transmissionType: $("#txtTransmissionType").val(),
        numOfPassengers: $("#txtNoOfPassengers").val(),
        fuelType: $("#txtFuelType").val(),
        pricePerExtraKM: $("#txtPricePerExtraKm").val(),
        lossDamageWaiver: $("#txtLDWPayment").val(),
        lastServiceMileage: $("#txtLastServiceMileage").val(),
        availabilityType: $("#txtAvailabilityType").val(),
    };

    if ($('#frontCarImageUploader')[0].files[0] != null && $('#backCarImageUploader')[0].files[0] != null && $('#sideCarImageUploader')[0].files[0] != null && $('#interiorCarImageUploader')[0].files[0] != null) {
        $.ajax({
            url: baseUrl + "car",
            method: "post",
            data: JSON.stringify(carObject),
            contentType: "application/json",
            success: function (res) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Car has been Successfully Saved',
                    showConfirmButton: false,
                    timer: 1500
                })

                uploadCarImages($("#txtCarID").val());
                loadAllCars();
            },
            error: function (error) {
                alert(JSON.parse(error.responseText).message);
            }
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You Should Provide Car Images, Therefore, Can\'t be Save the Car'
        })
    }
});

// ----------------------------------------------------------
function uploadCarImages(carId) {
    var frontImage = $('#frontCarImageUploader')[0].files[0];
    var frontImageName = carId + "_front-image." + $('#frontCarImageUploader')[0].files[0].name.split(".")[1];

    var backImage = $('#backCarImageUploader')[0].files[0];
    var backImageName = carId + "_back-image." + $('#backCarImageUploader')[0].files[0].name.split(".")[1]

    var sideImage = $('#sideCarImageUploader')[0].files[0];
    var sideImageName = carId + "_side-image." + $('#sideCarImageUploader')[0].files[0].name.split(".")[1];

    var interiorImage = $('#interiorCarImageUploader')[0].files[0];
    var interiorImageName = carId + "_interior-image." + $('#interiorCarImageUploader')[0].files[0].name.split(".")[1];

    var imagesData = new FormData();
    imagesData.append("front", frontImage, frontImageName);
    imagesData.append("back", backImage, backImageName);
    imagesData.append("side", sideImage, sideImageName);
    imagesData.append("interior", interiorImage, interiorImageName);

    $.ajax({
        url: baseUrl + "car/uploadCarImages/" + carId,
        method: "PUT",
        contentType: false,
        processData: false,
        data: imagesData,
        success: function (res) {
            alert("Images Uploaded..!");
        }
    })
}


