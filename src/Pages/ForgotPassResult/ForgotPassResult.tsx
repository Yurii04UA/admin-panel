import AuthWindow from '../../Components/Auth/AuthWindow/AuthWindow';
import { Input } from '../../Components/Auth/Form/Input/Input';

export const ForgotPassResult = () => {
  return (
    <AuthWindow 
      isFooter={false} 
      isForgot={false}
      title={{
         title:"Forgot password?",
         subtitle:'Link to change your password has been sent to provided email if we have it inside our system'
      }}>
 
    </AuthWindow>
  )
}
