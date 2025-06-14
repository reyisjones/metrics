import React from 'react';
import { Button } from '../Button';

interface User {
  name: string;
}

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header: React.FC<HeaderProps> = ({ user, onLogin, onLogout, onCreateAccount }) => {
  const headerStyles = {
    fontFamily: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    padding: '15px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const logoStyles = {
    display: 'flex',
    alignItems: 'center',
  };

  const titleStyles = {
    fontWeight: 900,
    fontSize: '20px',
    lineHeight: 1,
    margin: '6px 0 6px 10px',
    display: 'inline-block',
    color: '#333',
  };

  const navStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  };

  const welcomeStyles = {
    color: '#333',
    fontSize: '14px',
  };

  return (
    <header style={headerStyles}>
      <div style={logoStyles}>
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="m24.593 11.862-2.448-2.448a1 1 0 0 0-1.414 0L7.808 22.337c-.39.39-.39 1.024 0 1.414l2.448 2.448a1 1 0 0 0 1.414 0L24.593 13.276c.39-.39.39-1.024 0-1.414z"
              fill="#FF6900"
            />
            <path
              d="m16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
              fill="#1EA7FD"
            />
            <path
              d="m12.207 22.207c.391.391 1.024.391 1.414 0l9.9-9.9c.391-.391.391-1.024 0-1.414s-1.024-.391-1.414 0l-9.9 9.9c-.391.391-.391 1.024 0 1.414z"
              fill="#FFFFFF"
            />
          </g>
        </svg>
        <h1 style={titleStyles}>Tauri Metrics</h1>
      </div>
      <div style={navStyles}>
        {user ? (
          <>
            <span style={welcomeStyles}>
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </header>
  );
};
