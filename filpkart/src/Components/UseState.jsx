import React, { useState } from 'react'

function UseState() {
    // let name="kalyan"  --> Normal variable
    //  function change(){
    //     name="Thanuja"
    // }

    //State Variable
    let[name,setname]=useState("kalyan");
    function change(){
        setname("Thanuja");
    }
  return (
    <div>
      <button onClick={change}>change</button>
      <h1>{name}</h1>
    </div>
  )
}

export default UseState
