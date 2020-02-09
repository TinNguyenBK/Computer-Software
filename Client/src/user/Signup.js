import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../core/Layout';
import { signup } from '../auth';

const Signup = () => {
    const [values, setValues] = useState({
        name: 'bachkhoacomputer_user',
        email: 'bachkhoacomputer_user@hcmut.edu.vn',
        password: 'Password',
        confirmPassword: 'Password',
        error: '',
        success: false
    });

    const { name, email, password, confirmPassword, success, error } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        if (password != confirmPassword){
          const notMatch = "Password Không Trùng Nhau. Vui Lòng Nhập Lại";
          setValues({...values, error: notMatch});
        }
        else{
          setValues({ ...values, error: false });
          signup({ name, email, password }).then(data => {
              if (data.error) {
                  setValues({ ...values, error: data.error, success: false });
              } else {
                  setValues({
                      ...values,
                      name: '',
                      email: '',
                      password: '',
                      confirmPasswordpassword: '',
                      error: '',
                      success: true
                  });
              }
          });
      }
    };

    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange('name')} type="text" className="form-control" placeholder={name} />
            </div>

            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} type="email" className="form-control" placeholder={email} />
            </div>

            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={handleChange('password')} type="password" className="form-control" placeholder={password} />
            </div>

            <div className="form-group">
                <label className="text-muted">Confirm Password</label>
                <input onChange={handleChange('confirmPassword')} type="password" className="form-control" placeholder={confirmPassword} />
            </div>

            <button onClick={clickSubmit} className="btn btn-primary">
                Submit
            </button>
        </form>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            New account is created. Please <Link to="/signin">Signin</Link>
        </div>
    );

    return (
        <Layout
            title="Đăng ký"
            description="Bách Khoa Computer - Nơi mua sắm đáng tin cậy, bạn của mọi nhà"
            className="container col-lg-5 col-md-6 col-sm-8 col-12"
        >
            {showSuccess()}
            {showError()}
            {signUpForm()}
        </Layout>
    );
};

export default Signup;
