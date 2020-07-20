import React from 'react'
import './Ava.css';
import Avalist from './Avalist'
import 'tachyons';
const Ava =(props)=>
{ const avalistarray=[
  {
    id:1,
    name:"yash",
    work:"athlete"
  },
  {
    id:2,
    name:"jacksparrow",
    work:"athlete1"
  },
  {
    id:3,
    name:"iron man",
    work:"athlete1"
  },
  {
    id:4,
    name:"hulk",
    work:"athlete1"
  }
]
const arraycard=avalistarray.map((Avacard,i)=>{
  return <Avalist id={avalistarray[i].id} name={avalistarray[i].name} work={avalistarray[i].work}/>
})
  return(<div className="mainpage">
    <h1> welcome to ava world </h1>
    {arraycard}
<button> accept </button>
</div>
)
}

export default Ava;
