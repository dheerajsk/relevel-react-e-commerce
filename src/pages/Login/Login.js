import "./Login.css";

function Login() {
  function handleLogin() {}

  return (
    <div className="login-container">
      <h3>Please login.</h3>
      <form onSubmit={handleLogin} className="login-form" action="">
        <div className="mb-3">
          <label className="form-label" htmlFor="">
            Email
          </label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="">
            Password
          </label>
          <input type="password" className="form-control" />
        </div>

        <button type="submit" className="float-end btn btn-primary">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;
