/*----------------------- Driver Profile -----------------------*/
function setDriverProfileData() {
    $.ajax({
        url: baseUrl + "/driver?driverUsername=" + driverUsername,
        method: "get",
        dataType: "json",
        success: function (resp) {
            if (resp.data != null) {
                let driver = resp.data;
                $.ajax({
                    url: baseUrl + "/user_credentials?username=" + driverUsername,
                    method: "get",
                    dataType: "json",
                    success: function (resp) {
                        let user = resp.data;
                        $('#txtDriverId').val(driver.driverId);
                        $('#txtDriverUsername').val(user.username);
                        $('#txtDriverPassword').val(user.password);
                        $('#txtDriverName').val(driver.name);
                        $('#txtDriverAddress').val(driver.address);
                        $('#txtDriverContact').val(driver.contactNumber);
                        $('#txtDriverNic').val(driver.nic);
                        $('#txtDriverLicenseNo').val(driver.licenseNo);

                        $.ajax({
                            url: baseUrl + "driver/getDriverImages/" + driver.driverId,
                            method: "get",
                            dataType: "json",
                            success: function (resp) {
                                $("#driverLicenseImage").attr('src', "../assets/img/uploads/driverImages/" + resp.data.licenseImage);
                            }
                        });
                    }
                });
            }
        }
    });
}

$('#btnUpdateProfile').on('click', function () {
    updateDriverProfile();
});

function updateDriverProfile() {
    if ($('#txtDriverId').val() != '' && $('#txtDriverUsername').val() != '' && $('#txtDriverPassword').val() != '' && $('#txtDriverName').val() != '' && $('#txtDriverAddress').val() != '' && $('#txtDriverContact').val() != '' && $('#txtDriverNic').val() != '' && $('#txtDriverLicenseNo').val() != '') {
        let driverObject = {
            driverId: $('#txtDriverId').val(),
            name: $("#txtDriverName").val(),
            address: $("#txtDriverAddress").val(),
            contactNumber: $("#txtDriverContact").val(),
            nic: $("#txtDriverNic").val(),
            licenseNo: $("#txtDriverLicenseNo").val()
        };

        let userObject = {
            username: $('#txtDriverUsername').val(),
            password: $('#txtDriverPassword').val(),
            role: "Driver"
        };

        $.ajax({
            url: baseUrl + "user_credentials",
            method: "put",
            data: JSON.stringify(userObject),
            contentType: "application/json",
            dataType: "json",
            success: function (res) {
                alert(res.message);

                $.ajax({
                    url: baseUrl + "driver",
                    method: "put",
                    data: JSON.stringify(driverObject),
                    contentType: "application/json",
                    dataType: "json",
                    success: function (res) {
                        alert(res.message);

                        if ($('#uploadDriverLicenseImage')[0].files[0] != null) {
                            updateDriverLicenseImages(driverObject.driverId);
                        }
                        setDriverProfileData();
                    },

                    error: function (error) {
                        alert(JSON.parse(error.responseText).message);
                    }
                });

            },

            error: function (error) {
                alert(JSON.parse(error.responseText).message);
            }
        });

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Your Profile Fields are Empty..!',
            text: 'All Fields are Shouldn\'t Be Empty'
        })
    }
}

function updateDriverLicenseImages(driverId) {
    if ($('#uploadDriverLicenseImage')[0].files[0] != null) {
        let formData = new FormData();
        var licenseImage = $('#uploadDriverLicenseImage')[0].files[0];
        var licenseImageName = driverId + "_License-image." + $('#uploadDriverLicenseImage')[0].files[0].name.split(".")[1];
        formData.append("licenseImage", licenseImage, licenseImageName);

        $.ajax({
            url: baseUrl + "driver/uploadDriverImages/uploadLicenseImage?driverId=" + driverId,
            method: "PUT",
            contentType: false,
            processData: false,
            data: formData,

            success: function (res) {
                setDriverProfileData();
                alert(res.message);
            },
            error: function (error) {
                alert(JSON.parse(error.responseText).message);
            }
        });
    }
    $('#uploadDriverLicenseImage').val('');
}






