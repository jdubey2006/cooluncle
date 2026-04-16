import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <span className="text-6xl block mb-4">🍦</span>
        <h1 className="font-display text-6xl font-bold candy-text">404</h1>
        <h2 className="mt-3 font-display text-xl font-semibold">Oops! This flavor doesn't exist</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for has melted away
        </p>
        <div className="mt-6">
          <a href="/" className="candy-btn text-sm inline-block">
            🏠 Go Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Cool Uncle | Premium Ice Cream – Indore & Dewas" },
      { name: "description", content: "Cool Uncle Ice Cream – Premium handcrafted ice creams and café delights since 2009." },
      { name: "author", content: "Cool Uncle" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
