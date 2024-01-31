import React from 'react'

import '../App.css';
import '../CSS/style.css'

const Login = () => 
{
  return (
    <section class="vh-100">
    <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="logo_section">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="logo"><a href='index' ><img src={require('../IMAGES/logo.png')}/></a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-9 col-lg-6 col-xl-5">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                     class="img-fluid" alt="Sample image"/>
            </div>

            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form method="post">
                    <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                        <label class="text-center fw-bold mx-3 mb-0" for="form3Example3">Please Login here With Authorise Credentials</label>
                    </div>

                    <div class="divider d-flex align-items-center my-4">
                        <p class="text-center fw-bold mx-3 mb-0"></p>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example1c" class="form-control" asp-for="FirstName" />
                            <label class="form-label" for="form3Example1c" asp-for="FirstName">Your Name</label>
                            <span asp-validation-for="FirstName" class="text-danger"></span>
                        </div>
                    </div>

                   
                    <div class="form-outline mb-3">
                        <input type="password" id="form3Example4" class="form-control form-control-lg" asp-for="Password" />
                        <label class="form-label" for="form3Example4" asp-for="Password">Password</label>
                        <span asp-validation-for="Password" class="text-danger"></span>
                    </div>

                    <div class="d-flex justify-content-between align-items-center">
                        <div class="form-check mb-0">
                            <input class="form-check-input me-2" type="checkbox" asp-for="RememberMe" id="form2Example3" />
                            <label class="form-check-label" for="form2Example3" asp-for="RememberMe">
                                Remember me
                            </label>
                        </div>
                        
                        <a href="#!" class="text-body">Forgot password?</a>
                    </div>

                    <div class="text-center text-lg-start mt-4 pt-2">
                        <button type="submit" class="btn btn-primary btn-lg"  >
                            Login
                        </button>
                        <p class="small fw-bold mt-2 pt-1 mb-0">
                            Don't have an account? <a >
                                            <i class="fa fa-user" aria-hidden="true"></i>
                                                <span class="padding_10">Register</span> </a>                      
                        </p>
                    </div>

                </form>
            </div>
        </div>
    </div>
    <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        
        <div class="text-white mb-3 mb-md-0">
            Copyright © 2023. All rights reserved.
        </div>
    </div>
</section>
  )
}

export default Login
