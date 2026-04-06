import { useState } from "react";
import { validateEmail, validatePassword } from "../utils/validations";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handleEmailBlur(e: React.KeyboardEvent<HTMLInputElement>) {
    if (validateEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Invalid email format");
    }
  }

  function handlePasswordBlur(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Tab") {
      return;
    }
    if (validatePassword(password)) {
      setPasswordError("");
    } else {
      setPasswordError("Invalid password format");
    }
  }

  function handleLogin() {
    alert(`Login successful! ${email} ${password}`);
  }

  return (
    <div className="flex flex-col gap-4 w-[400px] mx-auto items-center justify-center h-screen">
      <div className="w-full">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Email Address
        </label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          onKeyUp={handleEmailBlur}
          className={`${
            emailError ? `bg-red-200` : `bg-gray-50`
          } border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
          placeholder="name@company.com"
        />
        {emailError && (
          <p className="text-sm italic text-red-500">{emailError}</p>
        )}
      </div>
      <div className="w-full">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          onKeyUp={handlePasswordBlur}
          className={`${
            passwordError ? `bg-red-200` : `bg-gray-50`
          } border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
          placeholder="**************"
        />
        {passwordError && (
          <p className="text-sm italic text-red-500">{passwordError}</p>
        )}
      </div>
      <button
        disabled={
          email == "" ||
          password == "" ||
          Boolean(emailError) ||
          Boolean(passwordError)
        }
        className="w-full"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}
