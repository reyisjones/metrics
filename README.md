# Metrics Dashboard

A modern, cross-platform desktop dashboard application built with the Tauri framework, featuring a React + TypeScript frontend and component-driven development with Storybook.

## 🚀 Overview

This project provides a comprehensive template and foundation for building desktop applications that require data visualization, metrics tracking, and dashboard functionality. Built with modern web technologies and packaged as a native desktop application using Tauri.

## ✨ Key Features

- **🦀 Tauri Framework**: Lightweight, secure desktop application with Rust backend
- **⚛️ React + TypeScript**: Modern frontend with full type safety
- **📊 Dashboard Ready**: Pre-configured for metrics and data visualization
- **📚 Storybook Integration**: Component-driven development and documentation
- **🎨 Modern UI Components**: Pre-built, reusable components with stories
- **🔄 Real-time Updates**: Ready for live data integration
- **📱 Responsive Design**: Works across different screen sizes
- **🌍 Cross-Platform**: Runs on Windows, macOS, and Linux
- **⚡ High Performance**: Rust backend for computationally intensive tasks

## 🏗️ Project Structure

```
metrics/
├── README.md                    # This file
├── .gitignore                   # Git ignore rules
└── metricsapp/                  # Main application directory
    ├── src/                     # React frontend source
    │   ├── components/          # Reusable UI components
    │   │   ├── Button/         # Button component with variants
    │   │   ├── Card/           # Card component for metrics display
    │   │   ├── Header/         # Application header
    │   │   └── index.ts        # Component exports
    │   ├── pages/              # Application pages
    │   │   └── WelcomePage.tsx # Main dashboard page
    │   ├── App.tsx             # Root React component
    │   └── index.tsx           # Application entry point
    ├── src-tauri/              # Tauri/Rust backend
    │   ├── src/main.rs         # Backend logic and API commands
    │   ├── Cargo.toml          # Rust dependencies
    │   └── tauri.conf.json     # Tauri configuration
    ├── .storybook/             # Storybook configuration
    ├── public/                 # Static assets
    └── package.json            # Node.js dependencies and scripts
```

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Rust** (latest stable version) - [Install guide](https://rustup.rs/)

### System Dependencies

Follow the [Tauri Prerequisites Guide](https://tauri.app/v1/guides/getting-started/prerequisites) for your operating system:

- **Windows**: Microsoft Visual Studio C++ Build Tools
- **macOS**: Xcode Command Line Tools
- **Linux**: Essential development packages

### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd metrics
   ```

2. **Navigate to the application directory**:
   ```bash
   cd metricsapp
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Install Rust** (if not already installed):
   ```bash
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   source ~/.cargo/env
   ```

5. **Start the development environment**:
   ```bash
   npm run tauri:dev
   ```

   This will:
   - Start the React development server
   - Launch the Tauri desktop application
   - Enable hot-reload for both frontend and backend

6. **Start Storybook** (in a separate terminal):
   ```bash
   npm run storybook
   ```
   
   Access the component library at `http://localhost:6006`

### First Run

After running `npm run tauri:dev`, you should see:

1. **Desktop Application Window**: The main Tauri application with your dashboard
2. **Console Output**: Development server logs and compilation status
3. **Hot Reload**: Changes to your code will automatically update the application

## 📦 Available Scripts

### Development Commands

| Command | Description |
|---------|-------------|
| `npm run tauri:dev` | Start the complete development environment |
| `npm start` | Start only the React development server |
| `npm run storybook` | Launch Storybook for component development |
| `npm test` | Run the test suite |

### Build Commands

| Command | Description |
|---------|-------------|
| `npm run tauri:build` | Build the desktop application for production |
| `npm run build` | Build the React application only |
| `npm run build-storybook` | Build Storybook as static files |

### Utility Commands

| Command | Description |
|---------|-------------|
| `npm run tauri` | Direct access to Tauri CLI commands |
| `npm run eject` | Eject from Create React App (⚠️ irreversible) |

## 🧩 Component Development

This project includes a comprehensive component library built with Storybook:

### Available Components

- **Button**: Flexible button with multiple variants (primary, secondary)
- **Card**: Perfect for displaying metrics and data
- **Header**: Application header with navigation and user controls

### Developing Components

1. **Create a new component**:
   ```bash
   mkdir src/components/MyComponent
   touch src/components/MyComponent/MyComponent.tsx
   touch src/components/MyComponent/MyComponent.stories.ts
   touch src/components/MyComponent/index.ts
   ```

2. **View in Storybook**:
   ```bash
   npm run storybook
   ```

3. **Use in your application**:
   ```typescript
   import { MyComponent } from './components';
   ```

## 🔧 Backend Integration

The Rust backend provides high-performance capabilities for:

- **Data Processing**: Handle large datasets efficiently
- **System Integration**: Access file system, network, and system APIs
- **Background Tasks**: Long-running processes without blocking the UI
- **Security**: Secure command execution with Tauri's security model

### Adding Backend Commands

1. **Define in Rust** (`src-tauri/src/main.rs`):
   ```rust
   #[tauri::command]
   fn process_metrics(data: Vec<f64>) -> String {
       // Your processing logic here
       format!("Processed {} data points", data.len())
   }
   ```

2. **Register the command**:
   ```rust
   .invoke_handler(tauri::generate_handler![process_metrics])
   ```

3. **Call from React**:
   ```typescript
   import { invoke } from '@tauri-apps/api/tauri';
   
   const result = await invoke<string>('process_metrics', { 
     data: [1.0, 2.0, 3.0] 
   });
   ```

## 🎨 Dashboard Customization

### Adding Metrics Widgets

1. Create new components for your specific metrics
2. Use the Card component as a base for consistent styling
3. Integrate with your data sources (APIs, databases, files)
4. Add real-time updates using React hooks

### Styling and Theming

- Components use inline styles for Storybook compatibility
- Extend or replace with your preferred styling solution
- Maintain consistency across components

## 🏗️ Building for Production

### Desktop Application

```bash
npm run tauri:build
```

This creates platform-specific installers:
- **Windows**: `.exe` and `.msi` files
- **macOS**: `.app` and `.dmg` files  
- **Linux**: `.deb`, `.rpm`, and `.AppImage` files

Build artifacts are located in `metricsapp/src-tauri/target/release/bundle/`

### Deployment

1. **Desktop Distribution**: Distribute the generated installers
2. **Storybook Documentation**: Deploy the built Storybook as a website
3. **CI/CD Integration**: Automate builds for multiple platforms

## 🛠️ Development Workflow

### Recommended Development Process

1. **Component Development**: Use Storybook to build and test components in isolation
2. **Page Assembly**: Compose components into dashboard pages
3. **Backend Integration**: Add Rust commands for data processing
4. **Testing**: Write tests for both components and backend logic
5. **Build & Test**: Create production builds and test on target platforms

### Best Practices

- **Component-First**: Build reusable components before pages
- **Type Safety**: Leverage TypeScript for better development experience
- **Performance**: Use Rust backend for heavy computations
- **Testing**: Test components in Storybook and integration in the app

## 🔐 Security Considerations

- Tauri provides a secure-by-default architecture
- Only explicitly defined commands are accessible from the frontend
- Review and validate all user inputs in Rust commands
- Follow Tauri's security best practices for production deployments

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Develop using Storybook for component work
4. Test with both `npm run tauri:dev` and `npm run storybook`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📚 Additional Resources

- [Tauri Documentation](https://tauri.app/guides/) - Complete Tauri framework guide
- [React Documentation](https://react.dev/) - React library documentation
- [Storybook Documentation](https://storybook.js.org/docs/) - Component development tool
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - TypeScript language guide
- [Rust Documentation](https://doc.rust-lang.org/) - Rust programming language

## 🐛 Troubleshooting

### Common Issues

1. **Rust not found**: Ensure Rust is installed and `~/.cargo/bin` is in your PATH
2. **Build failures**: Check that all system dependencies are installed
3. **Port conflicts**: Change ports in `package.json` scripts if needed
4. **Node modules**: Try deleting `node_modules` and running `npm install` again

### Getting Help

- Check the [Tauri Discord](https://discord.com/invite/tauri) for community support
- Review [GitHub Issues](https://github.com/tauri-apps/tauri/issues) for known problems
- Consult the documentation links above for detailed guides

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Tauri](https://tauri.app/) - The framework that powers this application
- [React](https://reactjs.org/) - The UI library
- [Storybook](https://storybook.js.org/) - Component development environment
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Rust](https://www.rust-lang.org/) - Systems programming language

---

**Status**: ✅ **Ready for Development**

This metrics dashboard template is fully configured and ready for customization. Start building your dashboard application today!
