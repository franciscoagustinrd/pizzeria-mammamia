import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

 const Register = () => {
 const { user } = useContext(UserContext);
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [confirmPassword, setConfirmPassword] = useState("");
 const [message, setMessage] = useState("");
 const [passwordError, setPasswordError] = useState("");
 const [confirmPasswordError, setConfirmPasswordError] = useState("");
 if (user.token) {
  return <Navigate to="/" />;
 }
 const validatePassword = (password) => {
  if (password.length < 6) {
   return "Password must be at least 6 characters long.";
  }
  return "";
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  const passwordValidationError = validatePassword(password);

  if (!email || !password || !confirmPassword) {
   setMessage("All fields are required.");
  } else if (passwordValidationError) {
   setPasswordError(passwordValidationError);
  } else if (password !== confirmPassword) {
   setConfirmPasswordError("The passwords do not match");
  } else {
   setMessage("Successful registration");
   setPasswordError("");
  }
 };

 return (
  <>
   <div className="footer-fix">
    <div className="container">
     <div className="row">
      <div className="col-lg-6 col-xs-12 p-5 mx-auto ">
       <h1 style={{ paddingTop: "70px", color: "#000", textAlign: "left" }}>
        Register
       </h1>
       <Form onSubmit={handleSubmit}>
        <Form.Group>
         <Form.Label>Email</Form.Label>
         <Form.Control
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
         />
        </Form.Group>
        <Form.Group>
         <Form.Label>Password</Form.Label>
         <Form.Control
          type="password"
          placeholder="Enter at less 6 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
         />
         {passwordError && <p>{passwordError}</p>}
        </Form.Group>
        <Form.Group>
         <Form.Label>Confirm password</Form.Label>
         <Form.Control
          type="password"
          placeholder="Repeat your 6 characters"
          value={confirmPassword}
          onChange={(e) => {
           setConfirmPassword(e.target.value);
           const passwordValidationError = validatePassword(password);
           setConfirmPasswordError(passwordValidationError);
          }}
          required
         />
         {confirmPasswordError && (
          <p
           className="mt-1 alert alert-danger"
           style={{ textAlign: "center" }}
          >
           {confirmPasswordError}
          </p>
         )}
        </Form.Group>
        <Button
         variant="primary"
         type="submit"
         className="btn-primary"
         style={{ marginTop: "10px" }}
        >
         Register
        </Button>
        {message ? (
         <p
          className="mt-3 alert alert-success"
          style={{ textAlign: "center" }}
         >
          {message}
         </p>
        ) : null}
       </Form>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};

export default Register;
