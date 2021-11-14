var apiUser = new UserService();

function getELE(id) {
    return document.getElementById(id);
}

function getListUser() {
    apiUser
        .getUserApi()
        .then(function(userObj) {
            showListUser(userObj.data);
        })
        .catch(function(err) {
            console.log(err);
        })
}
getListUser();

function showListUser(userArr) {
    var userHTML = "";
    userArr.forEach(function(user, index) {
        if (user.loaiND == "GV") {
            userHTML+= `
            <div class="col-12 col-sm-6 col-lg-3">
                <div class="staff__card">
                    <div class="staff__img">
                        <img src="./Home/img/${user.hinhAnh}">
                    </div>
                    <div class="staff__info">
                        <p class="staff__country">${user.ngonNgu}</p>
                        <h3 class="staff__name">${user.hoTen}</h3>
                        <p class="staff__quote">${user.moTa}</p>
                    </div>
                </div>
            </div>
            `
        };
    });
    getELE("staffList").innerHTML = userHTML;
}