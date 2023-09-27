import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/login", { email, password });
      setUser(response.data);
      alert("Login successful");
      setRedirect(true);
    } catch (err) {
      alert("Login failed");
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="flex items-center justify-around grow mt-4">
      <div className="-mt-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="primary">Login</button>
          <div className="text-center text-gray-400 py-2">
            Do not have account yet?{" "}
            <Link to={"/register"} className="underline text-black">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
