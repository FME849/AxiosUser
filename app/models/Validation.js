function Validation() {
    this.apiService = new UserService(); 
    this.checkEmpty = function(value, message, spanID) {
        if(value.trim() != "") {
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        return false;
    }
    this.checkAccount = function(value, message, spanID, userList) {
        var isValid = false;
        isValid = userList.some(function(user) {
            return value == user.taiKhoan;
        });
        if (isValid) {
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
        document.getElementById(spanID).innerHTML = "";
        return true;
    }
    this.checkName = function(value, message, spanID) {
        var reg = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$";
        var pattern = new RegExp(reg);
        if (pattern.test(value)) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        return false;
    }
    this.checkPass = function(value, message, spanID) {
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,8}$/;
        if(pattern.test(value)) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        return false;
    }
    this.checkEmail = function(value, message, spanID) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (pattern.test(value)) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        return false;
    }
    this.checkSelect = function(selectID, message, spanID) {
        if (document.getElementById(selectID).selectedIndex != 0) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        return false;
    }
    this.checkDescription = function(value, message, spanID) {
        var pattern = /^.{1,60}$/;
        if (pattern.test(value)) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        return false;
    }
}