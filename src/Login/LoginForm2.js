import React, { useCallback, useState } from "react";

const useFormHandler = initialState => {
  const [values, setValues] = useState(initialState);

  const handleChange = useCallback(
    ({ target: { name, value } }) =>
      setValues(prevState => ({ ...prevState, [name]: value })),
    []
  );

  return {
    handleChange,
    values
  };
};
]

const LoginForm = () => {
  const { values, handleChange } = useFormHandler({
    username: "",
    password: ""
  });

  const [rememberUser, toggleRememberUser] = useToggle(false);

  const handleSubmit = e => {
    e.preventDefault();
    const formProps = { ...values, rememberUser };
    alert(JSON.stringify(formProps, null, 4));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
        value={values.username}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        value={values.password}
      />
      <label htmlFor="rememberUser">Remember Me</label>
      <input
        name="rememberUser"
        checked={rememberUser}
        onChange={toggleRememberUser}
        type="checkbox"
        value={rememberUser}
      />
      <a href="#">Forgot Password</a>
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
