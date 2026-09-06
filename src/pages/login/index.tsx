import { useState } from 'react';
import './login.css';

interface LoginFormState {
  email: string;
  password: string;
}

function LoginPage() {
  const [formData, setFormData] = useState<LoginFormState>({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Handle login here
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className='login__container'>
      <div className='login__content'>
        {/* Avatar Section */}
        <div className='login__avatar-section'>
          <div className='login__avatar'>
            <img
              src="./src/assets/photo.png"
              alt="Avatar"
              className='login__avatar-image'
            />
          </div>
        </div>

        {/* Form Section */}
        <div className='login__form-section'>
          <h1 className='login__title'>Welcome Back</h1>
          <p className='login__subtitle'>Sign in to your account</p>

          <form onSubmit={handleSubmit} className='login__form'>
            {/* Email Input */}
            <div className='login__form-group'>
              <label htmlFor='email' className='login__label'>
                Email Address
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                placeholder='Enter your email'
                className={`login__input ${errors.email ? 'login__input--error' : ''}`}
              />
              {errors.email && (
                <span className='login__error-message'>{errors.email}</span>
              )}
            </div>

            {/* Password Input */}
            <div className='login__form-group'>
              <label htmlFor='password' className='login__label'>
                Password
              </label>
              <div className='login__password-wrapper'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  name='password'
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder='Enter your password'
                  className={`login__input ${errors.password ? 'login__input--error' : ''}`}
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='login__show-password-btn'
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
              {errors.password && (
                <span className='login__error-message'>{errors.password}</span>
              )}
            </div>

            {/* Submit Button */}
            <button type='submit' className='login__submit-btn'>
              Sign In
            </button>
          </form>

          {/* Sign Up Link */}
          <div className='login__signup-link'>
            Don't have an account?{' '}
            <a href='/signup' className='login__link'>
              Sign Up
            </a>
          </div>

          {/* Forgot Password Link */}
          <div className='login__forgot-password'>
            <a href='/forgot-password' className='login__link'>
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
