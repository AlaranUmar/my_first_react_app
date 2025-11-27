import Input from "../components/Input";
import googlesignin from "../assets/googlelogo.png"
function Login() {
  return (
    <div className="min-h-screen from-blue-200 to-blue-100 bg-linear-270 flex justify-center items-center px-3">
      <div className="w-lg bg-gray-100 border-2 border-blue-300 rounded-2xl space-y-2">
        <div className="text py-3">
          <h1 className="text-center font-mono text-cyan-950 text-xl font-semibold">
            Login to get started
          </h1>
        </div>
        <form className="flex flex-col gap-4 px-3">
          <Input label="Email" type="email" placeholder="johndoe@example.com" />
          <Input label="Password" type="password" placeholder="************" />
          <button
            type="button"
            className="font-mono w-3/4 self-center bg-blue-500 text-gray-200 rounded-lg py-1 transition-all cursor-pointer hover:scale-98"
          >
            Login with Email
          </button>
        </form>
        <div className="footer flex flex-col items-center gap-3">
          <hr className="border border-gray-300 w-8/9 mt-3" />
          <div className="flex items-center justify-evenly border border-gray-400 p-1.5 rounded-full w-1/2">
            <img src={googlesignin} alt="" className="w-8" />
            <span>Login with Google</span>
          </div>
          Dont have an account? <a href="">SignUp</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
