import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <>
      <div className="main">
        <div className="mainWrap">
          <div className="LoginText">
            <h1>Social  Commerce</h1>
            <span>Social-Commerce helps you connect and sell your products with the people in your life</span>
          </div>
          <div className="LoginInput">
            <div className="LoginInputBox">
              <div className="LoginInputBoxWrap">
                <input type="text" id='contact' placeholder='Email address or phone number' />
                <input type="password" placeholder='Password' />
                <button>Log in</button>
                <p>Forgotten password?</p>
                <hr className='grayLine'/>
                <button className='SignUpButton'>Create new  account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login