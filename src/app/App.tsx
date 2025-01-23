import React from 'react';
import './App.css';
import {MenuButton} from "../common/components/buttons/MenuButton";
import {Input} from "../common/components/inputs/AddItemInput";
import {Header} from "../common/components/header/Header";
import {EditSpan} from "../common/components/editSpan/EditSpan";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MenuButton>dece</MenuButton>
        decevevevevy
        <Input addtask={()=>{}} name={'dff'}></Input>
        <EditSpan onChange={()=> {}} title={"dcvd"}></EditSpan>
    </div>
  );
}

export default App;
