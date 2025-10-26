# GenWeek
Enjoy , entertainment 😉.

genweek/
├── app/
│   ├── (public-pages)/
│   │   ├── page.tsx
│   │   └── about/page.tsx
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   ├── signup/page.tsx
│   │   ├── layout.tsx
│   │   └── forgot-password/page.tsx
│   ├── (feed)/
│   │   ├── page.tsx
│   │   ├── story/page.tsx
│   │   ├── upload/page.tsx
│   │   └── layout.tsx
│   ├── api/
│   │   ├── auth/[...nextauth]/route.ts
│   │   ├── posts/route.ts
│   │   ├── upload/route.ts
│   │   └── users/route.ts
│   ├── layout.tsx
│   ├── globals.css
│   ├── loading.tsx
│   ├── error.tsx
│   └── not-found.tsx
│
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Avatar.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── BottomNav.tsx
│   │   └── Sidebar.tsx
│   └── feed/
│       ├── PostCard.tsx
│       ├── StoryBar.tsx
│       └── CreatePostModal.tsx
│
├── lib/
│   ├── prisma.ts
│   ├── auth.ts
│   ├── validations.ts
│   └── utils.ts
│
├── prisma/
│   └── schema.prisma
│
├── context/
│   ├── AuthContext.tsx
│   └── ThemeContext.tsx
│
├── public/
│   ├── icons/
│   ├── images/
│   ├── favicon.ico
│   └── manifest.json
│
├── middleware.ts
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── package.json
├── README.md
└── .env.local.example
