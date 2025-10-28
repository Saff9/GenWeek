import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: { username: { label: 'Username', type: 'text' }, password: { label: 'Password', type: 'password' } },
      async authorize(credentials) {
        if (!credentials) return null;
        if (credentials.username === 'demo' && credentials.password === 'demo') {
          return { id: '1', name: 'Demo User' };
        }
        return null;
      },
    }),
  ],
  session: { strategy: 'jwt' },
  pages: {},
});

export { handler as GET, handler as POST };
