import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import {registerApi} from '../../redux/reducers/userReducer';

export default function RegisterForm(props) {

  const dispatch = useDispatch();

  // Get input from form
  const registerForm = useFormik({
    initialValues:{
      email:'',
      name:'',
      password:'',
      passwordConfirm:'',
      phone:''
    },

    // Check validation
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Email is required!').email('Email is not in the correct format!'),
      name: Yup.string().required('Name is required!'),
      password: Yup.string().required('Password is required!').matches("(?=.*)(?=.*[a-z])(?=.*[A-Z]).{6,}", 'Password is not in the correct format!'),
      phone: Yup.string().required('Phone number is required!'),
      passwordConfirm: Yup.string().required('Please confirm your password!').oneOf([Yup.ref('password')], 'Password is not match')
    }),

    onSubmit: (values) => {
      console.log(values);
      dispatch(registerApi(values));
    }
  });

  


  return (
    <div className='form_container my-5'>
        <form id="registerForm" action="" className="d-block" onSubmit={registerForm.handleSubmit}>
            <div className="row">
              <div className="col-5 form-group">
                <div className="item">
                  <label htmlFor="">Email</label>
                  <input 
                    name='email'
                    type="email" 
                    id="email" 
                    className="form-control" 
                    // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    placeholder='Email'
                    required
                    onChange={registerForm.handleChange}
                    onBlur={registerForm.handleBlur}
                    />
                    {/* Text validation */}
                    {registerForm.errors.email ? <span className='text-danger'>{registerForm.errors.email}</span> : ''}
                </div>
                
              </div>
              <div className="col-5 form-group">
                <div className="item">
                  <label htmlFor="">Name</label>
                  <input
                    name='name'
                    type="text" 
                    id="name" 
                    className="form-control" 
                    // pattern="^[a-z0-9A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$"
                    placeholder='Name'
                    required
                    onChange={registerForm.handleChange}
                    onBlur={registerForm.handleBlur}
                    />
                    {/* Text validation */}
                    {registerForm.errors.name ? <span className='text-danger'>{registerForm.errors.name}</span> : ''}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-5 form-group">
                <div className="item">
                  <label htmlFor="">Password</label>
                  <input 
                    name='password'
                    type="password" 
                    id="password" 
                    className="form-control" 
                    // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                    placeholder='Password'
                    required
                    onChange={registerForm.handleChange}
                    onBlur={registerForm.handleBlur}
                    />
                    {/* Text validation */}
                    {registerForm.errors.password ? <span className='text-danger'>{registerForm.errors.password}</span> : ''}
                </div>
              </div>
              <div className="col-5 form-group">
                <div className="item">
                  <label htmlFor="">Phone</label>
                  <input 
                    name='phone'
                    type="text" 
                    id="phone" 
                    className="form-control"
                    // pattern="[0-9,+,()]+$"
                    placeholder='Phone'
                    required
                    onChange={registerForm.handleChange}
                    onBlur={registerForm.handleBlur}
                    />
                    {/* Text validation */}
                    {registerForm.errors.phone ? <span className='text-danger'>{registerForm.errors.phone}</span> : ''}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-5 form-group">
                <div className="item">
                  <label htmlFor="">Password confirm</label>
                  <input 
                    name='passwordConfirm'
                    type="password" 
                    id="pass-confirm" 
                    className="form-control"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                    placeholder='Password confirm'
                    required
                    onChange={registerForm.handleChange}
                    onBlur={registerForm.handleBlur}
                    />
                    {/* Text validation */}
                    {registerForm.errors.passwordConfirm ? <span className='text-danger'>{registerForm.errors.passwordConfirm}</span> : ''}
                </div>
              </div>
              {/* <!-- Gender --> */}
              <div className="col-5 form-group">
                <div className="item border-0 pt-4 d-flex" id="gender">
                  <label className="pe-5" htmlFor="">Gender</label>
                  <input type="radio" name="gender" value="true" checked/>
                  <p className="ps-3 pe-5">Male</p>

                  <input type="radio" name="gender" value="false"/>
                  <p className="ps-3 pe-5">Female</p>
                </div>
              </div>
            </div>
            <button>Submit</button>
    </form>
    </div>
  )
}
