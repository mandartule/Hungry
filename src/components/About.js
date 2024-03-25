import UserClass from "./UserClass";

const About = () => {

    return (
        <div> 
            <h1>About</h1>
            <p>This is the about page of Namasate REACT 🚀</p>
            <UserClass name={"Mandar"} location={"Nagpur"} id={"mandartule"} />
            <UserClass name={"Sahil"} location={"Nagpur"} id={"Sahil-Sukhdeve12"}/>

        </div>
    )
};

export default About;