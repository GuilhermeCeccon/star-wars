/* eslint-disable no-unused-vars */
import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../assets/css/login.css'


function Login() {

  return (
  <section>
    <div>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <p className="h5 text-center mb-4">Sign in</p>
              <div className="grey-text">
                <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                  success="right" />
                <MDBInput label="Type your password" icon="lock" group type="password" validate />
              </div>
              <div className="text-center">
                <MDBBtn>Login</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  </section>
  )
}

export default Login;