import { createBrowserRouter} from 'react-router-dom'
import { Home } from '@/pages/SignUp/Home'
import { SignUp } from '@/pages/SignUp'
import App from '@/App'
import { Activation } from '@/pages/Activation'
import { User } from '@/pages/User'
import { LogIn } from '@/pages/LogIn'
import { PasswordResetRequest } from '@/pages/PasswordReset/Request'
import { SetPassword } from '@/pages/PasswordReset/SetPassword'


export default createBrowserRouter([
    {
        path:"/",
        Component: App,
        children: [
            {
                path:"/",
                index:true,
                Component: Home
              },
              {
                path:"/signup",
                Component: SignUp
              },
              {
                path:"/activation/:token",
                Component: Activation
              },
              {
                path:"/user/:id",
                Component: User
              },
              {
                path:"/login",
                Component: LogIn
              },
              {
                path:"/password-reset/request",
                Component: PasswordResetRequest
              },
              {
                path: "/password-reset/set",
                Component: SetPassword
              },
        ]
    }
  ])