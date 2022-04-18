import "./register.css";

function Register() {
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
                        <input placeholder="Username" className="logoinInput" />
                        <input placeholder="Email" className="logoinInput" />
                        <input placeholder="Password" className="logoinInput" />
                        <input placeholder="Password Again" className="logoinInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">
                            Log into Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
