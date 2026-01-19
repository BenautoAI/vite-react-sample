import { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log('Login submitted:', { email, password, rememberMe });
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
    <div className='min-h-screen flex items-center justify-center bg-[#242424] px-4'>
      <div className='w-full max-w-md'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] bg-clip-text text-transparent'>
            Welcome Back
          </h1>
          <p className='text-gray-400 text-lg'>
            Sign in to your account
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* Email Input */}
          <div>
            <label htmlFor='email' className='block text-white text-base mb-2'>
              Email Address
            </label>
            <input
              id='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              className='w-full px-6 py-4 bg-transparent border border-gray-600 rounded-2xl text-gray-400 placeholder-gray-600 focus:outline-none focus:border-[#3B82F6] transition-colors'
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor='password' className='block text-white text-base mb-2'>
              Password
            </label>
            <input
              id='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter your password'
              className='w-full px-6 py-4 bg-transparent border border-gray-600 rounded-2xl text-gray-400 placeholder-gray-600 focus:outline-none focus:border-[#3B82F6] transition-colors'
              required
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <input
                id='remember-me'
                type='checkbox'
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className='w-5 h-5 border-2 border-gray-600 rounded bg-transparent cursor-pointer accent-[#3B82F6]'
              />
              <label htmlFor='remember-me' className='ml-2 text-gray-400 text-base cursor-pointer'>
                Remember me
              </label>
            </div>
            <button
              type='button'
              onClick={handleForgotPassword}
              className='text-[#3B82F6] hover:text-[#2563EB] text-base transition-colors'
            >
              Forgot password?
            </button>
          </div>

          {/* Sign In Button */}
          <button
            type='submit'
            className='w-full py-4 rounded-2xl bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] text-white text-lg font-semibold hover:opacity-90 transition-opacity'
          >
            Sign In
          </button>
        </form>

        {/* Sign Up Link */}
        <div className='text-center mt-8'>
          <span className='text-gray-400 text-base'>
            Don't have an account?{' '}
          </span>
          <button
            type='button'
            onClick={handleSignUp}
            className='text-[#3B82F6] hover:text-[#2563EB] text-base transition-colors'
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
