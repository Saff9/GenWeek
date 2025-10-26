export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-accent">
      <div className="w-full max-w-sm p-6 bg-white/90 rounded-2xl shadow-lg">
        {children}
      </div>
    </div>
  );
}
