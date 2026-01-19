import { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log('Login attempt with:', { email, password });
  };

  const handleForgotPassword = () => {
    // TODO: Implement forgot password logic
    console.log('Forgot password clicked');
  };

  const handleSignUp = () => {
    // TODO: Implement sign up navigation
    console.log('Sign up clicked');
  };

  return (
    <div className='
      login__container 
      flex 
      flex-col
      items-center
      justify-center
      w-full
      min-h-screen
      px-4
      '>
      
      <div className='
        login__card
        w-full
        max-w-md
        p-8
        rounded-lg
        bg-gradient-to-br 
        from-gray-800 
        to-gray-900
        shadow-2xl
        '>
        
        <div className='login__header text-center mb-8'>
          <h1 className='text-4xl font-bold mb-2'>Welcome Back</h1>
          <p className='text-gray-400'>Please sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit} className='login__form flex flex-col gap-6'>
          
          <div className='form__group'>
            <label 
              htmlFor='email' 
              className='block text-sm font-medium mb-2 text-gray-300'
            >
              Email Address
            </label>
            <input
              id='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder='Enter your email'
              className='
                w-full
                px-4
                py-3
                rounded-lg
                bg-gray-700
                border
                border-gray-600
                text-white
                placeholder-gray-400
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-transparent
                transition-all
              '
            />
          </div>

          <div className='form__group'>
            <label 
              htmlFor='password' 
              className='block text-sm font-medium mb-2 text-gray-300'
            >
              Password
            </label>
            <input
              id='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='Enter your password'
              className='
                w-full
                px-4
                py-3
                rounded-lg
                bg-gray-700
                border
                border-gray-600
                text-white
                placeholder-gray-400
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-transparent
                transition-all
              '
            />
          </div>

          <div className='form__options flex items-center justify-between text-sm'>
            <label className='flex items-center gap-2 cursor-pointer'>
              <input 
                type='checkbox' 
                className='
                  w-4 
                  h-4 
                  rounded 
                  bg-gray-700 
                  border-gray-600
                  focus:ring-2
                  focus:ring-blue-500
                '
              />
              <span className='text-gray-400'>Remember me</span>
            </label>
            <button
              type='button'
              onClick={handleForgotPassword}
              className='text-blue-400 hover:text-blue-300 transition-colors bg-transparent border-0 p-0 cursor-pointer'
            >
              Forgot password?
            </button>
          </div>

          <button
            type='submit'
            className='
              w-full
              py-3
              mt-4
              rounded-lg
              font-semibold
              text-white
              bg-gradient-to-r
              from-blue-500
              to-purple-600
              hover:from-blue-600
              hover:to-purple-700
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              focus:ring-offset-2
              focus:ring-offset-gray-900
              transition-all
              transform
              hover:scale-[1.02]
              active:scale-[0.98]
            '
          >
            Sign In
          </button>

          <div className='login__footer text-center mt-6'>
            <p className='text-gray-400 text-sm'>
              Don't have an account?{' '}
              <button
                type='button'
                onClick={handleSignUp}
                className='text-blue-400 hover:text-blue-300 font-medium transition-colors bg-transparent border-0 p-0 cursor-pointer'
              >
                Sign up
              </button>
            </p>
          </div>
        </form>

      </div>
    </div>
  );
}

export default LoginPage;
