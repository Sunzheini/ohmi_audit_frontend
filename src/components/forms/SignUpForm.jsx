function SignUpForm(){
    return (
        <form>
        <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
        </div>
         <div>
            <label htmlFor="first_name">First Name:</label>
            <input type="text" id="first_name" name="first_name" required />
         </div>
        <div>
            <label htmlFor="last_name">Last Name:</label>
            <input type="text" id="last_name" name="last_name" required />
        </div>
        <div>
            <label htmlFor="password1">Password:</label>
            <input type="password1" id="password1" name="password1" required />
        </div>
        <div>
            <label htmlFor="password2">Confirm Password:</label>
            <input type="password2" id="password2" name="password2" required />
        </div>

        <button type="submit">Sign Up</button>
        </form>
    );
}

export default SignUpForm;