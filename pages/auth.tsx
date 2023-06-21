import React from 'react';
import Header from 'layouts/Header';
import { useRouter } from 'next/router';
import { AuthContainer, LoginForm, SignUpForm } from 'components/domain/Auth';

const Auth: React.FC = () => {
  const router = useRouter();
  const { type } = router.query;
  const authElement = type === 'login' ? <LoginForm /> : <SignUpForm />;

  return (
    <>
      <Header />
      <AuthContainer page={`${type ? type : `login`}`}>
        {authElement}
      </AuthContainer>
    </>
  );
};

export default Auth;