import React, { useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import { Button, Card, Header } from '../components';

interface User {
  name: string;
}

export const WelcomePage: React.FC = () => {
  const [user, setUser] = useState<User | undefined>();
  const [greetMsg, setGreetMsg] = useState('');
  const [name, setName] = useState('');

  const greet = async () => {
    if (name) {
      try {
        const message = await invoke<string>('greet', { name });
        setGreetMsg(message);
      } catch (error) {
        console.error('Error calling Tauri command:', error);
        setGreetMsg('Error: Could not connect to Tauri backend');
      }
    }
  };

  const handleLogin = () => {
    setUser({ name: 'Demo User' });
  };

  const handleLogout = () => {
    setUser(undefined);
  };

  const handleCreateAccount = () => {
    setUser({ name: 'New User' });
  };

  const containerStyles = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  };

  const mainStyles = {
    padding: '40px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const titleStyles = {
    textAlign: 'center' as const,
    color: 'white',
    fontSize: '2.5rem',
    marginBottom: '2rem',
    fontWeight: 300,
  };

  const subtitleStyles = {
    textAlign: 'center' as const,
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '1.2rem',
    marginBottom: '3rem',
    lineHeight: 1.6,
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem',
  };

  const demoSectionStyles = {
    background: 'white',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  };

  const sectionTitleStyles = {
    color: '#333',
    marginBottom: '1rem',
    fontSize: '1.5rem',
  };

  const buttonGroupStyles = {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap' as const,
    marginBottom: '1rem',
  };

  const tauriDemoStyles = {
    background: '#f8f9fa',
    padding: '1rem',
    borderRadius: '8px',
    marginTop: '1rem',
  };

  const greetMessageStyles = {
    color: '#28a745',
    fontWeight: 500,
    marginTop: '1rem',
  };

  const inputStyles = {
    padding: '8px 12px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    marginRight: '8px',
    width: '200px',
  };

  const listStyles = {
    color: '#666',
    lineHeight: 1.6,
  };

  return (
    <div style={containerStyles}>
      <Header
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
        onCreateAccount={handleCreateAccount}
      />
      
      <main style={mainStyles}>
        <h1 style={titleStyles}>Welcome to Tauri Metrics</h1>
        <p style={subtitleStyles}>
          A modern desktop application built with Tauri, React, and TypeScript.
          This template showcases reusable components developed with Storybook.
        </p>

        <div style={gridStyles}>
          <div style={demoSectionStyles}>
            <h2 style={sectionTitleStyles}>🎨 UI Components</h2>
            <p>These components are built with Storybook and can be reused across the application:</p>
            
            <h4>Buttons</h4>
            <div style={buttonGroupStyles}>
              <Button label="Primary" primary />
              <Button label="Secondary" />
              <Button label="Large" size="large" />
              <Button label="Small" size="small" />
              <Button label="Disabled" disabled />
            </div>
          </div>

          <div style={demoSectionStyles}>
            <h2 style={sectionTitleStyles}>📦 Card Components</h2>
            <Card title="Sample Card" elevation="medium" hoverable>
              This is a reusable card component with customizable elevation,
              padding, and hover effects. Perfect for displaying structured content.
            </Card>
          </div>

          <div style={demoSectionStyles}>
            <h2 style={sectionTitleStyles}>🦀 Tauri Integration</h2>
            <p>Test the connection between React frontend and Rust backend:</p>
            
            <div style={tauriDemoStyles}>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyles}
              />
              <Button label="Greet" onClick={greet} primary />
              {greetMsg && <p style={greetMessageStyles}>{greetMsg}</p>}
            </div>
          </div>

          <div style={demoSectionStyles}>
            <h2 style={sectionTitleStyles}>🎯 Features</h2>
            <ul style={listStyles}>
              <li>✅ Tauri desktop application framework</li>
              <li>✅ React with TypeScript frontend</li>
              <li>✅ Storybook for component development</li>
              <li>✅ Modern responsive design</li>
              <li>✅ Rust backend integration</li>
            </ul>
          </div>
        </div>

        <div style={demoSectionStyles}>
          <h2 style={sectionTitleStyles}>🚀 Getting Started</h2>
          <p>To extend this template for your own projects:</p>
          <ol style={listStyles}>
            <li>Add new components in the <code>src/components</code> directory</li>
            <li>Create Storybook stories for each component</li>
            <li>Implement Rust backend functions in <code>src-tauri/src/main.rs</code></li>
            <li>Use the Tauri API to communicate between frontend and backend</li>
            <li>Build your desktop application with <code>npm run tauri:build</code></li>
          </ol>
        </div>
      </main>
    </div>
  );
};
