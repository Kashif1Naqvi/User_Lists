import React, { Component } from 'react'
import UserList from './UserList'
export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    
    async componentDidMount(){
        let res = await fetch("http://5d125e7f84e9060014576c42.mockapi.io/api/users/users_list",this.state)
        let data = await res.json()
        if(res.status===200){
            this.setState({
                users:data
            })
        }
    }

    render() {
        const userList = this.state.users.map((user)=><UserList  user={user} key={user.id} showState={this.state.show} handleShow={this.show} />)
        return (
            <div className="container">
                <header>
                    <h1 className="h1 text-center text-muted" >User list</h1>
                </header>
                <div className="row" >
                    {userList}
                </div>
            </div>  
        )
    }
}
