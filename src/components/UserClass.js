
//creating component using class based component

import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        const {name,location,id} = this.props; 

        this.state = {
            userInfo : {
                name : name,
                location : location,
                avtar_url : "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
            },
        }
        
    }

    async componentDidMount(){  

        const id = this.props.id;
        const data = await fetch(`https://api.github.com/users/${id}`);
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo : json,
        });

        
    }

    render() {


        const {avatar_url,name,location,login} = this.state.userInfo;
        
        return(
            <div className="userClass">
                <img src={avatar_url} className="gitImage"></img>
                <h3>Name : {name}</h3>
                <h3>Location : {location}</h3>
                <h3>Github : {login}</h3>
            </div>
        )
    }
}

export default UserClass;