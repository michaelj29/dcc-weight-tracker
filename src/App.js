import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';

function App() {

  const [entries, setEntries] = useState([{weight: 175, date:'11-11-2022'}])

  function addNewEntry(entry){
    let tempEntries = [...entries, entry]
    setEntries(tempEntries)

  }

return (
  <div>
    <DisplayEntries userEntries={entries}/>
    <AddEntryForm addNewEntryProperty={addNewEntry} />
  </div>
);

}

export default App;
