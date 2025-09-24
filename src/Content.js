import { Routes, Route, Navigate } from "react-router-dom";
import appInfo from "./app-info";
import routes from "./app-routes";
import { SideNavOuterToolbar as SideNavBarLayout, SingleCard } from "./layouts";
import { AppFooter } from "./components";
import {
  LoginForm,
  ResetPasswordForm,
  ChangePasswordForm,
  CreateAccountForm,
} from "./components";

export default function Content() {
  return (
    <Routes>
      {/* Auth Layout (SingleCard) */}
      <Route path='/login' element={<LoginForm />} />
      <Route
        path='/create-account'
        element={
          <SingleCard title='Sign Up'>
            <CreateAccountForm />
          </SingleCard>
        }
      />
      <Route
        path='/reset-password'
        element={
          <SingleCard
            title='Reset Password'
            description='Please enter the email address that you used to register, and we will send you a link to reset your password via Email.'
          >
            <ResetPasswordForm />
          </SingleCard>
        }
      />
      <Route
        path='/change-password/:recoveryCode'
        element={
          <SingleCard title='Change Password'>
            <ChangePasswordForm />
          </SingleCard>
        }
      />

      {/* App Layout (SideNavBarLayout) */}
      <Route
        path='/*'
        element={
          <SideNavBarLayout title={appInfo.title}>
            <Routes>
              {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
              <Route path='*' element={<Navigate to='/home' />} />
            </Routes>
            <AppFooter>
              Copyright © 2011-{new Date().getFullYear()} {appInfo.title} Inc.
              <br />
              All trademarks or registered trademarks are property of their
              respective owners.
            </AppFooter>
          </SideNavBarLayout>
        }
      />
    </Routes>
  );
}
