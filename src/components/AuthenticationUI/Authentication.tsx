import React, { useRef, useState } from "react";
import Spinner from "../UI/Spinner/Spinner";

import styles from "./Authentication.module.scss";

const Authentication: React.FC<{ authenticate: (a: boolean) => void }> = (
  props
) => {
  const [loading, setLoading] = useState(false);
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
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
    }
  };

  return (
    <div className={styles.Container}>
      <div className={styles.AuthForm}>
        <img src="images/reactAdminkaLogoWhite.png" alt="logo" />
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Логин</label>
            <input ref={loginRef} type="text" value="admin" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Пароль</label>
            <input ref={passwordRef} type="password" value="rogiTheGreat" />
          </div>
          <button disabled={loading}>{!loading ? "Войти" : <Spinner />}</button>
        </form>
      </div>
      <div className={styles.Image}></div>
    </div>
  );
};

export default Authentication;
