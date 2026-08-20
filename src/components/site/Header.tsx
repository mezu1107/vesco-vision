import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";

type Child = { to: string; label: string; desc?: string };
type NavItem = { to: string; key: string; children?: Child[] };

export function Header() {
  const { t, tx, locale, setLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const techCards =
    tx<{ slug: string; title: string; body: string }[]>("technology.cards") ?? [];
  const productCats =
    tx<{ key: string; title: string; items: { slug: string; name: string }[] }[]>(
      "products.categories",
    ) ?? [];

  const NAV: NavItem[] = [
    {
      to: "/about",
      key: "nav.about",
      children: [
        { to: "/about", label: t("nav.about") },
        { to: "/quality", label: t("nav.quality") },
        { to: "/research", label: t("nav.research") },
      ],
    },
    {
      to: "/technology",
      key: "nav.technology",
      children: techCards.slice(0, 6).map((c) => ({
        to: `/technology/${c.slug}`,
        label: c.title,
        desc: c.body,
      })),
    },
    {
      to: "/products",
      key: "nav.products",
      children: productCats.flatMap((cat) =>
        cat.items.map((i) => ({ to: `/products/${i.slug}`, label: i.name, desc: cat.title })),
      ),
    },
    { to: "/oem", key: "nav.oem" },
    { to: "/quality", key: "nav.quality" },
    {
      to: "/resources",
      key: "nav.resources",
      children: [
        { to: "/resources", label: t("nav.resources") },
        { to: "/insights", label: t("nav.research") },
        { to: "/faq", label: t("nav.faq") },
      ],
    },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenu(null);
    setMobileMenu(null);
  }, [pathname]);

  const openMenu = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenu(key);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMenu(null), 140);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open || menu
          ? "bg-navy-deep/95 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.08)]"
          : "bg-transparent"
      }`}
      onKeyDown={(e) => {
        if (e.key === "Escape") setMenu(null);
      }}
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

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active = menu === item.key;
            return (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => (item.children ? openMenu(item.key) : setMenu(null))}
                onMouseLeave={scheduleClose}
              >
                <div className="flex items-center">
                  <Link
                    to={item.to}
                    className="rounded-sm px-3 py-2 text-[0.78rem] font-medium tracking-[0.06em] text-white/70 transition-colors hover:text-white"
                    activeProps={{ className: "!text-teal" }}
                  >
                    {t(item.key)}
                  </Link>
                  {item.children ? (
                    <button
                      type="button"
                      aria-expanded={active}
                      aria-label={`${t(item.key)} submenu`}
                      onClick={() => (active ? setMenu(null) : openMenu(item.key))}
                      className="-ml-1 p-1 text-white/50 transition-colors hover:text-teal"
                    >
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${active ? "rotate-180 text-teal" : ""}`}
                      />
                    </button>
                  ) : null}
                </div>

                {item.children ? (
                  <div
                    className={`absolute top-full left-0 pt-3 transition-all duration-200 ${
                      active
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-1 opacity-0"
                    }`}
                  >
                    <div className="max-h-[70vh] w-[320px] overflow-y-auto border border-white/10 bg-navy-deep/98 p-2 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8)] backdrop-blur-md">
                      <span className="absolute top-[9px] left-6 h-2 w-2 rotate-45 border-t border-l border-white/10 bg-navy-deep" />
                      {item.children.map((c) => (
                        <Link
                          key={c.to + c.label}
                          to={c.to}
                          className="group block border-l-2 border-transparent px-4 py-2.5 transition-colors hover:border-teal hover:bg-white/[0.04]"
                          activeProps={{ className: "!border-teal bg-white/[0.04]" }}
                        >
                          <span className="block text-[0.85rem] font-medium text-white/85 transition-colors group-hover:text-teal">
                            {c.label}
                          </span>
                          {c.desc ? (
                            <span className="mt-0.5 block truncate text-[0.72rem] text-white/40">
                              {c.desc}
                            </span>
                          ) : null}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
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
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-white/10 lg:hidden">
          <nav className="mx-auto w-full max-w-[1240px] px-6 pb-8 md:px-10">
            {NAV.map((item) => (
              <div key={item.key} className="border-b border-white/10">
                <div className="flex items-center justify-between">
                  <Link
                    to={item.to}
                    className="py-4 text-[0.95rem] text-white/85"
                    activeProps={{ className: "!text-teal" }}
                  >
                    {t(item.key)}
                  </Link>
                  {item.children ? (
                    <button
                      type="button"
                      aria-label={`${t(item.key)} submenu`}
                      aria-expanded={mobileMenu === item.key}
                      onClick={() => setMobileMenu(mobileMenu === item.key ? null : item.key)}
                      className="p-3 text-white/50"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${mobileMenu === item.key ? "rotate-180 text-teal" : ""}`}
                      />
                    </button>
                  ) : null}
                </div>
                {item.children && mobileMenu === item.key ? (
                  <div className="mb-3 grid border-l border-teal/40 pl-4">
                    {item.children.map((c) => (
                      <Link
                        key={c.to + c.label}
                        to={c.to}
                        className="py-2.5 text-[0.85rem] text-white/60"
                        activeProps={{ className: "!text-teal" }}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-sm bg-teal px-5 py-3 text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#05231f]"
            >
              {t("nav.cta")}
            </Link>
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
