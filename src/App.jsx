import React,{useState} from 'react';
import ToDolist from './ToDolist';

const App=()=>{

const[inputList, setInputList]= useState("");
const[Items, setItems]=useState([]);

const itemEvent=(event)=>{
    setInputList(event.target.value);
 
  


}
const listofItems=()=>{
    //console.log("clicked");
    setItems((oldItems) => {
        return[...oldItems, inputList];
      
    });
    
    setInputList(" ");
};

const deleteItems=(id)=>{
    console.log("deleted");

    setItems((oldItems)=>{
return oldItems.filter((arrElem, index)=>{
return index !== id;
})
    })
};
    return(
<>
<div className="main_div">
<div className="center_div">
<br />
<h1>Todo List</h1>
<br />
<input type="text" placeholder="Add a Item" onChange={itemEvent} value={inputList}/>
<button onClick={listofItems}>+</button>
<ol>


{Items.map((itemval, index)=>{
  return  <ToDolist text={itemval} key={index} id={index} onSelect={deleteItems} />;
})}


</ol>
</div></div>
</>
    );
};

export default App;