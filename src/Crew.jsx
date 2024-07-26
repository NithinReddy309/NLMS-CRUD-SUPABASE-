import React, { useState, useEffect } from 'react';
import { supabase } from './createClient';
import './crew.css';

const Crew = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ Name: '', Age: '', On_ship: '' });
  const [user2, setUser2] = useState({ id: '', Name: '', Age: '', On_ship: '' });
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const { data } = await supabase.from('crew_table').select('*');
    setUsers(data);
  }

  function handleChange(event) {
    setUser(prevFormData => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }));
  }

  function handleChange2(event) {
    setUser2(prevFormData => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }));
  }

  async function createUser() {
    await supabase.from('crew_table').insert({ Name: user.Name, Age: user.Age, On_ship: user.On_ship });
    fetchUsers();
  }

  async function deleteUser(userId) {
    await supabase.from('crew_table').delete().eq('id', userId);
    fetchUsers();
  }

  function displayUser(userId) {
    users.forEach(user => {
      if (user.id === userId) {
        setUser2({ id: user.id, Name: user.Name, Age: user.Age, On_ship: user.On_ship });
      }
    });
  }

  async function updateUser(userId) {
    await supabase
      .from('crew_table')
      .update({ id: user2.id, Name: user2.Name, Age: user2.Age, On_ship: user2.On_ship })
      .eq('id', userId);
    await fetchUsers();
  }

  function toggleAddForm() {
    setShowAddForm(!showAddForm);
  }

  return (
    <div className="crew-container">
      {/* Plus button to toggle Add Form */}
      <button onClick={toggleAddForm}>+</button>

      {/* Add Form */}
      {showAddForm && (
        <form className="crew-form" onSubmit={createUser}>
          <input type="text" placeholder="Name" name="Name" onChange={handleChange} />
          <input type="number" placeholder="Age" name="Age" onChange={handleChange} />
          <input type="text" placeholder="On_ship" name="On_ship" onChange={handleChange} />
          <button type="submit">Create</button>
        </form>
      )}

      
      {/* Render Cards */}
      <div className="crew-cards-container">
        {users.map(user => (
          <div key={user.id} className="crew-card">
            <div className="crew-card-header">ID: {user.id}</div>
            <div className="crew-card-content">Name: {user.Name}</div>
            <div className="crew-card-content">Age: {user.Age}</div>
            <div className="crew-card-content">On_ship: {user.On_ship}</div>
            <div className="crew-action-buttons">
              <button onClick={() => deleteUser(user.id)}>Delete</button>
              <button onClick={() => displayUser(user.id)}>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crew;
