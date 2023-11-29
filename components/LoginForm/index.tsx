import { Formik } from 'formik';
import { FC } from 'react';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ErrorMessageForm } from '..';
import { useLoginFormHooks } from './hooks';
import Image from 'next/image';

interface IProps {}

const LoginForm: FC<IProps> = ({}) => {
  const {
    initialValues,
    initialResetPasswordValues,
    showPassword,
    isRequestingResetPassword,
    onSubmitForm,
    onToggleShowPassword,
    onForgotPassword,
    onSubmitResetPasswordForm,
    onCloseResetPasswordForm,
    onLoginWithGoogle,
  } = useLoginFormHooks();

  return (
    <div className='flex flex-col justify-center items-center lg:max-w-sm w-full h-full'>
      <div className='w-[90%] lg:w-auto flex flex-col justify-center items-center'>
        <div className='d-flex flex-col items-start'>
          <p
            className={`text-2xl text-left font-medium text-gray20`}
          >
            {isRequestingResetPassword ? 'Recover your password' : 'Sign in'}
          </p>
        </div>
        {isRequestingResetPassword ? (
          <Formik
            validationSchema={ResetPasswordSchema}
            initialValues={initialResetPasswordValues}
            validateOnMount={false}
            onSubmit={onSubmitResetPasswordForm}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit} className='mt-4 2xl:mt-8'>
                <p className='text-sm font-medium text-gray20'>Your Email</p>
                <div className='flex mt-2 flex-row justify-center items-center relative'>
                  <input
                    className={`w-full rounded-[4px] border border-lightGray text-base font-normal text-gray20`}
                    name='email'
                    type='email'
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.email}
                    placeholder='user@example.com'
                  />
                </div>
                <ErrorMessageForm name='email' />
                <button
                  type='submit'
                  className='mt-8 w-full h-11 bg-primary rounded-[4px]'
                >
                  <p className='text-base font-medium text-white font-Poppins'>
                    Send password reset email
                  </p>
                </button>
                <p
                  onClick={onCloseResetPasswordForm}
                  className='text-base font-medium text-gray20 text-center mt-4 underline cursor-pointer'
                >
                  Sign in
                </p>
              </form>
            )}
          </Formik>
        ) : (
          <div className='mt-4 2xl:mt-8 w-full md:w-[370px]'>
            <Formik
              validationSchema={SignInSchema}
              initialValues={initialValues}
              validateOnMount={false}
              onSubmit={onSubmitForm}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit}>
                  <div className='flex mt-4 2xl:mt-8 flex-row justify-center items-center relative'>
                    <input
                      className={`w-full h-12 bg-white rounded-lg border border-slate-200 text-[#898989] placeholder:text-slate-500 lg:placeholder:text-accent text-sm font-normal`}
                      name='email'
                      type='email'
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.email}
                      placeholder='Email address'
                    />
                    {/* <FontAwesomeIcon
                      onClick={onResetValueEmail(props)}
                      icon={['far', 'circle-xmark']}
                      className={`text-gray20  absolute right-4 cursor-pointer`}
                    /> */}
                  </div>
                  <ErrorMessageForm name='email' />
                  <div className='flex mt-6 flex-row justify-center items-center relative'>
                    <input
                      className={`w-full h-12 bg-white rounded-lg border border-slate-200 text-[#898989] placeholder:text-slate-500 lg:placeholder:text-accent text-sm font-normal`}
                      name='password'
                      type={showPassword ? 'text' : 'password'}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.password}
                      placeholder='Password'
                    />
                    <FontAwesomeIcon
                      onClick={onToggleShowPassword}
                      icon={
                        showPassword ? ['far', 'eye'] : ['far', 'eye-slash']
                      }
                      className={`text-gray20  absolute right-4 cursor-pointer`}
                    />
                  </div>
                  <ErrorMessageForm name='password' />
                  <div className='mt-6 flex flex-row items-center justify-between'>
                    <p
                      onClick={onForgotPassword}
                      className={`text-orangeLight text-sm font-medium cursor-pointer`}
                    >
                      Forgot Password?
                    </p>
                  </div>
                  <button
                    type='submit'
                    className='mt-6 w-full bg-orangeLight rounded-lg h-12'
                  >
                    <p className='text-sm font-semibold text-white'>Sign in</p>
                  </button>
                  <div className='flex justify-between items-center py-6'>
                    <div className='h-[1px] flex-grow max-w-[166px] bg-[#DCDCDC]'></div>
                    <span className='text-sm text-[#898989] font-normal py-3'>
                      or
                    </span>
                    <div className='h-[1px] flex-grow max-w-[166px]  bg-[#DCDCDC]'></div>
                  </div>
                  <div className='grid grid-cols-2 gap-6'>
                    <button
                      type='button'
                      onClick={onLoginWithGoogle}
                      className='hover:shadow-lg w-full h-12 border-2 border-slate-200 rounded-lg mb-4 bg-transparent flex flex-row justify-center items-center'
                    >
                      <div className='w-[16px] h-[16px] aspect-square relative mr-1 mb-[1px]'>
                        <Image
                          alt='Logo'
                          src='/images/google-icon.png'
                          fill
                          priority
                        />
                      </div>
                      <span className='text-sm font-semibold text-[#202020]'>
                        Google
                      </span>
                    </button>
                    <button
                      type='button'
                      onClick={onLoginWithGoogle}
                      className='hover:shadow-lg w-full h-12 border-2 border-slate-200 rounded-lg mb-4 bg-transparent flex flex-row justify-center items-center'
                    >
                      <div className='w-[20px] h-[20px] aspect-square relative mr-1'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          height='16'
                          width='16'
                          viewBox='0 0 512 512'
                          className='fill-blue-600 mt-[1px]'
                        >
                          <path d='M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z' />
                        </svg>
                      </div>
                      <span className='text-sm font-semibold text-[#202020]'>
                        Facebok
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        )}
      </div>
    </div>
  );
};

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('This field is required'),
  password: Yup.string()
    .required('This field is required')
    .min(8, 'Password at least 8 characters'),
});

const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('This field is required'),
});

export default LoginForm;