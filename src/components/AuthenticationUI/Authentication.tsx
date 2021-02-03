import React, { useRef, useState } from "react";
import Spinner from "../UI/Spinner/Spinner";
import { ReactComponent as EyeSVG } from "../Header/icons/evilEye.svg";

import styles from "./Authentication.module.scss";

const Authentication: React.FC<{ authenticate: (a: boolean) => void }> = (
  props
) => {
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setLoading(true);
    if (
      loginRef.current?.value === "admin" &&
      passwordRef.current?.value === "rogiTheGreat"
    ) {
      setTimeout(() => {
        props.authenticate(true);
        setLoading(false);
      }, 2000);
    } else {
      setTimeout(() => {
        setLoading(false);
        setShowError(true);
      }, 2000);
    }
  };

  const handleShowPassword = () => {
    if (passwordRef.current!.type === "text") {
      passwordRef.current!.type = "password";
    } else {
      passwordRef.current!.type = "text";
    }
  };

  return (
    <div className={styles.Container}>
      <div className={styles.AuthForm}>
        <img src="images/reactAdminkaLogoWhite.png" alt="logo" />
        {showError && (
          <div onClick={() => setShowError(false)} style={{ color: "red" }}>
            ERROR: login is not admin and password is not rogiTheGreat
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Логин</label>
            <input ref={loginRef} type="text" defaultValue="admin" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Пароль</label>
            <input
              ref={passwordRef}
              type="password"
              defaultValue="rogiTheGreat"
            />
            <div className={styles.EyeIcon} onClick={handleShowPassword}>
              <EyeSVG />
            </div>
          </div>
          <button disabled={loading}>{!loading ? "Войти" : <Spinner />}</button>
        </form>
      </div>
      <div className={styles.Image}></div>
    </div>
  );
};

export default Authentication;
