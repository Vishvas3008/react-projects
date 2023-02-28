import React,{useState} from "react";

const AddingUser = () => {
    const userData=[]
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const[newData,setNewData]=useState('')
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(name,age);
    setNewData((prevData)=>{
        return [[name,age],...prevData]
    })

  };
  console.log(newData);
  
  const nameChange = (e) => {
    setName(e.target.value)
    // console.log(e.target.value);
  };
  const ageChange = (e) => {
    setAge(e.target.value)
    // console.log(e.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <label>Name</label>
      <input type="text" onChange={nameChange}></input>
      <label>Age</label>
      <input type="number"onChange={ageChange}></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddingUser;
