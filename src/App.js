import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Users from "./Components/Users";
import AddUserForm from "./Components/AddUserForm";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Ahmed Zaky",
          email: "ahmed@email.com",
          gen: 12,
          id: "join",
        },
        {
          name: "Priscilla Lebron",
          email: "ella@email.com",
          gen: 1,
          id: "joinr",
        },
        {
          name: "Seyram",
          email: "seyram@email.com",
          gen: 15,
          id: "join2",
        },
      ],
    };
  }
  addNewUser = (user) => {
    user.id = Math.random().toString();
    this.setState({
      users: [...this.state.users, user],
    });
  };
  deleteUser = (id) => {
    let undeletedUsers = this.state.users.filter((user) => user.id !== id);
    this.setState({
      users: undeletedUsers,
    });
  };
  editUser = (id, updatedUser) => {
    this.setState({
      users: this.state.users.map((user) =>
        user.id === id ? updatedUser : user
      ),
    });
  };
  render() {
    return (
      <>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4">
              <h2>Add Users</h2>
              <br />
              <AddUserForm addUser={this.addNewUser} />
            </Col>
            <Col>
              <h3>All Codetrain Tutors</h3>
              <br />
              <Users
                usersData={this.state.users}
                deleteUser={this.deleteUser}
                editUser={this.editUser}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
