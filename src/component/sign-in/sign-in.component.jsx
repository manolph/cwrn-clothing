import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';


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
        const { email, password } = this.state;
        try {
            auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.error(error);
        }
    }

    handleChange = async (event) => {
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
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>  
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>  
                    </div>
                </form>
            </div>
        );
    }
}
export default SignIn;