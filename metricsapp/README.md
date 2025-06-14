# Tauri Metrics - Desktop Application Template

A modern desktop application template built with **Tauri**, **React**, **TypeScript**, and **Storybook**. This project serves as a foundation for building cross-platform desktop applications using web technologies with a Rust backend.

## 🚀 Features

- **🦀 Tauri Framework**: Rust-powered desktop application with web frontend
- **⚛️ React + TypeScript**: Modern React application with full TypeScript support
- **📚 Storybook Integration**: Component development and documentation
- **💅 Styled Components**: CSS-in-JS styling solution
- **🎨 Reusable Components**: Pre-built UI components with stories
- **🔄 Frontend-Backend Communication**: Seamless integration between React and Rust
- **📱 Responsive Design**: Modern, mobile-friendly interface
- **🎯 Template Ready**: Easy to extend and customize for your own projects

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Rust** (latest stable version)
- **Tauri CLI** (will be installed via npm)

### System Dependencies

Follow the [Tauri Prerequisites Guide](https://tauri.app/v1/guides/getting-started/prerequisites) for your operating system.

## 🛠️ Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Install Rust dependencies** (if not already installed):
   ```bash
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```

## 🎮 Development

### Start the development server:

```bash
npm run tauri:dev
```

This will:
- Start the React development server
- Launch the Tauri application
- Enable hot-reload for both frontend and backend changes

### Run Storybook:

```bash
npm run storybook
```

Access Storybook at `http://localhost:6006` to view and develop components in isolation.

## 📦 Available Scripts

- `npm start` - Start React development server only
- `npm run tauri:dev` - Start Tauri development mode
- `npm run tauri:build` - Build the application for production
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production
- `npm test` - Run tests
- `npm run build` - Build React app for production

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## 🏗️ Project Structure

```
metricsapp/
├── src/                          # React frontend source
│   ├── components/               # Reusable UI components
│   │   ├── Button/              # Button component with stories
│   │   ├── Card/                # Card component with stories
│   │   ├── Header/              # Header component with stories
│   │   └── index.ts             # Component exports
│   ├── pages/                   # Application pages
│   │   └── WelcomePage.tsx      # Main welcome/demo page
│   ├── App.tsx                  # Main React component
│   ├── App.css                  # Global styles
│   └── index.tsx                # React entry point
├── src-tauri/                   # Tauri/Rust backend
│   ├── src/
│   │   └── main.rs              # Rust backend logic
│   ├── Cargo.toml               # Rust dependencies
│   ├── tauri.conf.json          # Tauri configuration
│   └── icons/                   # Application icons
├── .storybook/                  # Storybook configuration
│   ├── main.ts                  # Storybook config
│   └── preview.ts               # Global story settings
├── public/                      # Static assets
└── package.json                 # Node.js dependencies and scripts
```

## 🧩 Components

The template includes several reusable components with Storybook stories:

### Button Component
- Multiple variants (primary, secondary)
- Different sizes (small, medium, large)
- Disabled state support
- Styled with styled-components

### Card Component
- Customizable elevation levels
- Adjustable padding
- Hover effects
- Perfect for content display

### Header Component
- User authentication state
- Navigation elements
- Responsive design
- Integration with Button components

## 🔧 Customization

### Adding New Components

1. Create a new component directory in `src/components/`
2. Add the component file (`.tsx`)
3. Create a Storybook story file (`.stories.ts`)
4. Export the component in `src/components/index.ts`

### Adding Rust Backend Functions

1. Define new commands in `src-tauri/src/main.rs`:
   ```rust
   #[tauri::command]
   fn my_command(param: &str) -> String {
       // Your logic here
       format!("Result: {}", param)
   }
   ```

2. Register the command in the main function:
   ```rust
   .invoke_handler(tauri::generate_handler![my_command])
   ```

3. Call from React frontend:
   ```typescript
   import { invoke } from '@tauri-apps/api/tauri';
   
   const result = await invoke<string>('my_command', { param: 'value' });
   ```

## 🏗️ Building

### Development Build
```bash
npm run tauri:dev
```

### Production Build
```bash
npm run tauri:build
```

The built application will be available in `src-tauri/target/release/`.

## 🌍 Cross-Platform Support

Tauri supports building for multiple platforms:
- **Windows** (.exe, .msi)
- **macOS** (.app, .dmg)
- **Linux** (.deb, .rpm, .AppImage)

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Tauri](https://tauri.app/) - The framework that makes this possible
- [React](https://reactjs.org/) - The UI library
- [Storybook](https://storybook.js.org/) - Component development tool
- [Styled Components](https://styled-components.com/) - CSS-in-JS library
- [Rust](https://www.rust-lang.org/) - The backend language

---

**Template Status**: ✅ **READY FOR DEVELOPMENT**

This Tauri + React + TypeScript + Storybook template is fully configured and ready to use:

- ✅ **Tauri Desktop Application**: Working with hot-reload (`npm run tauri:dev`)
- ✅ **React + TypeScript Frontend**: Fully configured with modern tooling
- ✅ **Storybook Component Development**: Running on `http://localhost:6006` (`npm run storybook`)
- ✅ **Frontend-Backend Integration**: Demo commands working between React and Rust
- ✅ **Cross-Platform Build System**: Ready for Windows, macOS, and Linux builds
- ✅ **Component Library**: Pre-built Button, Card, and Header components with stories
- ✅ **TypeScript Support**: Full type safety across the entire application

**Happy coding! 🚀**
