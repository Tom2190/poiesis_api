import axios from "axios";

//Token de usuario alexunio28@gmail.com
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im9KSDNLdzUxd2lTd2tZQmlqb0J0IiwiaWF0IjoxNjI0NDkyNjQ2fQ.mZTXSOcJa-yRcHjbE005Visk17CcLkjQaF6_dmSsJJY";

const newPassword = {
    currentPassword: "asdasd",
    newPassword: "123456",
}

try {
    const res = await axios.post("http://localhost:3000/users/password", newPassword, {headers:{"x-access-token":token}});
    console.log(res);
} catch (error) {
    console.log("ERROR!", error);
}