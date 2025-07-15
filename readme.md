hiii



/frontend
│
├── /public
│   └── favicon.ico
│
└── /src
    ├── /assets            # Images, icons, fonts
    ├── /components        # Reusable UI components
    │   ├── Header.jsx
    │   ├── Footer.jsx
    │   ├── ThemeToggle.jsx
    │   ├── PostCard.jsx
    │   ├── Comment.jsx
    │   └── InputField.jsx
    │
    ├── /context            # Global state (Auth, Theme)
    │   ├── AuthContext.jsx
    │   └── ThemeContext.jsx
    │
    ├── /hooks               # Custom hooks
    │   └── useTheme.js
    │
    ├── /pages               # Main app pages (routes)
    │   ├── HomePage.jsx
    │   ├── PostPage.jsx
    │   ├── CreatePostPage.jsx
    │   ├── EditPostPage.jsx
    │   ├── LoginPage.jsx
    │   ├── RegisterPage.jsx
    │   ├── ForgotPasswordPage.jsx
    │   ├── ResetPasswordPage.jsx
    │   └── NotFoundPage.jsx
    │
    ├── /services            # API interactions (Axios)
    │   ├── api.js           # Axios instance
    │   └── authService.js
    │   └── postService.js
    │
    ├── /styles              # Global styling (if using CSS)
    │   ├── index.css        # Tailwind / global styles
    │   ├── light.css
    │   └── dark.css
    │
    ├── App.jsx              # App routes and layout
    ├── main.jsx             # ReactDOM entry point
    └── index.css            # Main CSS / Tailwind setup




/backend
│
├── /config                # Configuration files
│   └── db.js              # MongoDB connection
│
├── /controllers           # Business logic for routes
│   ├── authController.js
│   ├── postController.js
│   └── commentController.js
│
├── /models                # Mongoose schemas
│   ├── User.js
│   ├── Post.js
│   └── Comment.js
│
├── /middlewares           # Reusable middlewares
│   ├── authMiddleware.js   # JWT authentication
│   └── errorMiddleware.js
│
├── /routes                # Route files
│   ├── authRoutes.js
│   ├── postRoutes.js
│   └── commentRoutes.js
│
├── /utils                 # Utility functions (OTP, Email, etc.)
│   ├── otpGenerator.js
│   └── emailSender.js
│
├── /validators            # Input validation logic
│   └── userValidator.js
│
├── .env                   # Environment variables (PORT, DB_URI, JWT_SECRET)
├── package.json            # Backend dependencies
├── server.js               # Entry point for Express server
└── README.md               # Backend documentation
