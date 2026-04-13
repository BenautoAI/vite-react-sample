import type { Meta, StoryObj } from '@storybook/react-vite'
import LoginPage from './index'

const meta: Meta<typeof LoginPage> = {
  title: 'Pages/LoginPage',
  component: LoginPage,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof LoginPage>

export const Default: Story = {
  args: {
    onSignIn: (email, password, rememberMe) => {
      console.log('Sign in:', { email, password, rememberMe })
    },
    onForgotPassword: () => {
      console.log('Forgot password clicked')
    },
    onSignUp: () => {
      console.log('Sign up clicked')
    },
  },
}
