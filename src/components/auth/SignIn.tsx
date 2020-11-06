import React from 'react';
import { useForm } from 'react-hook-form';

export interface SignInProps {

}



const SignIn: React.FC<SignInProps> = () => {
 
    const { register, handleSubmit, watch, errors } = useForm();

    const onLoginSubmit = (data: any) => {
        console.log("data sub" , data);
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
                    <input name="email" type='email' id="email"  ref={register({ required: true })} />
                    {errors.email && <span>This field is required</span>}

                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input name="password" type='password' id="password"  ref={register({ required: true })} />
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

export default SignIn;