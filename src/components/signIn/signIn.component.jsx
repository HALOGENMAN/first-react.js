import React from "react"
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
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
                <h2 className="title">I ALREADY HAVE AN ACCOUNT</h2>
                <span>sign In with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" lable='email' handleChange={this.handleChange} value={this.state.email} required/>
                    <FormInput type="password" name="password" lable='password' handleChange={this.handleChange} value={this.state.password} required/>
                    <CustomButton type="submit">SUBMIT</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;