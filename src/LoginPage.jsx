import React from 'react'

const LoginPage = () => {
  return (
    <div className='loginPage_full_container'>
       
      <div className='text_side_login_container'>

        <div className='login_title'>
            <p>LogIn</p>
        </div>

        <div className='login_with_container'>
            <p>See your growth and get support!</p>
            <div>
                <p>Sign in with google</p>
                <img src="" alt="google icon" />
            </div>
        </div>

        <div className='input_login_container'>
            <div className='input_email_container'>
                <p>Email*</p>
                <input type="text" placeholder='Enter your email' />
            </div>

            <div className='input_password_container'>
                <p>Password*</p>
                <input type="password" placeholder='Minimum 8 characters' />
            </div>

            <div className='remember_fpassword_container'>
                <div>
                    <input type="text" />
                    <p>Remember me</p>
                </div>

                <div>
                    <p>Forgot password?</p>
                </div>

            </div>

            <div className='loginbutton_notregister_container'>
                <button>
                    Login
                </button>
                <p>Not regestered yet? Create a new account.</p>
            </div>

        </div>

      </div>

      <div className='img_side_login'>
          <img src="./assets/loginImg.png" alt="login_img" />
      </div>
    </div>
  )
}

export default LoginPage
