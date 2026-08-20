import { Link } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";

/** Fade/slide-in on scroll. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.dataset["visible"] = "true";
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  tone = "canvas",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "canvas" | "white" | "navy" | "muted";
  id?: string;
}) {
  const tones: Record<string, string> = {
    canvas: "bg-background text-foreground",
    white: "bg-card text-foreground",
    muted: "bg-secondary text-foreground",
    navy: "bg-navy text-white",
  };
  return (
    <section id={id} className={`relative ${tones[tone]} ${className}`}>
      <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, invert = false }: { children: ReactNode; invert?: boolean }) {
  return (
    <p className={`eyebrow ${invert ? "!text-teal" : ""}`}>
      <span className="mr-3 inline-block h-px w-8 align-middle bg-current opacity-50" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  invert = false,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  invert?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow ? <Eyebrow invert={invert}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold ${
          invert ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-5 text-[1.0625rem] leading-relaxed ${
            invert ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  crumb,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image?: string;
  imageAlt?: string;
  crumb: { label: string; homeLabel: string };
}) {
  return (
    <header className="relative isolate overflow-hidden bg-navy-deep">
      {image ? (
        <>
          <img
            src={image}
            alt={imageAlt ?? ""}
            className="absolute inset-0 h-full w-full object-cover opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy/40" />
        </>
      ) : (
        <div className="absolute inset-0 navy-grid opacity-70" />
      )}
      <div className="relative mx-auto w-full max-w-[1240px] px-6 pt-36 pb-20 md:px-10 md:pt-44 md:pb-28">
        <nav aria-label="Breadcrumb" className="mb-8 text-[0.8rem] text-white/45">
          <Link to="/" className="transition-colors hover:text-teal">
            {crumb.homeLabel}
          </Link>
          <span className="mx-2 text-white/25">/</span>
          <span className="text-white/75">{crumb.label}</span>
        </nav>
        <Eyebrow invert>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.1rem,4.6vw,3.9rem)] leading-[1.06] font-semibold text-white">
          {title}
        </h1>
        {lead ? (
          <p className="mt-7 max-w-2xl text-[1.0625rem] leading-relaxed text-white/70">{lead}</p>
        ) : null}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-teal/60 to-transparent" />
    </header>
  );
}

export function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-hairline pt-5">
      <p className="text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-science">
        {label}
      </p>
      <p className="mt-2 text-[0.95rem] text-foreground">{value}</p>
    </div>
  );
}

export function NumberedCard({
  num,
  title,
  body,
  to,
  params,
}: {
  num: string;
  title: string;
  body: string;
  to?: string;
  params?: Record<string, string>;
}) {
  const inner = (
    <div className="card-flat group flex h-full flex-col p-8">
      <span className="font-display text-[0.8rem] font-bold tracking-[0.18em] text-teal">
        {num}
      </span>
      <h3 className="mt-6 text-[1.2rem] font-semibold text-navy">{title}</h3>
      <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">{body}</p>
      {to ? (
        <span className="mt-7 inline-flex items-center gap-2 text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-science">
          <span className="h-px w-6 bg-teal transition-all duration-500 group-hover:w-10" />
          Detail
        </span>
      ) : null}
    </div>
  );

  if (to) {
    return (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <Link to={to as any} params={params as any} className="block h-full">
        {inner}
      </Link>
    );
  }
  return inner;
}

export function ProcessFlow({ steps, invert = false }: { steps: string[]; invert?: boolean }) {
  return (
    <ol className="grid gap-px sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, i) => (
        <li
          key={step}
          className={`relative p-6 ${
            invert
              ? "bg-white/[0.04] outline outline-white/10"
              : "bg-card outline outline-hairline"
          }`}
        >
          <span
            className={`font-display text-[0.72rem] font-bold tracking-[0.18em] ${
              invert ? "text-teal" : "text-science"
            }`}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <p
            className={`mt-3 text-[0.9rem] leading-snug font-medium ${
              invert ? "text-white/85" : "text-navy"
            }`}
          >
            {step}
          </p>
        </li>
      ))}
    </ol>
  );
}

export function TealButton({
  to,
  children,
  variant = "solid",
}: {
  to: string;
  children: ReactNode;
  variant?: "solid" | "ghost" | "outline";
}) {
  const styles = {
    solid: "bg-teal text-[#05231f] hover:bg-teal/85",
    outline: "border border-navy/25 text-navy hover:border-teal hover:text-science",
    ghost: "border border-white/25 text-white hover:border-teal hover:text-teal",
  }[variant];
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Link
      to={to as any}
      className={`inline-flex items-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300 ${styles}`}
    >
      {children}
    </Link>
  );
}
