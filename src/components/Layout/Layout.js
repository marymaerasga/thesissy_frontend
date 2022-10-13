import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <main className="subpixel-antialiased">
      <div>
        <Navigation />
      </div>
      <div>{children}</div>
    </main>
  );
}
