import React from 'react'
import "./ForgetPassword.css"
import { yupResolver } from '@hookform/resolvers/yup';
import { forgotPasswordSchema } from '../../SCHEMA/schema';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Forminput } from '../../TYPE/type.check';
import { useNavigate } from 'react-router-dom';
const ForgetPassword = () => {
    const navigate= useNavigate()
    const { control, handleSubmit, formState: { errors }, reset } = useForm<Forminput>({
        defaultValues: {
            email: "",
        },
        resolver: yupResolver<any>(forgotPasswordSchema),
    });
    const onSubmit: SubmitHandler<Forminput> = (data) => {
        console.log(data);
        reset();
    };
    return (
        <div className='ForgetPasswordMain'>
            <div className='ForgetPasswordWrap'>
                <h3>Forget Password</h3>
                <hr className='ForgetPasswordGreyLine' />
                <div className='ForgetPasswordText'>
                    <p>
                        Please enter your email address or mobile number to search for your account.
                    </p>
                </div>
                <Controller
                    name='email'
                    control={control}
                    render={({ field }) =>
                        <input type="text" {...field} className='ForgetPasswordInput' placeholder='Enter your email or phone number' />
                    }
                />
                <button className='ForgetPasswordButton' onSubmit={handleSubmit(onSubmit)}>Submit</button>
                <div className='ForgetPasswordBackToLogin'>
                    <p onClick={()=> navigate('/login')} >Back login </p>
                </div>
            </div>

        </div>
    )
}

export default ForgetPassword