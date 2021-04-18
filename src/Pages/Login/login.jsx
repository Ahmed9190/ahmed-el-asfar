import "./login.scss";
import Input from "./../../Components/custom-input/custom-input";
import Button from "./../../Components/custom-button/custom-button";

function Login() {
  return (
    <div className="login-page-container">
      <div className="login-container">
        <h1 className="login-title">تسجيل الدخول</h1>
        <form className="login-form">
          {/* <input type="text" value="اسم المستخدم" /> */}
          {/* <input type="password" value="كلمة المرور" /> */}
          <Input label="اسم المستخدم" />
          <Input label="كلمة المرور" />
          <Button>سجل الدخول</Button>
        </form>
        <h4 className="create-new-account">إنشاء حساب جديد ؟</h4>
      </div>
    </div>
  );
}

export default Login;
