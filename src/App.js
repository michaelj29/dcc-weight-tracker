import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';

function App() {

  const [entries, setEntries] = useState([{weight: 175, date:'11-11-2022'}])

return (
<DisplayEntries userEntries={entries}/>
);

}

export default App;
