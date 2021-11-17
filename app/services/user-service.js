function UserService() {
    this.getUserApi = function() {
        return axios({
            url: "https://6183cac591d76c00172d1b4f.mockapi.io/api/GiaoVien/",
            method: "GET",
        });
    };
    this.getOneUserApi = function(id) {
        return axios({
            url: `https://6183cac591d76c00172d1b4f.mockapi.io/api/GiaoVien/${id}`,
            method: "GET",
        })
    }
    this.deleteUserApi = function(id) {
        return axios({
            url: `https://6183cac591d76c00172d1b4f.mockapi.io/api/GiaoVien/${id}`,
            method: "DELETE",
        })
    }
    this.addUserApi = function(user) {
        return axios({
            url: "https://6183cac591d76c00172d1b4f.mockapi.io/api/GiaoVien/",
            method: "POST",
            data: user,
        })
    } 
    this.editUserApi = function(id, user) {
        return axios({
            url: `https://6183cac591d76c00172d1b4f.mockapi.io/api/GiaoVien/${id}`,
            method: "PUT",
            data: user,
        })
    }
}