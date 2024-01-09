import axios from "axios";
const endPoints = "https://localhost:7078/api/User";

const loginUser = async (username, password) => {
    try {
      const response = await axios.post(
        `${endPoints}/User/Login?username=${username}&password=${password}`,
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

export{
    loginUser
}