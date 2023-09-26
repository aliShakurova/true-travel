import { Link } from "react-router-dom";

function LoginPage() {
  return (
  <div className="flex items-center justify-around grow mt-4">
    <div className="-mt-64">
    <h1 className="text-4xl text-center mb-4">Login</h1>
    <form className="max-w-md mx-auto">
        <input type="email" placeholder="your@email.com" />
        <input type="password" placeholder="password" />
        <button className="primary">Login</button>
        <div className="text-center text-gray-400 py-2">
            Do not have account yet? <Link to={'/register'} className="underline text-black">Register</Link> 
        </div>
    </form>
    </div>
    </div>
  );
}

export default LoginPage;
