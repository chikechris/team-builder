import React, { useEffect } from "react";

function Form({
  users,
  handleChange,
  handleSubmit,
  memberToEdit,
  setUsers,
  saveArray
}) {
  useEffect(() => {
    console.log("in useEffect", memberToEdit);
    setUsers({ ...memberToEdit });
  }, [memberToEdit]);

  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "5px",
    margin: "10px",
    fontFamily: "Arial"
    // display: "flex"
  };

  const mystylee = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "5px",
    margin: "10px",
    fontFamily: "Arial",
    display: "flex",
    marginLeft: "39%"
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label style={mystyle}>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={users.name}
          onChange={handleChange}
          style={mystylee}
        />

        <label style={mystyle}>Email Address:</label>

        <input
          type="text"
          name="email"
          placeholder="Enter email"
          value={users.email}
          onChange={handleChange}
          style={mystylee}
        />
        <label style={mystyle}>Role:</label>

        <input
          type="text"
          name="role"
          placeholder="Role"
          value={users.role}
          onChange={handleChange}
          style={mystylee}
        />
        <button onClick={saveArray}>Add New Member!</button>
      </form>
    </div>
  );
}

export default Form;
