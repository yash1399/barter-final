
import React from 'react';
import { registerUser } from "../../../_actions/user_actions";
import {useDispatch} from 'react-redux';

import { Form, Row, Col, Container, Image, Nav, Navbar} from 'react-bootstrap';
import '../RegisterPage/RegisterPage.css'
import {Formik} from 'formik';
import * as Yup from 'yup';




const Register = (props) => {
    const dispatch = useDispatch()
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    
    return (
         <>
            
                <Formik
                    initialValues={{
                        name:'',
                        lastname:'',
                        email:' ',
                        password:'',
                        phone:'',
                        state:'',
                        pincode:'',
                        checked: false
                    }}
                    validationSchema= {Yup.object().shape({
                        name: Yup.string()
                            .required('Name is required'),
                        lastname:Yup.string()
                            .required('Last name is required'), 
                        email: Yup.string()
                            .email('Email is required')
                            .required('Email is required'),
                        password: Yup.string()
                            .min(6, 'Password must be at least 6 characters')
                            .required('Password is required'),
                        confirmPassword: Yup.string()
                            .oneOf([Yup.ref('password'), null], 'Passwords must match')
                            .required('Confirm Password is required'),
                        state: Yup.string()
                            .required('State is required'),
                        pincode:Yup.string().matches(phoneRegExp, "Pincode is required"),
                        phone: Yup.string().matches(phoneRegExp," Phone number is required")
                    })}

                    onSubmit= {(values, {setSubmitting }) => {
                        setTimeout(() => {

                            var dataToSubmit = {
                                name:values.name,
                                lastname:values.lastname,
                                email: values.email,
                                password:values.password,
                                phone:values.phone,
                                state:values.state,
                                pincode:values.pincode,
                                checked: values.checked
                            };
                            dispatch(registerUser(dataToSubmit)).then(response =>{
                                if (response.payload.success){
                                    props.history.push('/login')
                                    alert('Registration successful')
                                }else{
                                    alert(response.payload.errmsg)

                                }
                            })
                            
                            setSubmitting(false);
                        }, 500);
                    }}
                >
                {props=> {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        
                    } = props;
                return(
                    <div>
                        <div className="center1">
                            <Container className=" orange mt-4 mb-4 p-5 border">
                                <h1>Sign up!</h1>
                                <Form  onSubmit = {handleSubmit}>
                                    <Form.Group as={Row}  className="justify-content-md-center">
                                        <Col xs={12} md={4}>
                                            {/* <Image src={require("../assets/placepicture.png")} height="150px" roundedCircle /> */}
                                       </Col>
                                    </Form.Group>
                        
                                    <Form.Group as={Row}>
                                    <Col>
                                        <Form.Label>Name*</Form.Label>
                                            <Form.Control
                                                id="name"
                                                className={errors.name && touched.name ? 'text-input error' : 'text-input'}
                                                required
                                                value={values.name}
                                                type="text" onChange ={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="Enter your name" sm={2}/> 
                                                 {errors.name && touched.name && (
                                                    <div className="input-feedback">{errors.name}</div>)}
                                     </Col>
                                    <Col> 
                                         <Form.Label> Last Name*</Form.Label>
                                             <Form.Control 
                                                id="lastname"
                                                className={ errors.lastName && touched.lastName ? 'text-input error' : 'text-input'}
                                                value= {values.lastname}
                                                type="text" onChange ={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="Enter your last name" /> 
                                                {errors.lastName && touched.lastName && (
                                                    <div cla    ssName="input-feedback">{errors.lastName}</div>
                                                )}
                                    </Col>
                                    </Form.Group >
                                                
                                    <Form.Group hasFeedback validateStatus={errors.email && touched.email ? "error" : 'success'}>
                                        <Form.Label>Email*</Form.Label> 
                                            <Form.Control
                                                id="email"
                                                className={ errors.email && touched.email ? 'text-input error' : 'text-input'}
                                                required
                                                value= {values.email} 
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                type="email" placeholder="Enter your email id"/>
                                                {errors.email && touched.email && (
                                                    <div className="input-feedback">{errors.email}</div>
                                                )}
                                    </Form.Group>
                        
                                    <Form.Group as={Row} hasFeedback validateStatus={errors.password && touched.password ? "error" : 'success'} >
                                        <Col>
                                            <Form.Label>Password*<Form.Text className="muted">Password should be at least 6 characters long </Form.Text></Form.Label>               
                                                <Form.Control
                                                    id="password"
                                                    className={
                                                        errors.password && touched.password ? 'text-input error' : 'text-input'
                                                    }
                                                    value={values.password} 
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    type="password" minlength="6" placeholder="Create new password"/>
                                                    {errors.password && touched.password && (
                                                     <div className="input-feedback">{errors.password}</div>
                                                     )}
                                        </Col>
                                                    
                                        <Col>
                                            <Form.Label>Confirm Password<Form.Text className="muted">Please confirm your password</Form.Text></Form.Label>
                                                <Form.Control hasFeedback
                                                    id="confirmPassword" 
                                                    className={
                                                    errors.confirmPassword && touched.confirmPassword ? 'text-input error' : 'text-input'
                                                            }
                                                    required
                                                    value= {values.confirmPassword} 
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    type="text" placeholder="Confirm password"/>
                                                    {errors.confirmPassword && touched.confirmPassword && (
                                                        <div className="input-feedback">{errors.confirmPassword}</div>
                                                    )}
                                         </Col>
                                    </Form.Group>
                        
                                            
                                    <Form.Group as={Row}  >
                                         <Col hasFeedback validateStatus={errors.phone && touched.phone ? "error" : 'success'}>
                                            <Form.Label>Phone number*</Form.Label>
                                                <Form.Control 
                                                    id="phone"
                                                    className={errors.phone && touched.phone ? 'text-input error' : 'text-input'}   
                                                    value={values.phone}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    type="tel" placeholder="Enter your phone number"/> 
                                                    {errors.confirmPassword && touched.confirmPassword && (
                                                    <div className="input-feedback">{errors.phone}</div>
                                                    )}
                                        </Col>
                                        
                                    </Form.Group>
                                                
                                            
                                                    
                                    <Form.Group as={Row}>
                                        <Col hasFeedback validateStatus={errors.pincode && touched.pincode  ? "error" : 'success'} > 
                                            <Form.Label>Pincode*</Form.Label> 
                                                <Form.Control 
                                                    className={
                                                         errors.pincode && touched.pincode ? 'text-input error' : 'text-input'
                                                            }
                                                    id="pincode"
                                                    value= {values.pincode} 
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    type="number" placeholder="Enter pincode"/>
                                                        {errors.pincode && touched.pincdoe && (
                                                        <div className="input-feedback">{errors.pincode}</div>
                                                            )}
                                        </Col>
                                        <Col>
                                            <Form.Label>State</Form.Label>
                                                <Form.Control required id="state" className="text-center" as="select" onChange={handleChange} onBlur={handleBlur} value={values.state}>
                                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                    <option value="Assam">Assam</option>
                                                    <option value="Bihar">Bihar</option>
                                                    <option value="Chandigarh">Chandigarh</option>
                                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                                    <option value="Daman and Diu">Daman and Diu</option>
                                                    <option value="Delhi">Delhi</option>
                                                    <option value="Lakshadweep">Lakshadweep</option>
                                                    <option value="Puducherry">Puducherry</option>
                                                    <option value="Goa">Goa</option>
                                                    <option value="Gujarat">Gujarat</option>
                                                    <option value="Haryana">Haryana</option>
                                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                                    <option value="Jharkhand">Jharkhand</option>
                                                    <option value="Karnataka">Karnataka</option>
                                                    <option value="Kerala">Kerala</option>
                                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                    <option value="Maharashtra">Maharashtra</option>
                                                    <option value="Manipur">Manipur</option>
                                                    <option value="Meghalaya">Meghalaya</option>
                                                    <option value="Mizoram">Mizoram</option>
                                                    <option value="Nagaland">Nagaland</option>
                                                    <option value="Odisha">Odisha</option>
                                                    <option value="Punjab">Punjab</option>
                                                    <option value="Rajasthan">Rajasthan</option>
                                                    <option value="Sikkim">Sikkim</option>
                                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                                    <option value="Telangana">Telangana</option>
                                                    <option value="Tripura">Tripura</option>
                                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                    <option value="Uttarakhand">Uttarakhand</option>
                                                    <option value="West Bengal">West Bengal</option>
                                                </Form.Control>          
                                        </Col>
                                    </Form.Group>      
                                                    
                                                
                                    <Form.Group as={Row}>
                                        <Col>
                                            <Form.Check id='checked'label="Agree to terms and conditions"
                                                value={values.checked}
                                                onChange={handleChange}
                                                onBlur={handleBlur}/>
                                        </Col>
                                        <Col>
                                            <button onClick= {handleSubmit} disabled={isSubmitting} className="button"type="submit">Submit</button>      
                                        </Col> 
                                    </Form.Group >                                       
                            </Form> 
                    </Container>
                </div>           
            </div>  
            );
        }}
        </Formik>
        </>
    );
};



export default Register;