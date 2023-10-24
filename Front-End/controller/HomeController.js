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