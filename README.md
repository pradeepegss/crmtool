my-app/
├── public/                      # Static assets (images, favicon, etc.)
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── ui/                  # Atomic design or generic UI (e.g., Button, Modal)
│   │   └── layout/              # Header, Footer, Sidebar, etc.
│   ├── features/                # Feature-based folders (like Redux slices or context)
│   │   └── chat/                # Example feature module
│   │       ├── components/      # Chat-specific UI components
│   │       ├── hooks/           # Custom hooks related to chat
│   │       └── chatSlice.js     # Redux slice or logic
│   ├── pages/                   # Next.js pages
│   │   ├── _app.js              # Global config (Tailwind, PrimeReact CSS, Providers)
│   │   ├── index.js             # Home page
│   │   └── login.js             # Example page
│   ├── styles/                  # Tailwind + custom global styles
│   │   ├── globals.css
│   │   └── tailwind.css
│   ├── lib/                     # Utilities, helpers, API clients
│   │   ├── api.js               # Axios or fetch wrapper
│   │   └── auth.js              # Auth-related logic
│   ├── hooks/                   # Global custom hooks
│   ├── context/                 # React contexts (auth, theme, etc.)
│   ├── store/                   # Redux or Zustand store setup
│   │   └── index.js
│   └── config/                  # Config files (constants, env setup)
│       └── prime-react.js       # PrimeReact theme or setup
├── .env.local                   # Local environment variables
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── next.config.js
