import React, { useState } from 'react';



function Form(props) {

  const [user, setUser] = useState({ name: '', email: '', role: ''})
  return (
    <div className='form-container'>
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Name:
                    <input
            type="text"
            name="name"
            value={teamMembers.name}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Email:
                    <input
            type="text"
            name="email"
            value={teamMembers.email}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Role:
                    <input
            type="text"
            name="role"
            value={teamMembers.role}
            onChange={event => handleChange(event)}
          />
        </label>
    
      </form>
    </div>
  );
}

export default Form;