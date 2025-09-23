import React, { useState, useRef, useCallback, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form, {
  Item,
  Label,
  ButtonItem,
  ButtonOptions,
  RequiredRule,
  EmailRule,
} from "devextreme-react/form";
import LoadIndicator from "devextreme-react/load-indicator";
import Button from "devextreme-react/button";
import notify from "devextreme/ui/notify";
import { useAuth } from "../../contexts/auth";

import "./LoginForm.scss";
import { ThemeContext } from "../../theme";

const passwordRef = React.createRef();
function getButtonStylingMode(theme) {
  return theme === "dark" ? "outlined" : "contained";
}
export default function LoginForm() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const formData = useRef({ email: "", password: "" });
  const themeContext = useContext(ThemeContext);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const { email, password } = formData.current;
      setLoading(true);

      const result = await signIn(email, password);
      if (!result.isOk) {
        setLoading(false);
        notify(result.message, "error", 2000);
      }
    },
    [signIn]
  );

  const onCreateAccountClick = useCallback(() => {
    navigate("/create-account");
  }, [navigate]);

  return (
    <div className='login-page'>
      <div className='login-container'>
        <div className='login-left'>
          <img
            src={
              themeContext?.theme === "dark"
                ? "/logo.svg"
                : "/logo-login-light.png"
            }
            alt='logo'
            className='logo'
          />
          <div className='login-data'>
            <h6 className='welcome-text'>Welcome to IGNITE</h6>
            <p className='sub-text'>
              Welcome back! Enter your details to continue.
            </p>
            <form className={"login-form"} onSubmit={onSubmit}>
              <Form formData={formData.current} disabled={loading}>
                <Item
                  dataField={"email"}
                  editorType={"dxTextBox"}
                  editorOptions={emailEditorOptions}
                >
                  <RequiredRule message='Email is required' />
                  <EmailRule message='Email is invalid' />
                  <Label text='Email' />
                </Item>

                <Item
                  dataField={"password"}
                  editorType={"dxTextBox"}
                  editorOptions={{
                    ...passwordEditorOptions,
                    onInitialized: (e) => (passwordRef.current = e.component),
                  }}
                >
                  <RequiredRule message='Password is required' />
                  <Label text='Password' />
                </Item>
              </Form>

        
              <div className='remember-forgot-row'>
                <div className='remember-me'>
                  <Form formData={formData.current}>
                    <Item
                      dataField={"rememberMe"}
                      editorType={"dxCheckBox"}
                      editorOptions={rememberMeEditorOptions}
                    >
                      <Label visible={false} />
                    </Item>
                  </Form>
                </div>
                <div className='forgot-link'>
                  <Link to='/reset-password'>Forgot password?</Link>
                </div>
              </div>

              <div className='form-submit'>
                <Form formData={formData.current}>
                  <ButtonItem>
                    <ButtonOptions
                      width='100%'
                      type='default'
                      useSubmitBehavior={true}
                    >
                      <span className='dx-button-text'>
                        {loading ? (
                          <LoadIndicator
                            width='24px'
                            height='24px'
                            visible={true}
                          />
                        ) : (
                          "Sign In"
                        )}
                      </span>
                    </ButtonOptions>
                  </ButtonItem>
                </Form>
              </div>
            </form>
            <div className='or-divider'>
              <span>Or sign in with</span>
            </div>
            <div className='microsoft-button'>
              <Button
                icon='/Microsoft-Icon.png'
                text=''
                stylingMode={getButtonStylingMode(themeContext?.theme)}
              />
            </div>
            <div className='signup-text'>
              <span>
                Don’t have account?{" "}
                <Button
                  className='btn-create-account'
                  text='Sign up'
                  onClick={onCreateAccountClick}
                  stylingMode={getButtonStylingMode(themeContext?.theme)}
                />
              </span>
            </div>
          </div>
        </div>
        <div>
          <video autoPlay loop muted playsInline className="login-image">
        <source src="/Login-2.mp4" type="video/mp4" />
      </video>
        </div>
      </div>
    </div>
  );
}

const emailEditorOptions = {
  stylingMode: "filled",
  placeholder: "emanualberzeber@gmail.com.",
  mode: "email",
};

const rememberMeEditorOptions = {
  text: "Remember me",
  elementAttr: { class: "form-text" },
};

const passwordEditorOptions = {
  stylingMode: "filled",
  mode: "password",

  buttons: [
    {
      name: "password",
      location: "after",
      options: {
        icon: "eyeopen",
        stylingMode: "text",
        onClick: function (e) {
          if (!passwordRef.current) return; 
          const currentMode = passwordRef.current.option("mode");
          const isPassword = currentMode === "password";

          passwordRef.current.option("mode", isPassword ? "text" : "password");
          e.component.option("icon", isPassword ? "eyeclose" : "eyeopen");
        },
      },
    },
  ],
};
