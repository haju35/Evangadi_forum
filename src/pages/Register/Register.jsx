import {useRef} from 'react'
import axios from '../../axiosConfig'
import {useNavigate} from 'react-router-dom'
import classes from './register.module.css'


function Register() {
  const navigate = useNavigate()
  const userNameDom = useRef();
  const firstnameDom = useRef()
  const lastnameDom = useRef()
  const emailDom = useRef()
  const passwordDom = useRef()



  

  async function handleSubmit(e){
    e.preventDefault();
    const usernameValue = userNameDom.current.value;
    const firstValue = firstnameDom.current.value;
    const lastValue = lastnameDom.current.value;
    const emailValue = emailDom.current.value;
    const passValue = passwordDom.current.value;
    if(
      !usernameValue||
      !firstValue||
      !lastValue||
      !emailValue||
      !passValue
    ){
      alert('please provide all required information');
      return;
    }

    try{
      await axios.post('/users/register',{
        username:usernameValue,
        firstname:firstValue,
        lastname:lastValue,
        email:emailValue,
        password:passValue
      })
      alert('registered successfully.please login.')
      navigate('/login')


    }catch(error){
      alert("something went wrong!")
     console.log(error.response)
    }
   
  }
  return (
    <section className={classes.register}>
     <form onSubmit = {handleSubmit} className={classes.register_form}>
      <div >
        <span>username:---</span>
        <input ref={userNameDom} type = 'text' placeholder='username'/>
      </div>
      <br/>
      <div>
        <span>first name:---</span>
        <input ref={firstnameDom} type = 'text' placeholder='first name'/>
      </div>
      <br/>
      <div>
        <span>last name:---</span>
        <input ref={lastnameDom} type = 'text' placeholder='last name'/>
      </div>
      <br/>
      <div>
        <span>email:---</span>
        <input ref={emailDom} type = 'email' placeholder='email'/>
      </div>
      <br/>
      <div>
        <span>password:---</span>
        <input ref={passwordDom} type = 'password' placeholder='password'/>
      </div>
      <button type='submit' className={classes.submit_btn}> Agree and join </button>
     </form>
    </section>
  )
}

export default Register