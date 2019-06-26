import React from 'react'
const  UserList = (props) => {
  let {name,avatar} = props.user
  return(
    <div className="col col-sm-4 col-lg-4 col-md-4 col-xl-4 ">
      <div style={{marginBottom:"10px",paddingTop:"45px"}} className="card">
        <figure className="image">
          <img src={avatar} alt="not found"   className="mx-auto  d-block rounded rounded-circle img-thumbnail img-fluid " width="50%" />
        </figure> 
        <div className="card-body">
          <p className="card-title">Hi! my name is {name}</p>
        </div>
      </div>
    </div>
  )
}
export default UserList