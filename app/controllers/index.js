var apiUser = new UserService();
var validateUser = new Validation();

function getELE(id) {
    return document.getElementById(id);
}

function getListUser() {
    apiUser
        .getUserApi()
        .then(function(userObj) {
            showListAllUser(userObj.data);
        })
        .catch(function(err) {
            console.log(err);
        })
}
getListUser();

function showListAllUser(userArr) {
    var userHTML = "";
    userArr.forEach(function(user, index) {
        userHTML+= `<tr>
            <td>${index + 1}</td>
            <td>${user.taiKhoan}</td>
            <td>${user.matKhau}</td>
            <td>${user.hoTen}</td>
            <td>${user.email}</td>
            <td>${user.ngonNgu}</td>
            <td>${user.loaiND}</td>
            <td>
                <button class="btn btn-info" onclick="editBtn('${user.id}')" data-toggle="modal" data-target="#myModal">Edit</button>
                <button class="btn btn-danger" onclick="deleteUser('${user.id}')">Delete</button>
            </td>
        </tr>`
    });
    getELE("tblDanhSachNguoiDung").innerHTML = userHTML;
}

function getUserInfo() {
    var user = new User();
    user.taiKhoan = getELE("TaiKhoan").value;
    user.hoTen = getELE("HoTen").value;
    user.matKhau = getELE("MatKhau").value;
    user.email = getELE("Email").value;
    user.hinhAnh = getELE("HinhAnh").value;
    user.loaiND = getELE("loaiNguoiDung").value;
    user.ngonNgu = getELE("loaiNgonNgu").value;
    user.moTa = getELE("MoTa").value;
    return user;
}
function restoreUserInfo(user) {
    getELE("TaiKhoan").value = user.taiKhoan;
    getELE("HoTen").value = user.hoTen;
    getELE("MatKhau").value = user.matKhau;
    getELE("Email").value = user.email;
    getELE("HinhAnh").value = user.hinhAnh;
    getELE("loaiNguoiDung").value = user.loaiND;
    getELE("loaiNgonNgu").value = user.ngonNgu;
    getELE("MoTa").value = user.moTa;
}

function validate(user) {
    var isValid = true;
    isValid &= validateUser.checkEmpty(user.hoTen, "Họ tên người dùng không được để trống", "spanHoTenUser") && validateUser.checkName(user.hoTen, "Tên người dùng không hợp lệ", "spanHoTenUser");
    isValid &= validateUser.checkEmpty(user.matKhau, "Mật khẩu không được để trống", "spanMatKhauUser") && validateUser.checkPass(user.matKhau, "Mật khẩu không hợp lệ", "spanMatKhauUser");
    isValid &= validateUser.checkEmpty(user.email, "Email không được để trống", "spanEmailUser") && validateUser.checkEmail(user.email, "Email không hợp lệ", "spanEmailUser");
    isValid &= validateUser.checkEmpty(user.hinhAnh, "Hình người dùng không được để trống", "spanHinhAnhUser");
    isValid &= validateUser.checkSelect("loaiNguoiDung", "Loại người dùng không được để trống", "spanLoaiUser");
    isValid &= validateUser.checkSelect("loaiNgonNgu", "Loại ngôn ngữ không được để trống", "spanNgonNguUser");
    isValid &= validateUser.checkEmpty(user.moTa, "Mô tả không được để trống", "spanMoTaUser") && validateUser.checkDescription(user.moTa, "Mô tả không được vượt quá 60 ký tự", "spanMoTaUser");
    return isValid;
}

function addUser() {
    apiUser
        .getUserApi()
        .then(function(userObj) {
            var user = getUserInfo();
            user.id = "";
            var isValid = validate(user);
            isValid &= validateUser.checkEmpty(user.taiKhoan, "Tài khoản người dùng không được để trống", "spanTaiKhoanUser") && validateUser.checkAccount(user.taiKhoan, "Tài khoản người dùng đã tồn tại", "spanTaiKhoanUser", userObj.data);
            if (isValid) {
                apiUser
                    .addUserApi(user)
                    .then(function(userObj) {
                        getListUser();
                    })
                    .catch(function(err) {
                        console.log(err);
                    })
            }
        })
        .catch(function(err) {
            console.log(err); 
        })
}

function deleteUser(id) {
    apiUser
        .deleteUserApi(id)
        .then(function(userObj) {
            getListUser();
        })
        .catch(function(err) {
            console.log(err);
        })
}

function editUser(id) {
    apiUser
        .getUserApi()
        .then(function(userObj) {
            var user = getUserInfo();
            var isValid = validate(user, userObj.data);
            if (isValid) {
                apiUser
                    .getOneUserApi(id)
                    .then(function(oneUserObj) {
                        user.id = oneUserObj.data.id;
                        apiUser
                            .editUserApi(user.id, user)
                            .then(function(oneUserObj) {
                                getListUser();
                            })
                            .catch(function(err) {
                                console.log(err);
                            })
                    })
            };
        })
}

function addBtn() {
    document.querySelector(".modal-title").innerHTML = "Thêm người dùng mới";
    document.querySelector(".modal-footer").innerHTML = `<button class="btn btn-success" onclick="addUser()">Add User</button>`;
}

function editBtn(userId) {
    apiUser
        .getOneUserApi(userId)
        .then(function(oneUserObj) {
            restoreUserInfo(oneUserObj.data);
            document.querySelector(".modal-title").innerHTML = "Cập nhật thông tin người dùng";
            document.querySelector(".modal-footer").innerHTML = `<button class="btn btn-success" onclick="editUser('${userId}')">Update User</button>`;
        })
        .catch(function(err) {
            console.log(err);
        })
}