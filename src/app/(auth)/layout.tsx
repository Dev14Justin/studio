export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-15rem)] py-12">
      {children}
    </div>
  );
}
