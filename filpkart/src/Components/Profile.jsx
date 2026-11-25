import React from 'react'

function Profile() {
  function click1(){
    alert(name);
  }
   function click2(){
    alert(age);
  }
   function click3(){
    alert(phone);
  }
   function click4(){
    alert(email);
  }
   let sno=1
    let name='kalpana'
    let age=21
    let phone=9876543210
    let email='kalpana@gmail.com'
  return (

    <div>
      <table border="2px solid black">
        <tr>
        <th>S.No</th>
        <th>Details</th>
        <th>Information</th>
        <th>Click</th>
        </tr>
        <tr>
          <td>1</td>
          <td>name</td>
          <td>{name}</td>
          <td><button onClick={click1}>click</button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>age</td>
          <td>{age}</td>
          <td><button onClick={click2}>click</button></td>
        </tr>
           <tr>
          <td>3</td>
          <td>phone</td>
          <td>{phone}</td>
          <td><button onClick={click3}>click</button></td>
        </tr>
           <tr>
          <td>4</td>
          <td>email</td>
          <td>{email}</td>
          <td><button onClick={click4}>click</button></td>
        </tr>
      </table>
    </div>
  )
}

export default Profile
