import React from 'react'

const SignUp = () => {
  return (
    <section className='signup'>
      <div className="container">
         <div className="section-title">
	          <h2>Get News Updates By Signup</h2>
          </div>
          <div className="field">
		<input type="text" id="email" name="email" placeholder="User@domain.com" />
	</div>
        <div className="login"><a className="btn-theme" href="login.html">Subscribe<i className="fa-regular fa-arrow-up-right"></i></a></div>
    </div>
</section>
  )
}

export default SignUp