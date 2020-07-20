import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';
const Demo = (props) =>
{
  return <div class="maindiv_style">
   <h1> hello {props.name}</h1>
   <p> welcome here once again</p>
   </div>
}

export default Demo;
