var apiUser = new UserService();

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
            <td>${index}</td>
            <td>${user.taiKhoan}</td>
            <td>${user.matKhau}</td>
            <td>${user.hoTen}</td>
            <td>${user.email}</td>
            <td>${user.ngonNgu}</td>
            <td>${user.loaiND}</td>
            <td>
                <button class="btn btn-info">Edit</button>
                <button class="btn btn-danger">Delete</button>
            </td>
        </tr>`
    });
    getELE("tblDanhSachNguoiDung").innerHTML = userHTML;
}