import React from "react"
import "./signIn.styles.scss"


class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email:"",
            password:"",
        }
    }

    handleSubmit = event =>{
        event.preventDefault()
        this.setState({
            email:"",
            password:"",
        })
    }

    handleChange = event=>{
        const {name,value} = event.target;
        this.setState({
            [name]:value
        })
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I ALREADY HAVE AN ACCOUNT</h2>
                <span>sign In with yoye email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" name="email" onChange={this.handleChange} value={this.state.email} required/>
                    <label htmlFor="">email</label><br/>
                    <input type="password" password="password" onChange={this.handleChange} value={this.state.password} required/>
                    <label htmlFor="">password</label><br/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

export default SignIn;