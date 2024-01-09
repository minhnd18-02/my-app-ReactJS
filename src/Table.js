import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Swal from "sweetalert2";
import {
  addNewModel,
  getAll,
  removeModel,
    updateModel,
} from "./Services/ToDoService.service";
import { Nav } from "react-bootstrap";

function BasicTable() {
  const [todos, setTodos] = useState([]);
  const [newName, setName] = useState("");
  const [newDess, setDess] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const todoData = await getAll();
      setTodos(todoData);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const handleAddBtn = async () => {
    try {
      await addNewModel(newName, newDess);
      const { isConfirmed } = await Swal.fire({
        icon: "success",
        title: "Task add successfully!",
        showConfirmButton: true,
        confirmButtonText: "OK",
        showCancelButton: false,
      });
      if (isConfirmed) {
        await fetchTodos();
        setName("");
        setDess("");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleRemoveBtn = async (id) => {
    try {
      await removeModel(id);

      const { isConfirmed } = await Swal.fire({
        icon: "success",
        title: "Task deleted successfully!",
        showConfirmButton: true,
        confirmButtonText: "OK",
        showCancelButton: false,
      });

      if (isConfirmed) {
        await fetchTodos();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditBtn = async (todoId, todoName, todoDes) => {
    try {
      await updateModel(todoId, todoName, todoDes);
      const { isConfirmed } = await Swal.fire({
        icon: "success",
        title: "Task updated successfully!",
        showConfirmButton: true,
        confirmButtonText: "OK",
        showCancelButton: false,
      });
      if (isConfirmed) {
        await fetchTodos();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="center-content">
        <Form className="form-css">
          <div
            style={{
              margin: "1rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Add new ToDoTasks
          </div>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalEmail"
            style={{ margin: "1rem" }}
          >
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Name"
                value={newName}
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
            style={{ margin: "1rem" }}
          >
            <Form.Label column sm={2}>
              Description
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Description"
                value={newDess}
                onChange={(e) => setDess(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" style={{ margin: "1rem" }}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button onClick={() => handleAddBtn()}>Add new</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th style={{ width: "1%" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.name}</td>
              <td>{todo.description}</td>
              <td>{todo.status ? "Active" : "Inactive"}</td>
              <td style={{ whiteSpace: "nowrap" }}>
                <Button
                  variant="outline-danger"
                  onClick={() => handleRemoveBtn(todo.id)}
                >
                  Delete
                </Button>
                <Button onClick={() => handleEditBtn(todo.id)}>Edit</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Nav defaultActiveKey="/home" className="flex-column" >
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
    </>
  );
}

export default BasicTable;
