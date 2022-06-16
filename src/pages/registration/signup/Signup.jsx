import SignupForm from '../../../components/Signup/SignupForm';
import registerImg from '../../../assets/images/undraw-svg/green-register.svg';
import style from './Signup.module.css';

function Signup() {
  return (
    <section className={`${style.signup} conatiner`}>
      <div className="text-center mb-3">
        <img src={registerImg} alt="register" className="mw-100" width={500} />
      </div>

      <SignupForm />
    </section>
  );
}

export default Signup;
