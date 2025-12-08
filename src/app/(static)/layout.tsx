export default function StaticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container py-12">
      <div className="prose dark:prose-invert max-w-4xl mx-auto">
        {children}
      </div>
    </div>
  );
}
