import React from 'react'

import '../App.css';
import '../CSS/style.css';

const Register = () => 
{
  return (
    <section className="vh-100" >
    <div className="logo_section">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="logo"><a ><img src={require('../IMAGES/logo.png')}/></a></div>
                </div>
            </div>
        </div>
    </div>
    <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
                <div className="card text-black" >
                    <div className="card-body p-md-5">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                <form method="post" className="mx-1 mx-md-4">

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <input type="text" id="form3Example1c" className="form-control" asp-for="FirstName"/>
                                            <label className="form-label" for="form3Example1c" asp-for="FirstName">Your Name</label>
                                            <span asp-validation-for="FirstName" className="text-danger"></span>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <input type="email" id="form3Example3c" className="form-control" asp-for="Email" />
                                            <label className="form-label" for="form3Example3c" asp-for="Email">Your Email</label>
                                            <span asp-validation-for="Email" className="text-danger"></span>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <input type="password" id="form3Example4c" className="form-control" asp-for="Password"/>
                                            <label className="form-label" for="form3Example4c" asp-for="Password">Password</label>
                                            <span asp-validation-for="Password" className="text-danger"></span>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <input type="password" id="form3Example4cd" className="form-control" asp-for="ConfirmPassword" />
                                            <label className="form-label" for="form3Example4cd" asp-for="ConfirmPassword">Repeat your password</label>
                                            <span asp-validation-for="ConfirmPassword" className="text-danger"></span>
                                        </div>
                                    </div>

                                    <div className="form-check d-flex justify-content-center mb-5">
                                        <input type="checkbox" value="" id="form2Example3c" />
                                        <label className="form-check-label" for="form2Example3">
                                            I agree all statements in <a href="#!">Terms of service</a>
                                        </label>
                                    </div>

                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                        <button type="submit" className="btn btn-primary btn-lg">Register</button>
                                    </div>

                                </form>

                            </div>
                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                     className="img-fluid" alt="Sample image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Register
