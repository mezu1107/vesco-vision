import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, SectionHeading, Reveal } from "@/components/site/primitives";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vesco Science — OEM / ODM Inquiry" },
      {
        name: "description",
        content:
          "Start a conversation about your regenerative product: OEM, ODM, distribution, R&D collaboration or a sample request.",
      },
      { property: "og:title", content: "Contact Vesco Science — OEM / ODM Inquiry" },
      {
        property: "og:description",
        content: "Tell us about your product, market and timeline. Our team responds directly.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

type Errors = Record<string, string>;

function Page() {
  const { t, tx } = useI18n();
  const businessTypes = tx<string[]>("contact.businessTypes") ?? [];
  const inquiryTypes = tx<string[]>("contact.inquiryTypes") ?? [];
  const interests = tx<string[]>("contact.productInterests") ?? [];

  const [form, setForm] = useState({
    name: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    businessType: "",
    inquiryType: "",
    message: "",
  });
  const [picked, setPicked] = useState<string[]>([]);
  const [fileName, setFileName] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const validate = () => {
    const e: Errors = {};
    if (!form.name.trim()) e["name"] = t("contact.errors.name");
    if (!form.company.trim()) e["company"] = t("contact.errors.company");
    if (!form.country.trim()) e["country"] = t("contact.errors.country");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e["email"] = t("contact.errors.email");
    if (!form.businessType) e["businessType"] = t("contact.errors.businessType");
    if (!form.inquiryType) e["inquiryType"] = t("contact.errors.inquiryType");
    if (form.message.trim().length < 10) e["message"] = t("contact.errors.message");
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (validate()) setDone(true);
  };

  const field =
    "w-full border border-hairline bg-card px-4 py-3 text-[0.95rem] text-navy outline-none transition-colors focus:border-teal";
  const labelCls = "text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-navy/70";

  return (
    <>
      <PageHero
        eyebrow={t("contact.eyebrow")}
        title={t("contact.title")}
        lead={t("contact.intro")}
        crumb={{ label: t("nav.contact"), homeLabel: t("common.breadcrumbHome") }}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr]">
          <div>
            {done ? (
              <Reveal>
                <div className="card-flat p-10">
                  <h2 className="text-[1.5rem] font-semibold text-navy">
                    {t("contact.success.title")}
                  </h2>
                  <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                    {t("contact.success.body")}
                  </p>
                  <button
                    onClick={() => {
                      setDone(false);
                      setForm({
                        name: "",
                        company: "",
                        country: "",
                        email: "",
                        phone: "",
                        businessType: "",
                        inquiryType: "",
                        message: "",
                      });
                      setPicked([]);
                      setFileName("");
                    }}
                    className="mt-8 rounded-sm bg-teal px-6 py-3 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-[#05231f]"
                  >
                    {t("contact.success.again")}
                  </button>
                </div>
              </Reveal>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <SectionHeading eyebrow={t("contact.eyebrow")} title={t("contact.title")} />
                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  {(
                    [
                      ["name", "text"],
                      ["company", "text"],
                      ["country", "text"],
                      ["email", "email"],
                      ["phone", "tel"],
                    ] as const
                  ).map(([k, type]) => (
                    <label key={k} className="grid gap-2">
                      <span className={labelCls}>{t(`contact.fields.${k}`)}</span>
                      <input
                        type={type}
                        value={form[k]}
                        onChange={(e) => set(k, e.target.value)}
                        className={field}
                      />
                      {errors[k] ? (
                        <span className="text-[0.78rem] text-red-600">{errors[k]}</span>
                      ) : null}
                    </label>
                  ))}

                  {(
                    [
                      ["businessType", businessTypes],
                      ["inquiryType", inquiryTypes],
                    ] as const
                  ).map(([k, opts]) => (
                    <label key={k} className="grid gap-2">
                      <span className={labelCls}>{t(`contact.fields.${k}`)}</span>
                      <select
                        value={form[k]}
                        onChange={(e) => set(k, e.target.value)}
                        className={field}
                      >
                        <option value="">{t("common.select")}</option>
                        {opts.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                      {errors[k] ? (
                        <span className="text-[0.78rem] text-red-600">{errors[k]}</span>
                      ) : null}
                    </label>
                  ))}
                </div>

                <fieldset className="mt-8">
                  <legend className={labelCls}>{t("contact.fields.productInterest")}</legend>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {interests.map((i) => {
                      const on = picked.includes(i);
                      return (
                        <button
                          key={i}
                          type="button"
                          onClick={() =>
                            setPicked((p) => (on ? p.filter((x) => x !== i) : [...p, i]))
                          }
                          className={`rounded-sm border px-4 py-2 text-[0.8rem] transition-colors ${
                            on
                              ? "border-teal bg-teal text-[#05231f]"
                              : "border-hairline text-navy hover:border-teal hover:text-science"
                          }`}
                        >
                          {i}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <label className="mt-8 grid gap-2">
                  <span className={labelCls}>{t("contact.fields.message")}</span>
                  <textarea
                    rows={6}
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    className={field}
                  />
                  {errors["message"] ? (
                    <span className="text-[0.78rem] text-red-600">{errors["message"]}</span>
                  ) : null}
                </label>

                <div className="mt-8 grid gap-2">
                  <span className={labelCls}>{t("contact.fields.file")}</span>
                  <div className="flex flex-wrap items-center gap-4">
                    <label className="cursor-pointer rounded-sm border border-navy/20 px-5 py-3 text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-navy transition-colors hover:border-teal hover:text-science">
                      {t("contact.fields.chooseFile")}
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                      />
                    </label>
                    <span className="text-[0.85rem] text-muted-foreground">
                      {fileName || t("contact.fields.noFile")}
                    </span>
                  </div>
                  <span className="text-[0.78rem] text-muted-foreground">
                    {t("contact.fields.fileHint")}
                  </span>
                </div>

                <button
                  type="submit"
                  className="mt-10 rounded-sm bg-teal px-8 py-4 text-[0.8rem] font-semibold tracking-[0.14em] uppercase text-[#05231f] transition-colors hover:bg-teal/85"
                >
                  {t("contact.submit")}
                </button>
              </form>
            )}
          </div>

          <Reveal>
            <aside className="card-flat p-8">
              <h3 className="text-[1.1rem] font-semibold text-navy">{t("contact.infoTitle")}</h3>
              <dl className="mt-6 grid gap-6">
                {[
                  ["infoAddress", "infoAddressValue"],
                  ["infoEmail", "infoEmailValue"],
                  ["infoHours", "infoHoursValue"],
                ].map(([k, v]) => (
                  <div key={k} className="border-t border-hairline pt-4">
                    <dt className="text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-science">
                      {t(`contact.${k}`)}
                    </dt>
                    <dd className="mt-2 text-[0.95rem] text-navy">{t(`contact.${v}`)}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
