import axios from "axios";
const endPoints = "https://localhost:7078/api/ToDo";

const getAll = async () => {
  try {
    const response = await axios.get(`${endPoints}/GetToDo`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const addNewModel = async (newName, newDes) => {
  try {
    const response = await axios.post(
      `${endPoints}/AddToDo?name=${newName}&des=${newDes}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const removeModel = async (id) => {
  try {
    const response = await axios.delete(`${endPoints}/DeleteToDo?id=${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const updateModel = async (id, name, des) => {
  try {
    const response = await axios.put(`${endPoints}/UpdateToDo?id=${id}&name=${name}&des=${des}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export { getAll, addNewModel, removeModel, updateModel };
