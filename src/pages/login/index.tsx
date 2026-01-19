import { useState, FormEvent } from 'react';

interface LoginFormData {
  email: string;
  password: string;
}

function LoginPage() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<Partial<LoginFormData>>({});

  const handleInputChange = (field: keyof LoginFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<LoginFormData> = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Form is valid, proceed with login logic
      console.log('Login attempt with:', formData);
      // Add your login API call here
    }
  };

  return (
    <div className="
      login__container
      flex 
      items-center 
      justify-center 
      min-h-screen 
      bg-red-500
    ">
      <div className="
        login__card
        w-full 
        max-w-md 
        p-8 
        bg-[#242424] 
        rounded-lg 
        shadow-2xl 
        border 
        border-gray-800
      ">
        <div className="login__header text-center mb-8">
          <h1 className="
            text-4xl 
            font-bold 
            bg-gradient-to-r 
            from-[#6EE7B7] 
            via-[#3B82F6] 
            to-[#9333EA] 
            bg-clip-text 
            text-transparent
          ">
            Welcome Back
          </h1>
          <p className="text-gray-400 mt-2">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="login__form space-y-6">
          <div className="form__field">
            <label 
              htmlFor="email" 
              className="
                form__label
                block 
                text-sm 
                font-medium 
                text-gray-300 
                mb-2
              "
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`
                form__input
                w-full 
                px-4 
                py-3 
                bg-[#1a1a1a] 
                border 
                ${errors.email ? 'border-red-500' : 'border-gray-700'}
                rounded-lg 
                text-white 
                placeholder-gray-500
                focus:outline-none 
                focus:border-[#3B82F6] 
                focus:ring-2 
                focus:ring-[#3B82F6] 
                focus:ring-opacity-50
                transition-all
              `}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="form__error text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="form__field">
            <label 
              htmlFor="password" 
              className="
                form__label
                block 
                text-sm 
                font-medium 
                text-gray-300 
                mb-2
              "
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className={`
                form__input
                w-full 
                px-4 
                py-3 
                bg-[#1a1a1a] 
                border 
                ${errors.password ? 'border-red-500' : 'border-gray-700'}
                rounded-lg 
                text-white 
                placeholder-gray-500
                focus:outline-none 
                focus:border-[#3B82F6] 
                focus:ring-2 
                focus:ring-[#3B82F6] 
                focus:ring-opacity-50
                transition-all
              `}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="form__error text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="
            form__options
            flex 
            items-center 
            justify-between
          ">
            <label className="form__remember flex items-center">
              <input
                type="checkbox"
                className="
                  w-4 
                  h-4 
                  text-[#3B82F6] 
                  bg-[#1a1a1a] 
                  border-gray-700 
                  rounded 
                  focus:ring-[#3B82F6] 
                  focus:ring-2
                "
              />
              <span className="ml-2 text-sm text-gray-400">Remember me</span>
            </label>
            <a href="#" className="
              form__forgot
              text-sm 
              text-[#3B82F6] 
              hover:text-[#6EE7B7] 
              transition-colors
            ">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="
              form__submit
              w-full 
              py-3 
              bg-gradient-to-r 
              from-[#6EE7B7] 
              via-[#3B82F6] 
              to-[#9333EA] 
              text-white 
              font-semibold 
              rounded-lg 
              hover:opacity-90 
              focus:outline-none 
              focus:ring-4 
              focus:ring-[#3B82F6] 
              focus:ring-opacity-50
              transition-all
              transform
              hover:scale-[1.02]
            "
          >
            Sign In
          </button>

          <div className="form__footer text-center mt-6">
            <p className="text-gray-400 text-sm">
              Don't have an account?{' '}
              <a href="#" className="
                form__signup
                text-[#3B82F6] 
                hover:text-[#6EE7B7] 
                font-medium 
                transition-colors
              ">
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
