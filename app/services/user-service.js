function UserService() {
    this.getUserApi = function() {
        return axios({
            url: "https://6183cac591d76c00172d1b4f.mockapi.io/api/GiaoVien/",
            method: "GET",
        });
    };
}