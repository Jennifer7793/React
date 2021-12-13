import React from 'react';

const UserGreeting = (props) => {
  const { name } = props;
  return (
    <h1 className="user">
      {name}
      登入成功
    </h1>
  );
};
const GuestGreeting = () => {
  return <h1 className="guest">Please sign up.</h1>;
};

const Example5 = () => {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const atClick = () => {
    setLoggedIn(!isLoggedIn);
  };
  return (
    <section data-name="Example5">
      <button onClick={atClick}>{isLoggedIn ? '登出' : '登入'}</button>
      {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
      {isLoggedIn && <UserGreeting name="milkmidi" />}
    </section>
  );
};
export default Example5;
