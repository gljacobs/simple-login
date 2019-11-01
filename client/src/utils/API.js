import axios from "axios";

export default {
    // Saves a user to the database
    createUser: function (name, email, password) {
        return axios.post("/api/users", { name: name, email: email, password: password });
    },
    // Deletes the user with the given id
    deleteUser: function (id) {
        return axios.delete("/api/users/" + id);
    },
    // Get the user from the database
    getUser: function (id) {
        return axios.get("/api/users/" + id).then(result => result.data)
    },
    // Get users from the database
    getUsers: function () {
        return axios.get("/api/users").then(result => result.data)
    },
}