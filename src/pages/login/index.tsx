import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic would go here
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className='
      flex
      flex-col
      min-h-screen
      bg-white
    '>
      <Header />

      {/* Main Content */}
      <div className='
        flex-grow
        flex
        flex-col
        items-center
        justify-center
        py-20
      '>
        <div className='
          w-full
          max-w-md
          flex
          flex-col
          items-center
        '>
          {/* Title */}
          <h1 className='
            text-4xl
            font-bold
            text-red-600
            text-center
            mb-4
          '>
            Login
          </h1>

          {/* Subtitle */}
          <p className='
            text-lg
            text-gray-600
            text-center
            mb-10
          '>
            Welcome back to SuddenlySpaces
          </p>

          {/* Form */}
          <form
            onSubmit={handleLogin}
            className='
              w-full
              flex
              flex-col
              gap-6
            '
          >
            {/* Email Field */}
            <div className='
              flex
              flex-col
              gap-2
            '>
              <label className='
                text-sm
                font-semibold
                text-gray-700
              '>
                Email Address
              </label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
                className='
                  w-full
                  px-4
                  py-3
                  border
                  border-gray-300
                  rounded-lg
                  text-black
                  placeholder-gray-500
                  focus:outline-none
                  focus:border-black
                  focus:ring-2
                  focus:ring-black
                  focus:ring-opacity-20
                '
                required
              />
            </div>

            {/* Password Field */}
            <div className='
              flex
              flex-col
              gap-2
            '>
              <label className='
                text-sm
                font-semibold
                text-gray-700
              '>
                Password
              </label>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter your password'
                className='
                  w-full
                  px-4
                  py-3
                  border
                  border-gray-300
                  rounded-lg
                  text-black
                  placeholder-gray-500
                  focus:outline-none
                  focus:border-black
                  focus:ring-2
                  focus:ring-black
                  focus:ring-opacity-20
                '
                required
              />
            </div>

            {/* Remember Me */}
            <div className='
              flex
              flex-row
              items-center
              gap-2
            '>
              <input
                type='checkbox'
                id='remember'
                className='
                  w-4
                  h-4
                  cursor-pointer
                '
              />
              <label
                htmlFor='remember'
                className='
                  text-sm
                  text-gray-600
                  cursor-pointer
                '
              >
                Remember me
              </label>
            </div>

            {/* Login Button */}
            <button
              type='submit'
              className='
                w-full
                bg-black
                text-white
                font-semibold
                text-base
                py-3
                rounded-full
                hover:opacity-90
                transition-opacity
                mt-4
              '
            >
              Login
            </button>
          </form>

          {/* Sign Up Link */}
          <p className='
            text-center
            text-gray-600
            text-sm
            mt-8
          '>
            Don't have an account?{' '}
            <button className='
              text-black
              font-semibold
              hover:opacity-75
            '>
              Sign Up
            </button>
          </p>

          {/* Forgot Password Link */}
          <button className='
            text-center
            text-gray-600
            text-sm
            mt-4
            hover:opacity-75
          '>
            Forgot Password?
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default LoginPage;
