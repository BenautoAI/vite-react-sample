import { useState } from 'react'

interface LoginPageProps {
  onSignUp?: () => void
  onForgotPassword?: () => void
  onSignIn?: (email: string, password: string, rememberMe: boolean) => void
}

function LoginPage(props: LoginPageProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  
  // Ensure rememberMe doesn't default to checked
  const isRememberMeChecked = rememberMe

  const handleSignIn = () => {
    if (props.onSignIn) {
      props.onSignIn(email, password, rememberMe)
    }
  }

  return (
    <div className='
      min-h-screen
      bg-[#242424]
      flex
      items-center
      justify-center
      px-4
      py-8
    '>
      <div className='
        w-full
        max-w-md
      '>
        {/* Heading with gradient */}
        <h1 className='
          text-5xl
          font-bold
          text-center
          mb-2
          bg-gradient-to-r
          from-[#6EE7B7]
          via-[#3B82F6]
          to-[#9333EA]
          bg-clip-text
          text-transparent
        '>
          Welcome Back
        </h1>

        {/* Subheading */}
        <p className='
          text-center
          text-gray-400
          text-lg
          mb-8
        '>
          Sign in to your account
        </p>

        {/* Email Field */}
        <div className='mb-6'>
          <label className='
            block
            text-white
            text-lg
            font-medium
            mb-2
          '>
            Email Address
          </label>
          <input
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='
              w-full
              bg-transparent
              border
              border-gray-600
              rounded-lg
              px-4
              py-3
              text-white
              placeholder-gray-500
              focus:outline-none
              focus:border-blue-500
            '
          />
        </div>

        {/* Password Field */}
        <div className='mb-6'>
          <label className='
            block
            text-white
            text-lg
            font-medium
            mb-2
          '>
            Password
          </label>
          <input
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='
              w-full
              bg-transparent
              border
              border-gray-600
              rounded-lg
              px-4
              py-3
              text-white
              placeholder-gray-500
              focus:outline-none
              focus:border-blue-500
            '
          />
        </div>

        {/* Remember Me & Forgot Password */}
        <div className='
          flex
          items-center
          justify-between
          mb-8
        '>
          <div className='flex items-center gap-2'>
            <input
              type='checkbox'
              id='rememberMe'
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className='
                w-5
                h-5
                bg-transparent
                border
                border-gray-600
                rounded
                cursor-pointer
                accent-[#6EE7B7]
              '
            />
            <label htmlFor='rememberMe' className='text-white cursor-pointer'>
              Remember me
            </label>
          </div>
          <a
            href='#'
            onClick={(e) => {
              e.preventDefault()
              if (props.onForgotPassword) props.onForgotPassword()
            }}
            className='text-blue-400 hover:text-blue-300'
          >
            Forgot password?
          </a>
        </div>

        {/* Sign In Button */}
        <button
          onClick={handleSignIn}
          className='
            w-full
            bg-gradient-to-r
            from-[#6EE7B7]
            via-[#3B82F6]
            to-[#9333EA]
            text-white
            text-lg
            font-semibold
            py-3
            rounded-lg
            mb-6
            hover:opacity-90
            transition-opacity
          '
        >
          Sign In
        </button>

        {/* Sign Up Link */}
        <p className='text-center text-gray-400'>
          Don't have an account?{' '}
          <a
            href='#'
            onClick={(e) => {
              e.preventDefault()
              if (props.onSignUp) props.onSignUp()
            }}
            className='text-blue-400 hover:text-blue-300'
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
