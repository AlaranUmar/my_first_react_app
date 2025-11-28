import { useState } from "react";
import AuthWithGoogle from "../components/AuthWithGoogle";
import Input from "../components/Input";
import { signInWithGoogle, signUpWithEmail } from "../supabase/auth";
function Signup() {
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      await signUpWithEmail(email, password, username);
      setPassword("");
      setEmail("");
      setUsername("");
    } catch (error) {
      console.error(error);
    }
  }
  async function handleGoogleSubmit() {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error(error.message);
    }
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  return (
    <div className="min-h-screen from-blue-200 to-blue-100 bg-linear-270 flex justify-center items-center px-3">
      <div className="w-lg bg-gray-100 border-2 border-blue-300 rounded-2xl space-y-2">
        <div className="text py-3">
          <h1 className="text-center font-mono text-cyan-950 text-xl font-semibold">
            Register your account
          </h1>
        </div>
        <form className="flex flex-col gap-4 px-4 py-3" onSubmit={handleSubmit}>
          <Input
            label="Username"
            type="text"
            placeholder="John"
            autoComplete="given-name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            label="Email"
            type="email"
            placeholder="johndoe@example.com"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            placeholder="************"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="font-mono w-3/4 self-center bg-blue-500 text-gray-200 rounded-lg py-1 transition-all cursor-pointer hover:scale-98">
            Signup with Email
          </button>
        </form>
        <div className="footer flex flex-col items-center gap-3">
          <hr className="border border-gray-300 w-8/9 mt-3" />
          <AuthWithGoogle onClick={handleGoogleSubmit} />
          <p className="text-gray-800 mb-3 text-sm">
            Already have an account?{" "}
            <a href="" className="hover:underline text-blue-500">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
