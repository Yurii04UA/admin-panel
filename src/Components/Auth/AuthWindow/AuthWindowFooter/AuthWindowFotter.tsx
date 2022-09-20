import "./AuthWindowFooter.scss";

const AuthWindowFooter = () => {
  return (
    <div className="footer">
      <div className="btn-wrapper">
        <div>Forgot your password?</div>
        <button className="btn-footer">Click!</button>
      </div>
      <div className="btn-wrapper">
        <div>Don't have an account?</div>
        <button className="btn-footer">Sing up</button>
      </div>
    </div>
  );
};

export default AuthWindowFooter;
