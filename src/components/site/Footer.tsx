import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

const COLUMNS = [
  {
    titleKey: "footer.company",
    linksKey: "footer.companyLinks",
    to: ["/about", "/research", "/quality", "/quality", "/about"],
  },
  {
    titleKey: "footer.technology",
    linksKey: "footer.technologyLinks",
    to: [
      "/technology/exosome",
      "/technology/pdrn-pn",
      "/technology/lyophilization",
      "/technology/formulation",
    ],
  },
  {
    titleKey: "footer.business",
    linksKey: "footer.businessLinks",
    to: ["/oem", "/oem", "/oem", "/contact"],
  },
  {
    titleKey: "footer.resources",
    linksKey: "footer.resourcesLinks",
    to: ["/insights", "/research", "/resources", "/faq"],
  },
] as const;

export function Footer() {
  const { t, tx } = useI18n();

  return (
    <footer className="relative bg-navy-deep text-white">
      <div className="absolute inset-0 navy-grid opacity-50" />
      <div className="relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_2.6fr]">
          <div>
            <div className="flex items-baseline gap-2.5">
              <span className="font-display text-[1.05rem] font-bold tracking-[0.18em] uppercase">
                Vesco
              </span>
              <span className="font-display text-[1.05rem] font-light tracking-[0.18em] text-teal uppercase">
                Science
              </span>
            </div>
            <p className="mt-5 max-w-xs text-[0.9rem] leading-relaxed text-white/55">
              {t("meta.tagline")}
            </p>
            <dl className="mt-8 space-y-3 text-[0.85rem]">
              <div>
                <dt className="text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-teal">
                  {t("footer.address")}
                </dt>
                <dd className="mt-1 text-white/65">{t("footer.addressValue")}</dd>
              </div>
              <div>
                <dt className="text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-teal">
                  {t("footer.email")}
                </dt>
                <dd className="mt-1 text-white/65">{t("footer.emailValue")}</dd>
              </div>
            </dl>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {COLUMNS.map((col) => {
              const labels = tx<readonly string[]>(col.linksKey);
              return (
                <div key={col.titleKey}>
                  <h3 className="text-[0.68rem] font-semibold tracking-[0.18em] uppercase text-white/45">
                    {t(col.titleKey)}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {labels.map((label, i) => (
                      <li key={label}>
                        <Link
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          to={(col.to[i] ?? "/") as any}
                          className="text-[0.88rem] text-white/70 transition-colors hover:text-teal"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-7 text-[0.78rem] text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {t("meta.company")} {t("footer.rights")}
          </p>
          <p>{t("footer.demo")}</p>
        </div>
      </div>
    </footer>
  );
}
