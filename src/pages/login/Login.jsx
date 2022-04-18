import "./login.css";

function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">GGeabuSocial</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you GGeabuSocial.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" type="Email" className="logoinInput" />
                        <input placeholder="Password" type="Password" className="logoinInput" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
