import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

const NAV = [
  { to: "/about", key: "nav.about" },
  { to: "/technology", key: "nav.technology" },
  { to: "/products", key: "nav.products" },
  { to: "/oem", key: "nav.oem" },
  { to: "/quality", key: "nav.quality" },
  { to: "/insights", key: "nav.research" },
  { to: "/resources", key: "nav.resources" },
] as const;

export function Header() {
  const { t, locale, setLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-navy-deep/95 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1240px] items-center justify-between px-6 md:px-10">
        <Link to="/" className="group flex items-baseline gap-2.5">
          <span className="font-display text-[1.05rem] font-bold tracking-[0.18em] text-white uppercase">
            Vesco
          </span>
          <span className="font-display text-[1.05rem] font-light tracking-[0.18em] text-teal uppercase">
            Science
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative py-2 text-[0.78rem] font-medium tracking-[0.06em] text-white/70 transition-colors hover:text-white"
              activeProps={{ className: "!text-teal" }}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center rounded-sm border border-white/15 sm:flex">
            {(["en", "ko"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                aria-label={l === "en" ? "English" : "한국어"}
                className={`px-3 py-1.5 text-[0.7rem] font-semibold tracking-[0.12em] uppercase transition-colors ${
                  locale === l ? "bg-teal text-[#05231f]" : "text-white/60 hover:text-white"
                }`}
              >
                {l === "en" ? "EN" : "KO"}
              </button>
            ))}
          </div>
          <Link
            to="/contact"
            className="hidden rounded-sm bg-teal px-5 py-2.5 text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#05231f] transition-colors hover:bg-teal/85 md:inline-flex"
          >
            {t("nav.cta")}
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t("nav.close") : t("nav.menu")}
            aria-expanded={open}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`h-px w-5 bg-white transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-5 bg-white transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 lg:hidden">
          <nav className="mx-auto grid w-full max-w-[1240px] gap-px px-6 pb-8 md:px-10">
            {[...NAV, { to: "/faq", key: "nav.faq" }, { to: "/contact", key: "nav.contact" }].map(
              (item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="border-b border-white/10 py-4 text-[0.95rem] text-white/80"
                  activeProps={{ className: "!text-teal" }}
                >
                  {t(item.key)}
                </Link>
              ),
            )}
            <div className="mt-5 flex gap-2">
              {(["en", "ko"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l)}
                  className={`rounded-sm border px-4 py-2 text-[0.72rem] font-semibold tracking-[0.14em] uppercase ${
                    locale === l
                      ? "border-teal bg-teal text-[#05231f]"
                      : "border-white/20 text-white/70"
                  }`}
                >
                  {l === "en" ? "English" : "한국어"}
                </button>
              ))}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
