import googlesignin from "../assets/googlelogo.png";
function AuthWithGoogle({onClick}) {
  return (
    <button onClick={onClick} className="cursor-pointer hover:bg-gray-200 flex items-center gap-5 justify-center border border-gray-400 p-1.5 rounded-full w-2/3">
      <img src={googlesignin} alt="" className="w-7" />
      <span className="font-mono text-lg text-gray-800">
        Continue with Google
      </span>
    </button>
  );
}

export default AuthWithGoogle;
