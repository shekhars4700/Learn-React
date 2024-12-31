import {Component} from "react";

class UserClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            count :0
        }
    }

    render(){
        return (
            <div className="User-Card">
                <img src = {this.state.profileImageURL}></img>
                <h2>Name: {this.state.name}</h2>
                <h3>Location: {this.state.location}</h3>
            </div>
        )
    }
    
    async componentDidMount(){
        const githubUserDataURL = "https://api.github.com/users/shekhars4700"
        const apiResult = await fetch(githubUserDataURL);
        const gitUserData = await apiResult.json(); 
        this.setState({
            name :gitUserData.name,
            location :gitUserData.location, 
            profileImageURL:gitUserData.avatar_url
        })
    }


}

export default UserClass;