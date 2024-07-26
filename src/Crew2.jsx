import React, { useState, useEffect } from 'react';
import { supabase } from './createClient';
import './crew2.css';

const Crew2 = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ Description: '', Cost: '' });
  const [user2, setUser2] = useState({ id: '', Description: '', Cost: '' });
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const { data } = await supabase.from('finances').select('*');
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
    await supabase.from('finances').insert({ Description: user.Description, Cost: user.Cost });
    fetchUsers();
  }

  async function deleteUser(userId) {
    await supabase.from('finances').delete().eq('id', userId);
    fetchUsers();
  }

  async function displayUser(userId) {
    const selectedUser = users.find(user => user.id === userId);
    setUser2(selectedUser);
  }

  async function updateUser(userId) {
    await supabase
      .from('finances')
      .update({ Description: user2.Description, Cost: user2.Cost })
      .eq('id', userId);
    await fetchUsers();
    // Clear user2 state after update
    setUser2({ id: '', Description: '', Cost: '' });
  }

  function toggleAddForm() {
    setShowAddForm(!showAddForm);
  }

  return (
    <div>
      {/* Plus button to toggle Add Form */}
      <button onClick={toggleAddForm}>+</button>

      {/* Add Form */}
      {showAddForm && (
        <form onSubmit={createUser}>
          <input
            type="text"
            placeholder="Description"
            name="Description"
            value={user.Description}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Cost"
            name="Cost"
            value={user.Cost}
            onChange={handleChange}
          />
          <button type="submit">Create</button>
        </form>
      )}

      {/* Edit Form */}
      {user2.id && (
        <form onSubmit={() => updateUser(user2.id)}>
          <input
            type="text"
            name="Description"
            value={user2.Description}
            onChange={handleChange2}
          />
          <input
            type="number"
            name="Cost"
            value={user2.Cost}
            onChange={handleChange2}
          />
          <button type="submit">Save Changes</button>
        </form>
      )}

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Cost</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.Description}</td>
              <td>{user.Cost}</td>
              <td>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
                <button onClick={() => displayUser(user.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crew2;
