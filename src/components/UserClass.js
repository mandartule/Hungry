
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
        
        return (
            <div className="flex flex-col items-center justify-center bg-white p-4 rounded shadow-lg space-y-4">
                <img src={avatar_url} className="w-2/5 rounded-full" alt="User avatar" />
                <h3 className="text-xl font-bold">Name: {name}</h3>
                <h3 className="text-lg">Location: {location}</h3>
                <h3 className="text-lg"><a href={`https://www.github.com/${login}`} className="text-blue-500 hover:underline">Github: {login}</a></h3>
                <h3 className="text-lg"><a href={`https://www.linkedin.com/in/mandartule/`} className="text-blue-500 hover:underline">LinkedIn: {login}</a></h3>
            </div>
        )
    }
}

export default UserClass;