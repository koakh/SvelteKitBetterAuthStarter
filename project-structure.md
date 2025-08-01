src/
├── app.html                 # Main HTML template
├── app.css                  # Global styles
├── hooks.client.js          # Client-side hooks
├── hooks.server.js          # Server-side hooks
├── service-worker.js        # Service worker (optional)
│
├── lib/
│   ├── client/              # Client-only code
│   │   ├── stores/          # Svelte stores
│   │   │   ├── auth.svelte.js
│   │   │   ├── theme.svelte.js
│   │   │   └── cart.svelte.js
│   │   ├── utils/           # Client utilities
│   │   │   ├── validation.js
│   │   │   ├── formatting.js
│   │   │   └── api-client.js
│   │   ├── components/      # Reusable components
│   │   │   ├── ui/          # Basic UI components
│   │   │   │   ├── Button.svelte
│   │   │   │   ├── Modal.svelte
│   │   │   │   └── Input.svelte
│   │   │   ├── forms/       # Form components
│   │   │   │   ├── ContactForm.svelte
│   │   │   │   └── LoginForm.svelte
│   │   │   └── layout/      # Layout components
│   │   │       ├── Header.svelte
│   │   │       ├── Footer.svelte
│   │   │       └── Sidebar.svelte
│   │   └── actions/         # Client-side actions
│   │       ├── click-outside.js
│   │       └── focus-trap.js
│   │
│   ├── server/              # Server-only code
│   │   ├── database/        # Database related
│   │   │   ├── connection.js
│   │   │   ├── schema.sql
│   │   │   └── migrations/
│   │   ├── auth/            # Authentication logic
│   │   │   ├── jwt.js
│   │   │   ├── session.js
│   │   │   └── providers.js
│   │   ├── email/           # Email services
│   │   │   ├── templates/
│   │   │   └── sender.js
│   │   ├── utils/           # Server utilities
│   │   │   ├── validation.js
│   │   │   ├── encryption.js
│   │   │   └── logger.js
│   │   └── api/             # API helpers
│   │       ├── external-apis.js
│   │       └── rate-limiting.js
│   │
│   ├── shared/              # Code that works on both client and server
│   │   ├── constants.js     # App constants
│   │   ├── types.js         # TypeScript types (if using TS)
│   │   ├── schemas/         # Validation schemas
│   │   │   ├── user.js
│   │   │   └── product.js
│   │   └── utils/           # Universal utilities
│   │       ├── date.js
│   │       ├── slugify.js
│   │       └── math.js
│   │
│   └── config/              # Configuration
│       ├── database.js
│       ├── email.js
│       └── app.js
│
├── routes/                  # File-based routing
│   ├── +layout.svelte       # Root layout
│   ├── +layout.js           # Root layout load function
│   ├── +page.svelte         # Homepage
│   ├── +page.js             # Homepage load function
│   ├── +error.svelte        # Error page
│   │
│   ├── about/
│   │   └── +page.svelte
│   │
│   ├── blog/
│   │   ├── +layout.svelte   # Blog layout
│   │   ├── +page.svelte     # Blog listing
│   │   ├── +page.server.js  # Server load for blog listing
│   │   └── [slug]/
│   │       ├── +page.svelte
│   │       └── +page.server.js
│   │
│   ├── dashboard/
│   │   ├── +layout.svelte
│   │   ├── +layout.server.js # Auth check
│   │   ├── +page.svelte
│   │   └── settings/
│   │       └── +page.svelte
│   │
│   ├── api/                 # API routes
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   └── +server.js
│   │   │   └── logout/
│   │   │       └── +server.js
│   │   ├── users/
│   │   │   ├── +server.js   # GET, POST /api/users
│   │   │   └── [id]/
│   │   │       └── +server.js # GET, PUT, DELETE /api/users/[id]
│   │   └── products/
│   │       └── +server.js
│   │
│   └── (auth)/              # Route groups
│       ├── +layout.svelte   # Auth layout
│       ├── login/
│       │   ├── +page.svelte
│       │   └── +page.server.js
│       └── register/
│           ├── +page.svelte
│           └── +page.server.js
│
├── static/                  # Static assets
│   ├── favicon.ico
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── tests/                   # Test files
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── docs/                    # Documentation
│   ├── README.md
│   └── api.md
│
├── package.json
├── svelte.config.js
├── vite.config.js
├── tailwind.config.js       # If using Tailwind
├── postcss.config.js        # If using PostCSS
└── .env                     # Environment variables