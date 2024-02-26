import { SignInWithGoogle } from "./Auth";

function Login() {
    return (
        <>
            <h1>Login human</h1>
            <label htmlFor="email">Email:</label>
            <input type="text" placeholder="user@example.com" id="email" />
            <label htmlFor="password">Password:</label>
            <input type="text" placeholder="Strongpassword123" id="password" />
            <button>Login</button>
            <SignInWithGoogle />
        </>
    );
}

export default Login;
