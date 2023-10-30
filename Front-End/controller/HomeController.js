// User Login
$("#btnUserLogin").on('click', function () {
    let user = null;
    if ($("#txtUserName").val() != '' && $("#txtUserPassword").val() != '') {
        $.ajax({
            url: baseUrl + "user_credentials/verifyLogin?username=" + $("#txtUserName").val() + "&password=" + $("#txtUserPassword").val(),
            method: "get",
            dataType: "json",
            async: false,
            success: function (res) {
                user = res.data;
                $("#txtUserName").val("");
                $("#txtUserPassword").val("");

                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: res.message,
                    showConfirmButton: false,
                    async: false,
                    timer: 1500
                })
            },

            error: function (error) {
                $("#txtUserName").val("");
                $("#txtUserPassword").val("");

                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: JSON.parse(error.responseText).message
                })
            }
        });

        if (user != null) {
            if (user.role == "Admin") {
                sessionStorage.setItem("userData", user);

                $("#btnUserLogin > a").attr("target", "_self");
                $("#btnUserLogin > a").attr("href", "view/adminPage.html?" + user.username);

            } else if (user.role == "Driver") {
                sessionStorage.setItem("userData", user);

                $("#btnUserLogin > a").attr("target", "_self");
                $("#btnUserLogin > a").attr("href", "view/driverPage.html?" + user.username);
            }
            if (user.role == "Customer") {
                sessionStorage.setItem("userData", user);

                $("#btnUserLogin > a").attr("target", "_self");
                $("#btnUserLogin > a").attr("href", "view/customerPage.html?" + user.username);
            }
        }
    } else {
        $("#txtUserName").val("");
        $("#txtUserPassword").val("");

        Swal.fire({
            icon: 'error',
            title: 'Login Fields Are Empty..!',
            text: 'Please Be Aware to Enter Username and Password'
        })
    }
});

// Reset Password Function
$("#btnResetPassword").on('click', function () {
    if ($("#txtResetUsername").val() != '' && $("#txtResetNewPassword").val() != '' && $("#txtResetConfirmPassword").val() != '') {
        if ($("#txtResetNewPassword").val() === $("#txtResetConfirmPassword").val()) {
            let resetUserObject = {
                username: $("#txtResetUsername").val(),
                password: $("#txtResetConfirmPassword").val()
            };

            $.ajax({
                url: baseUrl + "user_credentials/resetPassword",
                method: "put",
                data: JSON.stringify(resetUserObject),
                contentType: "application/json",
                dataType: "json",
                success: function (res) {
                    $("#txtResetUsername").val("");
                    $("#txtResetNewPassword").val("");
                    $("#txtResetConfirmPassword").val("");

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: res.message,
                        showConfirmButton: false,
                        timer: 1500
                    })
                },

                error: function (error) {
                    $("#txtResetUsername").val("");
                    $("#txtResetNewPassword").val("");
                    $("#txtResetConfirmPassword").val("");

                    Swal.fire({
                        icon: 'error',
                        title: 'Password Reset Failed',
                        text: JSON.parse(error.responseText).message
                    })
                }
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Execution',
                text: 'Password Fields doesn\'t Match, Please enter the Password Correctly..!'
            })
        }
    } else {
        $("#txtResetUsername").val("");
        $("#txtResetNewPassword").val("");
        $("#txtResetConfirmPassword").val("");

        Swal.fire({
            icon: 'error',
            title: 'Reset Password Fields Are Empty..!',
            text: 'Please Be Aware to Fill all the Fields'
        })
    }
});

$(".cars_btn").on('click', function () {
    Swal.fire(
        'Want to Book a Car Now ?',
        'You Must Register or Login First',
        'question'
    )
});

$('#txtSortingType').on('change', function () {
    if ($('#txtSortingType') != null) {
        if ($('#txtSortingType').val() === "Type") {
            $('#vehicleTypeRow').css('display', 'flex');
            $('#brandRow').css('display', 'none');
            $('#fuelTypeRow').css('display', 'none');
            $('#transmissionTypeRow').css('display', 'none');
            $('#priceRow').css('display', 'none');
            $('#NoOfPassengersRow').css('display', 'none');

        } else if ($('#txtSortingType').val() === "Brand") {
            $('#vehicleTypeRow').css('display', 'none');
            $('#brandRow').css('display', 'flex');
            $('#fuelTypeRow').css('display', 'none');
            $('#transmissionTypeRow').css('display', 'none');
            $('#priceRow').css('display', 'none');
            $('#NoOfPassengersRow').css('display', 'none');

        } else if ($('#txtSortingType').val() === "Fuel Type") {
            $('#vehicleTypeRow').css('display', 'none');
            $('#brandRow').css('display', 'none');
            $('#fuelTypeRow').css('display', 'flex');
            $('#transmissionTypeRow').css('display', 'none');
            $('#priceRow').css('display', 'none');
            $('#NoOfPassengersRow').css('display', 'none');

        } else if ($('#txtSortingType').val() === "Transmission Type") {
            $('#vehicleTypeRow').css('display', 'none');
            $('#brandRow').css('display', 'none');
            $('#fuelTypeRow').css('display', 'none');
            $('#transmissionTypeRow').css('display', 'flex');
            $('#priceRow').css('display', 'none');
            $('#NoOfPassengersRow').css('display', 'none');

        } else if ($('#txtSortingType').val() === "Price") {
            $('#vehicleTypeRow').css('display', 'none');
            $('#brandRow').css('display', 'none');
            $('#fuelTypeRow').css('display', 'none');
            $('#transmissionTypeRow').css('display', 'none');
            $('#priceRow').css('display', 'flex');
            $('#NoOfPassengersRow').css('display', 'none');

        } else {
            $('#vehicleTypeRow').css('display', 'none');
            $('#brandRow').css('display', 'none');
            $('#fuelTypeRow').css('display', 'none');
            $('#transmissionTypeRow').css('display', 'none');
            $('#priceRow').css('display', 'none');
            $('#NoOfPassengersRow').css('display', 'flex');

        }
    }
});
