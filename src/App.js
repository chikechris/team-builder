import React, { useState } from "react";

import Form from "./component/Form";

import "./App.css";

function App() {
  const [users, setUsers] = useState({
    name: "",
    email: "",
    role: ""
  });

  const [memberArray, setMemberArray] = useState([]);

  const [memberToEdit, setMemberToEdit] = useState({});

  const handleChange = e => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    editMember();
    setUsers({ name: "", email: "", role: "" });
  };

  const handleMemberToEdit = member => {
    setMemberToEdit({ ...member });
  };

  function editMember() {
    setMemberArray([
      ...memberArray.filter(member => member.name !== users.name),
      users
    ]);
  }

  function saveArray() {
    if (users.name !== "") {
      setMemberArray([...memberArray, users]);
    }
  }

  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

  return (
    <div className="App">
      <h1 style={mystyle}>Add Team Members: </h1>
      <Form
        memberArray={memberArray}
        users={users}
        setUsers={setUsers}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        saveArray={saveArray}
        memberToEdit={memberToEdit}
        saveArray={saveArray}
      />

      <div>
        {memberArray.map((member, index) => (
          <div key={index}>
            <h3>Name: {member.name}</h3>
            <h4>Role: {member.role}</h4>
            <p>Email: {member.email}</p>
            <button
              style={{ backgroundColor: "lightblue" }}
              onClick={() => handleMemberToEdit(member)}
            >
              Edit User!
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
