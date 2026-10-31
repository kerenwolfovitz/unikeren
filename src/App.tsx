import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/** Groups the pages one person looks at in a sitting into a single visit. */
function sessionId() {
  try {
    let id = sessionStorage.getItem("unikeren-session");
    if (!id) {
      id = Math.random().toString(36).slice(2) + Date.now().toString(36);
      sessionStorage.setItem("unikeren-session", id);
    }
    return id;
  } catch {
    return "no-storage";
  }
}

function TrackPageView() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.startsWith("/admin")) return;
    // The function is only there in production; locally this quietly no-ops.
    void fetch("/api/track", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        path: pathname,
        referrer: document.referrer,
        session: sessionId(),
      }),
      keepalive: true,
    }).catch(() => {});
  }, [pathname]);

  return null;
}

export default function App() {
  const { pathname } = useLocation();
  const bare = pathname.startsWith("/admin");

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <TrackPageView />
      {!bare && <Header />}
      <main className="flex-1">
        <Outlet />
      </main>
      {!bare && <Footer />}
    </div>
  );
}
