import React from 'react'
import { useForm } from 'react-hook-form';
import { getFirebase } from 'react-redux-firebase';


export interface SignUpProps {

}

const SignUp: React.FC<SignUpProps> = (props) => {
    console.log("props", props)

    const { register, handleSubmit, watch, errors } = useForm();
    const firebase = getFirebase();

    const onSignUpSubmit = async(data: any) => {
        console.log("data sub", data);
        const datafire = await firebase.auth().createUserWithEmailAndPassword(data.email , data.password)
        console.log("onSignUpSubmit -> datafire", datafire)
        // firebase.createUser(data)
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSignUpSubmit)} className="white">
                <h5 className="grey-text text-darken-3">
                    Sign Up
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
                    <label htmlFor="firstname">First Name</label>
                    <input name="firstname" type='text' id="firstname" ref={register({ required: true })} />
                    {errors.firstname && <span>This field is required</span>}
                </div>

                <div className="input-field">
                    <label htmlFor="lastname">Last Name</label>
                    <input name="lastname" type='text' id="lastname" ref={register({ required: true })} />
                    {errors.lastname && <span>This field is required</span>}
                </div>


                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">
                        Sign up
                </button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;