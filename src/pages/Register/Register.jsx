import React, { use } from 'react';
import { useLottie } from 'lottie-react';
import registerLottie from '../../assets/lottifile/Registration animation.json'
import { AuthContexts } from '../../contexts/AuthContexts/AuthContexts';
import SocialLogin from '../Shared/SocialLogin';

const Register = () => {
  const {createUser} = use(AuthContexts);
   const options = {
     animationData: registerLottie,
     loop: true,
   };
   const {View} = useLottie(options);

   const formHandelar = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email,password);
    createUser(email, password)
    .then(result=>{
      const user = result.user;
      console.log(user);
    })
    .catch(error=>{
      console.log(error);
    }
  )
};
    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">{View}</div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className='text-center font-bold text-4xl text-primary p-3'>Register Now</h1>
            <div className="card-body">
              <form onSubmit={formHandelar}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input type="email" name='email' className="input" placeholder="Email" />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name='password'
                    className="input"
                    placeholder="Password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button type='submit' className="btn btn-neutral mt-4">Register</button>
                </fieldset>
              </form>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;