import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { getFirebase } from 'react-redux-firebase';

export interface SignInProps {
    firebase: any
}



const SignIn: React.FC<SignInProps> = (props) => {

    const { register, handleSubmit, watch, errors } = useForm();
    const firebase = getFirebase()

    const onLoginSubmit = async (data: any) => {
        // console.log("user", user)
        const dataLogin = await firebase.auth().signInWithEmailAndPassword(data.email , data.password)
        console.log("dataLogin", dataLogin);
    }

    // console.log("password", password)
    // const handleSubmit = (event: FormEvent) => {
    //     console.log("Submited");
    //     event.preventDefault()
    // }
    return (
        <div className="container">
            <form onSubmit={handleSubmit(onLoginSubmit)} className="white">
                <h5 className="grey-text text-darken-3">
                    Sign In
                </h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input name="email" type='email' id="email" ref={register({ required: true })} />
                    {errors.email && <span>This field is required</span>}

                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input name="password" type='password' id="password" ref={register({ required: true })} />
                    {errors.password && <span>This field is required</span>}

                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    console.log("firebase -> state", state.firebase)
    return {
        firebase: state.firebase
    }
}

export default connect(mapStateToProps)(SignIn);