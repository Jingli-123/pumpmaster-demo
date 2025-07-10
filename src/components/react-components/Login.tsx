import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
// import { loginApi } from "../../api/auth";
const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClick = async () => {
    try{
    // for demo, I use demo token to login, but for real project, uncomment the following code
    // const response = await loginApi(username, password);
    // const {token, user} = response;
    // demo token 
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    localStorage.setItem('token', token);
    // localStorage.setItem('user', JSON.stringify(user));
    navigate('/dashboard');
    }catch(error){
        console.log("Login failed",error);
    }
    
  }
    return(
        <>
            <div className="flex flex-col items-center justify-center mt-32">
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <div className="flex flex-col items-center justify-center w-1/4 h-100%">
                <div className="flex flex-col items-start justify-center w-4/5 mt-6 mb-4">
                    <label htmlFor="username">Username</label>
                    <input 
                    className="mb-2 w-full h-8 border border-gray-300"
                    id="username" type="text" placeholder="Enter your username" 
                    value={username} onChange={handleUserChange} 
                    required />
                    </div>
                    <div className="flex flex-col items-start justify-start w-4/5">
                    <label htmlFor="password">Password</label>
                    <input 
                    className="mb-2 w-full h-8 border border-gray-300 "
                    id="password" type="text" placeholder="Enter your password" 
                    value={password} onChange={handlePasswordChange} 
                    required
                    />
                    
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-2/9 mt-6 mb-2">
                    <Button
                    buttonClass="bg-blue-500 hover:bg-blue-700 text-white font-sans text-sm w-full h-8 rounded"
                    text="Login"
                    onClick={onClick}
                    />
                </div>
                <p className="text-sm text-gray-400">Don't have an account? <a href="">Register</a></p>
        </div>
        </>
    )
}
export default Login;