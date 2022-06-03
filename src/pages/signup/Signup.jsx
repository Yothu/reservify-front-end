import React from 'react';
import SignupForm from './../../components/Signup/SignupForm';
import registerImg from '../../images/undraw-svg/register.svg';

function Signup() {
  return (
    <section className="mt-5">
      <div className="text-center mb-3">
        <img src={registerImg} alt="register" className="mw-100" width={500} />
      </div>

      <SignupForm />
    </section>
  );
}

export default Signup;
