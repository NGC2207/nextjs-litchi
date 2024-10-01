export function LayoutProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex-auto">{children}</main>
    </>
  );
}
