interface LoginAvatarProps {
  imageUrl?: string;
  name?: string;
}

function LoginAvatar(props: LoginAvatarProps) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='avatar__photo mb-6'>
        <img
          className='
            rounded-full
            w-32
            h-32
            hover:scale-110
            transition-all
            duration-300
            bg-gradient-to-r 
            p-[6px] 
            from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]
          '
          src={props.imageUrl || "./src/assets/photo.png"}
          alt="User Avatar"
        />
      </div>
      {props.name && (
        <div className='avatar__name mb-8'>
          <h2 className='text-2xl font-semibold text-center'>{props.name}</h2>
        </div>
      )}
    </div>
  );
}

interface LoginPageProps {
  userName?: string;
  avatarUrl?: string;
}

function LoginPage(props: LoginPageProps) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-white'>
      <div className='login__container max-w-[504px] w-full px-6'>
        
        {/* Avatar Section */}
        <LoginAvatar 
          imageUrl={props.avatarUrl} 
          name={props.userName}
        />

        {/* Login Form */}
        <div className='login__form flex flex-col gap-6'>
          
          <div className='form__title text-center mb-4'>
            <h1 className='text-4xl font-bold mb-2'>Welcome Back</h1>
            <p className='text-sm text-gray-600'>Sign in to your account</p>
          </div>

          <div className='form__input-group flex flex-col gap-2'>
            <label htmlFor='email' className='text-sm font-semibold'>
              Email
            </label>
            <input
              id='email'
              type='email'
              placeholder='Enter your email'
              className='
                border 
                border-gray-300 
                rounded-sm 
                px-4 
                py-3 
                text-sm
                focus:outline-none
                focus:border-blue-500
                transition-colors
              '
            />
          </div>

          <div className='form__input-group flex flex-col gap-2'>
            <label htmlFor='password' className='text-sm font-semibold'>
              Password
            </label>
            <input
              id='password'
              type='password'
              placeholder='Enter your password'
              className='
                border 
                border-gray-300 
                rounded-sm 
                px-4 
                py-3 
                text-sm
                focus:outline-none
                focus:border-blue-500
                transition-colors
              '
            />
          </div>

          <div className='form__actions flex flex-col gap-4 mt-6'>
            <button 
              className='
                bg-gradient-to-r 
                from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]
                text-white 
                font-bold 
                px-6 
                py-4 
                rounded-sm 
                text-sm
                hover:opacity-90
                transition-opacity
              '
            >
              Sign In
            </button>

            <div className='text-center'>
              <a href='#' className='text-sm text-blue-500 hover:underline'>
                Forgot password?
              </a>
            </div>

            <div className='text-center text-sm text-gray-600'>
              Don't have an account?{' '}
              <a href='#' className='text-blue-500 font-semibold hover:underline'>
                Sign up
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default LoginPage;
export { LoginAvatar };
