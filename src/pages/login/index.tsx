function LoginPage() {
  return (
    <div className='login__container flex flex-col items-center justify-center min-h-screen bg-green-500 dark:bg-green-800 px-4'>
      <div className='login__content w-full max-w-md'>
        {/* Vite Logo */}
        <div className='login__logo flex justify-center mb-8'>
          <img 
            src='/vite.svg' 
            alt='Vite Logo' 
            className='w-24 h-24 hover:drop-shadow-[0_0_2em_#646cffaa] transition-all duration-300'
          />
        </div>

        {/* Login Form Card */}
        <div className='login__card bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8'>
          <h1 className='login__title text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white'>
            Welcome Back
          </h1>

          <form className='login__form space-y-4'>
            {/* Email Input */}
            <div className='form__group'>
              <label 
                htmlFor='email' 
                className='form__label block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='form__input w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         transition-all duration-200'
                placeholder='Enter your email'
                required
              />
            </div>

            {/* Password Input */}
            <div className='form__group'>
              <label 
                htmlFor='password' 
                className='form__label block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
              >
                Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                className='form__input w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         transition-all duration-200'
                placeholder='Enter your password'
                required
              />
            </div>

            {/* Remember Me Checkbox */}
            <div className='form__checkbox flex items-center'>
              <input
                type='checkbox'
                id='remember'
                name='remember'
                className='w-4 h-4 text-blue-600 border-gray-300 rounded 
                         focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700'
              />
              <label 
                htmlFor='remember' 
                className='form__label ml-2 text-sm text-gray-700 dark:text-gray-300'
              >
                Remember me
              </label>
            </div>

            {/* Login Button */}
            <button
              type='submit'
              className='form__button w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 
                       text-white font-medium rounded-lg
                       transition-colors duration-200
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            >
              Sign In
            </button>
          </form>

          {/* Additional Links */}
          <div className='login__links mt-6 text-center space-y-2'>
            <a 
              href='#' 
              className='text-sm text-blue-600 dark:text-blue-400 hover:underline block'
            >
              Forgot password?
            </a>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              Don't have an account?{' '}
              <a href='#' className='text-blue-600 dark:text-blue-400 hover:underline'>
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
