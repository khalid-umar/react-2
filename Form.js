const Form = () => (
  <>
    <div>
      <form>
        <h3>Login Page</h3>
        <div>
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </>
);

export default Form;

