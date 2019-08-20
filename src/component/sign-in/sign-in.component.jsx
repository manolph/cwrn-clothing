import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', password:'' });
    }

    handleChange = (event) => {
        const { name, value } = event.target; 
        this.setState({ [name]: value })
    }



    render() {
        return(
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form action="" onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        value={this.state.email} 
                        name="email" 
                        label="email"
                        required
                        handleChange={this.handleChange}
                        />
                   
                    <FormInput 
                        type="Password" 
                        value={this.state.password} 
                        name="password" 
                        label="password"
                        required
                        handleChange={this.handleChange}
                        />
                    
                    <CustomButton type="submit">Sign In</CustomButton>  
                </form>
            </div>
        );
    }
}
export default SignIn;