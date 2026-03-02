import React from 'react'

const SignupPage = () => {
  return (
    <div className='signupPage_full_container'>

      <div className='text_side_signup_container'>
        <img src="./assets/signupImg.png" alt="Signup Image" />
      </div>

      <div className='input_side_signup_container'>
          <div>
            <p>SignUp</p>
          </div>

          <div>
            <p>Manage all your inventory efficiently.</p>
            <p>Let's get you all set up so you can verify your personal account and begin setting up your work profile.</p>
          </div>

          <div className='input_signup_container'>
            <div className='input_firstName_container'>
                <p>First Name:</p>
                <input type="text" placeholder='Enter your first name' />
            </div>

            <div className='input_lastName_container'>
                <p>Last Name:</p>
                <input type="text" placeholder='Enter your last name' />
            </div>

            <div className='input_email_container'>
                <p>Email:</p>
                <input type="email" placeholder='Enter your email' />
            </div>

            <div className='input_phone_container'>
                <p>Phone no:</p>
                <input type="tel" placeholder='Enter your phone number' />
            </div>

            <div className='input_password_container'>
                <p>Password</p>
                <input type="password" placeholder='Enter your password' />
            </div>
          </div>

          <div className='terms_and_conditions_container'>
            <div className='checkbox_terms_container'>
                <input type="checkbox" />
                <p>
                    I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>
                </p>
            </div>

            <div className='signupbutton_login_container'>
                <button>
                    SignUp
                </button>
                <p>Already have a account? Login</p>
            </div>
            
          </div>
      </div>
    </div>
  )
}

export default SignupPage
