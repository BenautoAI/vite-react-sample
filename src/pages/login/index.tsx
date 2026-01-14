import { useState, FormEvent } from 'react';

function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    // Validate email format
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Validate password is not empty
    if (!password) {
      setError('Please enter your password');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    try {
      // Here you would normally make an API call to authenticate
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Store remember me preference
      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      }
      
      console.log('Login successful', { email, rememberMe });
      // Handle successful login (redirect, store token, etc.)
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='login__page flex items-center justify-center min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#242424] to-[#2a2a2a]'>
      <div className='login__container w-full max-w-md px-8 py-10 bg-[#1a1a1a] rounded-2xl shadow-2xl border border-gray-800'>
        {/* Header */}
        <div className='login__header text-center mb-8'>
          <h1 className='text-4xl font-bold text-red-600'>
            Welcome Back
          </h1>
          <p className='text-red-600 mt-2'>Sign in to continue</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className='login__form space-y-6'>
          {/* Error Message */}
          {error && (
            <div className='form__error p-3 bg-red-500/10 border border-red-500/50 rounded-lg'>
              <p className='text-red-400 text-sm'>{error}</p>
            </div>
          )}

          {/* Email Input */}
          <div className='form__field'>
            <label htmlFor='email' className='form__label block text-sm font-medium text-red-600 mb-2'>
              Email Address
            </label>
            <input
              id='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              className='form__input w-full px-4 py-3 bg-[#242424] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all'
              required
            />
          </div>

          {/* Password Input */}
          <div className='form__field'>
            <label htmlFor='password' className='form__label block text-sm font-medium text-red-600 mb-2'>
              Password
            </label>
            <input
              id='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter your password'
              className='form__input w-full px-4 py-3 bg-[#242424] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all'
              required
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className='form__options flex items-center justify-between'>
            <div className='form__checkbox flex items-center'>
              <input
                id='remember-me'
                type='checkbox'
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className='w-4 h-4 bg-[#242424] border-gray-700 rounded text-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-0 cursor-pointer'
              />
              <label htmlFor='remember-me' className='ml-2 text-sm text-red-600 cursor-pointer'>
                Remember me
              </label>
            </div>
            <a href='#' className='form__link text-sm text-red-600 hover:text-red-700 transition-colors'>
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            disabled={isLoading}
            className='form__submit w-full py-3 px-4 bg-gradient-to-r from-[#3B82F6] to-[#9333EA] text-white font-semibold rounded-lg hover:from-[#2563EB] hover:to-[#7C3AED] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:ring-offset-[#1a1a1a] transition-all disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {isLoading ? (
              <span className='flex items-center justify-center'>
                <svg className='animate-spin h-5 w-5 mr-3' viewBox='0 0 24 24'>
                  <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' fill='none'></circle>
                  <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                </svg>
                Signing in...
              </span>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        {/* Footer */}
        <div className='login__footer mt-6 text-center'>
          <p className='text-red-600 text-sm'>
            Don't have an account?{' '}
            <a href='#' className='text-red-600 hover:text-red-700 font-medium transition-colors'>
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
