import React from 'react'
const Avalist = (props) =>
{
  return(
      <div className="avastyle ma4 bg-light-purple dib pa3 grow tc">
      <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt = "Ava"/>
<h1 className="">{props.name}</h1>
<p>{props.work}</p>
</div>
  )
}
export default Avalist;
