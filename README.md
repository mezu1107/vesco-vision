# Vesco Vision

VESCO SCIENCE — PREMIUM KOREAN BIOTECHNOLOGY WEBSITE DEMO

Build a premium, production-quality static website demo for Vesco Science, a Korean biotechnology and advanced regenerative manufacturing company.

This is an approval demo, but the demo must look and feel like a finished premium international website. Do not make it look like a basic prototype, template, dashboard, startup landing page, cosmetic website, or generic medical website.

The website must immediately communicate:

Korean Biotechnology + Advanced Regenerative Medicine + R&D + Advanced Manufacturing + OEM / ODM

The website should feel like a combination of a premium Korean biotechnology company, pharmaceutical technology company, advanced research laboratory, and international B2B manufacturing partner.

The source concept specifically positions Vesco Science as a Korean biotechnology and advanced regenerative manufacturing partner rather than simply a Korean exosome supplier.

1. VERY IMPORTANT — STATIC DEMO

For this first version:

Build a fully frontend static demo.

Do NOT build:

Authentication

Admin dashboard

Database

CMS

User accounts

Payment system

Complex backend

Real API integrations

Real document management

Real inquiry backend

Real CRM integration

Forms can work as polished frontend demo forms with validation and success states, but they do not need a backend yet.

The website must however be structured cleanly so backend functionality can be added later without rebuilding the frontend.

This is the approval demo.

After approval, the remaining production functionality can be implemented.

2. VERCEL DEPLOYMENT IS EXTREMELY IMPORTANT

The final project MUST be deployable directly to Vercel.

Make the project Vercel-ready from the beginning.

Use a clean modern frontend architecture that Vercel supports reliably.

Prefer:

Next.js

TypeScript

Tailwind CSS

Modern React

Component-based architecture

Do not introduce unnecessary technologies.

VERY IMPORTANT:

Vercel must be able to detect and build the project correctly.

Do not create an unusual custom output structure.

Do not place the production website inside nested directories.

The project root must contain everything necessary for deployment.

Make sure:

package.json is at project root

next.config is correctly configured if needed

tsconfig is correct

Tailwind configuration is correct if applicable

public directory is at project root

source/app structure is clean

build scripts are correct

no broken imports

no missing dependencies

no local-only paths

no hardcoded localhost URLs

no environment variables required for the static demo

no unnecessary server configuration

no unnecessary custom output directory

The project must work with:

npm install

npm run dev

npm run build

npm run start

and must deploy cleanly to Vercel.

Most importantly:

After build, Vercel must have a clear standard Next.js build output and must NOT complain about a missing output directory.

Do not manually configure a strange output directory unless absolutely necessary.

Use Vercel-compatible defaults.

The final project should be ready to connect to a GitHub repository and deploy to Vercel with minimal configuration.

3. LANGUAGE SYSTEM — EXTREMELY IMPORTANT

The website MUST support two languages:

English

Korean

English is the default language.

There must be a clearly visible language toggle in the header.

Example:

EN | 한국어

or

English | 한국어

When the user selects Korean:

EVERY visible piece of website content must change to Korean.

This includes:

Navigation

Buttons

Headings

Paragraphs

Cards

Technology descriptions

Product labels

OEM / ODM content

Forms

Form labels

Dropdown options

Validation messages

CTA text

Footer

FAQ

Resource sections

Breadcrumbs

Any UI text

Mobile menu

Cookie/privacy style UI if added

Loading states

Success messages

There must NOT be random English text remaining on the Korean version.

English should be the default language on first visit.

When Korean is selected, the entire UI should immediately switch to Korean without a full page reload if possible.

The language system must be structured properly so future pages can easily use the same translation system.

Do NOT duplicate entire page components for each language.

Use a clean translation/data structure.

For example:

/locales/en
/locales/ko

or an equivalent clean architecture.

Make all content translation-ready.

4. KOREAN EXPERIENCE MUST FEEL REAL

This is one of the most important requirements.

Do not simply translate English words into Korean using poor machine-style translations.

Korean UI copy should look natural and professional for a Korean biotechnology/pharmaceutical company.

Use professional Korean terminology appropriate for:

Biotechnology

Regenerative medicine

Pharmaceutical manufacturing

R&D

Exosome technology

PDRN / PN

OEM

ODM

Quality management

Manufacturing

Global business

The Korean version should feel like an actual Korean corporate website.

The language toggle should be visually polished.

5. KOREAN VISUAL IDENTITY

The website must visually feel Korean even before reading the Korean language.

This is extremely important.

Do NOT use generic Western medical stock images.

Use imagery and visual direction inspired by:

Korean biotechnology laboratories

Korean pharmaceutical laboratories

Korean scientists

Modern Korean cleanrooms

Advanced Korean manufacturing facilities

Korean biotech research

Microscopic cellular imagery

Exosome visualizations

Molecular structures

Sterile laboratory environments

High-tech production equipment

Vials and pharmaceutical manufacturing

Clean Korean industrial architecture

Advanced research environments

The visual identity should communicate:

Korea + Science + Biotechnology + Precision + Manufacturing + Premium B2B

The website should immediately have a strong Korean biotech vibe.

Do not make it look like:

Korean beauty ecommerce

K-beauty cosmetics store

Spa

Clinic

Generic hospital

Generic SaaS startup

Generic corporate template

It must look like an advanced Korean biotechnology company.

6. DESIGN SYSTEM

Use this exact core color system:

Primary Deep Navy:

#0B1F33

Secondary Scientific Blue:

#276A91

Accent Biotech Teal:

#35B8B0

Background:

#F7FAFC

Main Text:

#17212B

Cards:

#FFFFFF

Use white and very light blue-grey as the primary canvas.

Use Deep Navy for major dark sections, hero overlays, footer, important CTA sections and strong visual blocks.

Use Scientific Blue for secondary accents.

Use Biotech Teal sparingly for:

CTA accents

technical lines

icons

active states

hover states

data indicators

process lines

small highlights

Do NOT overuse teal.

Do NOT create a neon website.

Do NOT use purple/pink gradients.

Do NOT use rainbow gradients.

Do NOT use excessive glassmorphism.

Do NOT make the website overly colorful.

7. TYPOGRAPHY

Use:

Headings:

Manrope

Body:

Inter

If Manrope is unavailable, use Plus Jakarta Sans or another clean modern sans-serif as fallback.

Typography should be:

Large

Clean

Strong

Professional

Minimal

Use generous whitespace.

Avoid long paragraphs in large blocks.

Use short, powerful headings.

8. OVERALL VISUAL STYLE

The website should feel:

Premium

Scientific

Minimal

Modern

Korean

Pharmaceutical

Research-driven

Corporate

International

Trustworthy

High-end

Use:

Large typography

Large imagery

Strong whitespace

Thin technical lines

Scientific diagrams

Subtle borders

Very subtle shadows

Controlled animation

Premium image treatment

Clean grids

Strong visual hierarchy

Avoid:

Huge rounded cards

Cartoon icons

Generic illustrations

Excessive shadows

Excessive gradients

Excessive animations

Cheap stock photos

Template-looking sections

9. HEADER

Create a premium sticky header.

Desktop:

Logo on left.

Navigation:

HOME
ABOUT US
TECHNOLOGY
PRODUCTS
OEM / ODM
QUALITY
RESEARCH & INSIGHTS
RESOURCES

Right side:

Request a Consultation

Language toggle:

EN | 한국어

The header should initially work beautifully over the hero.

On scroll:

Transition smoothly to a clean white or lightly translucent background.

Navigation should become dark navy.

Add subtle border/shadow.

Mobile:

Use a clean hamburger menu.

Language toggle must remain easy to access.

The mobile menu must also fully translate into Korean.

10. HOMEPAGE HERO

This is the most important visual section.

Create a full-screen cinematic hero.

Background should look like a premium Korean biotechnology laboratory.

Ideal visual sequence:

Korean laboratory
Scientist
Cleanroom
Microscopic cellular imagery
Exosome visualization
Production facility
Advanced manufacturing equipment

If a suitable video asset is not available, create a high-quality static hero using a premium biotech laboratory image plus subtle motion effects.

Do NOT leave empty image placeholders.

Hero overlay should use a subtle dark navy overlay for readability.

Main heading:

Advancing Regenerative Biotechnology

Subheading:

From cellular science to scalable manufacturing.

Supporting text:

Vesco Science develops and manufactures advanced biotechnology solutions for regenerative medicine, aesthetics and global healthcare markets.

Primary CTA:

Explore Our Technology

Secondary CTA:

Partner With Us

Korean version must professionally translate all of this.

Add subtle scientific visual effects.

Possible elements:

microscopic particles

molecular lines

subtle floating particles

very light grid

soft technical glow

Do not make it look like a sci-fi movie.

It should remain pharmaceutical and corporate.

11. TRUST / CAPABILITIES SECTION

Immediately below hero.

Create a premium capabilities/statistics section.

Include:

R&D Driven
Advanced Manufacturing
OEM / ODM
Global Supply
Quality Controlled

Also create metric blocks for:

Years of Experience
Production Capacity
Countries Served
Product Categories
R&D Projects

Use large numbers/typography where actual data is available.

If exact numbers are not available in the concept, use elegant placeholder-style labels rather than inventing fake company facts.

Do NOT fabricate company statistics.

12. COMPANY INTRODUCTION

Heading:

Science Built for the Next Generation of Regenerative Medicine

Content should explain that Vesco Science is a Korea-based biotechnology company focused on development and manufacturing of advanced regenerative and aesthetic solutions.

Highlight capabilities:

Exosome technology

PDRN / PN

Regenerative formulations

Lyophilization

OEM / ODM

Quality control

Global manufacturing support

CTA:

Discover EverCeutical

Keep the section premium and concise.

13. TECHNOLOGY SECTION

This should be one of the strongest sections on the homepage.

Heading:

Technology at the Cellular Level

Create 6 premium technology cards:

01 — Exosome Technology

02 — PDRN / PN Technology

03 — Lyophilization Technology

04 — Regenerative Formulation

05 — Cold Chain Technology

06 — Custom Formulation

Each card should include:

number

scientific icon/visual

title

concise explanation

Explore link

hover interaction

Use subtle scientific animations.

14. EXOSOME FEATURE SECTION

Create a large premium section dedicated to Exosome Technology.

Use a dark navy background.

Left side:

Exosome Technology

Scientific explanation.

Right side:

Premium microscopic/exosome visual.

Add an interactive process visualization:

Cell Source
↓
Cell Culture
↓
Conditioned Medium
↓
Isolation
↓
Purification
↓
Concentration
↓
Characterization
↓
Formulation
↓
Quality Control
↓
Final Product

Use a thin biotech teal process line.

As the user scrolls, stages can progressively illuminate.

Keep it elegant.

15. EXOSOME CHARACTERIZATION

Create a technical scientific section.

Categories:

Particle Characterization

NTA

Particle concentration

Particle size distribution

Morphology

TEM

Cryo-TEM

Safety

Sterility

Endotoxin

Mycoplasma

Purity

Protein analysis

Particle-to-protein ratio where applicable

Do not invent numerical scientific specifications.

Use clean scientific cards and diagrams.

16. MANUFACTURING FACILITY

Create a highly visual section/page.

Heading:

Where Science Becomes Scalable

Show:

R&D Laboratory
Cleanroom
Production Area
Filling & Packaging
Quality Control Laboratory
Storage
Cold Chain

Use premium Korean pharmaceutical/biotechnology facility imagery.

This should feel like a serious manufacturing company.

17. QUALITY MANAGEMENT

Heading:

Quality From Source to Shipment

Create a visual workflow:

Raw Material
→ Production
→ In-process QC
→ Final QC
→ Batch Release
→ Storage
→ Distribution

Also show:

Raw Material Control
Environmental Monitoring
Process Control
Microbiological Testing
Analytical Testing
Batch Documentation
Stability Testing
Traceability

Use clean technical visualizations.

18. PRODUCTS

Create a professional B2B product catalogue layout.

Categories:

EXOSOME

Lyophilized Exosome

Scalp / Hair Applications

Skin Applications

Custom

PDRN / PN

PDRN formulations

PN formulations

AESTHETIC

Skin boosters

Regenerative formulations

HA-based formulations

Peptide formulations

CUSTOM DEVELOPMENT

Client-specific products

Do not make this look like an online shopping store.

This is a B2B scientific product catalogue.

19. PRODUCT DETAIL TEMPLATE

Create a reusable product detail template.

Sections:

Product Name
Product Overview
Technology
Source / Material
Composition
Manufacturing Process
Key Specifications
Quality Parameters
Storage
Packaging
Application
Available Formats
Documentation

Buttons:

Request COA
Request TDS
Request Product Information
Request Sample

For demo purposes, use realistic placeholder/demo product data where necessary, but clearly structure everything so real product data can later be connected.

20. OEM / ODM

This should be one of the strongest conversion sections.

Heading:

From Concept to Commercialization

Subheading:

Your idea. Our science. One integrated development pathway.

Create two premium sections:

OEM

Client formula
Manufacturing
Filling
Packaging
QC
Documentation

ODM

Concept development
Ingredient selection
Formulation
Prototype
Testing
Packaging
Manufacturing
Documentation

Make this visually premium and commercially persuasive.

21. OEM / ODM PROCESS

Create a beautiful interactive timeline:

01 Initial Consultation
02 Concept & Specification
03 R&D / Formulation
04 Prototype
05 Testing & Validation
06 Regulatory Documentation
07 Pilot Production
08 Mass Production
09 Global Shipment

Use scroll-based progression if practical.

22. CUSTOM DEVELOPMENT

Heading:

Build Your Own Regenerative Product

Show project inputs:

Product category
Target market
Active ingredient
Desired concentration
Dosage form
Packaging
MOQ
Regulatory market
Storage requirement

CTA:

Start Your Project

Make it feel like a premium B2B project initiation process.

23. R&D PAGE / SECTION

Heading:

Research & Development

Areas:

Biotechnology Research
Exosome Research
Regenerative Medicine
Formulation Science
Stability Research
Analytical Science
Product Development

Capabilities/team areas:

Biotechnology
Pharmaceutical Science
Chemistry
Formulation
Quality
Regulatory

24. SCIENCE & INSIGHTS

Use the name:

Science & Insights

Not just generic Blog.

Categories:

Exosome Science
PDRN / PN
Manufacturing
Korean Biotechnology
Regulatory
Industry Insights

Create a premium article grid.

Use realistic demo article titles based on the supplied concept.

Do not make fake research claims.

25. DOWNLOAD CENTER

Create a professional B2B resource center.

Documents:

Product Catalogue
Certificate of Analysis
Company Profile
OEM / ODM Brochure

For sensitive documents:

Request Access

For the demo, clicking a protected document can show a polished request-access modal instead of requiring a backend.

26. FAQ

Create categorized FAQ.

General
OEM / ODM
Exosome
Logistics

Use accordion components.

Everything must translate into Korean.

27. CONTACT

Do NOT create a basic contact form.

Create a premium B2B inquiry form.

Fields:

Full Name
Company
Country
Email
Phone
Business Type
Inquiry Type
Product Interest
Message
Upload File

Business Type options:

Distributor
Pharmaceutical Company
Aesthetic Brand
Clinic
Research Organization
OEM / ODM
Other

Inquiry Type:

OEM
ODM
Product Inquiry
Distribution
R&D Collaboration
Sample Request
General Inquiry

Product Interest:

Exosome
PDRN / PN
Skin
Scalp
Regenerative
Custom

CTA:

Submit Inquiry

For demo:

Show frontend validation and polished success state.

No backend required yet.

28. FOOTER

Use Deep Navy #0B1F33.

Columns:

COMPANY
About
R&D
Facility
Quality
Global Network

TECHNOLOGY
Exosome
PDRN
Lyophilization
Formulation

BUSINESS
OEM
ODM
Custom Development
Global Partnership

RESOURCES
Blog
Research
Downloads
FAQ

CONTACT
Address
Email

Include:

Vesco Science Co., Ltd.
Advanced Biotechnology for Regenerative Medicine

Everything must translate to Korean.

29. PAGE STRUCTURE

Create a scalable route structure.

At minimum:

/
/about
/technology
/technology/exosome
/technology/pdrn-pn
/technology/lyophilization
/technology/formulation
/products
/products/[slug]
/oem-odm
/oem-odm/custom-development
/quality
/research
/insights
/resources
/faq
/contact

If some pages are represented through sections in the demo, still structure the components so dedicated pages can be added easily later.

30. RESPONSIVE DESIGN

The website MUST be fully responsive.

Desktop
Tablet
Mobile

Do not simply shrink desktop.

Mobile must have:

proper typography

proper spacing

optimized hero

hamburger menu

working language toggle

stacked cards

vertical process timelines

usable forms

readable scientific content

no horizontal overflow

31. PERFORMANCE

Keep the demo visually rich but technically optimized.

Optimize:

image loading

lazy loading

font loading

animations

unnecessary JavaScript

component rendering

Do not load huge assets unnecessarily.

Use modern image optimization where available.

The website should feel fast.

32. SEO FOUNDATION

Even though this is a demo, implement proper SEO foundations.

Each page should have:

title

meta description

proper heading hierarchy

semantic HTML

Open Graph metadata where practical

clean URLs

descriptive image alt text

language metadata

Support English and Korean metadata structure.

33. ACCESSIBILITY

Implement:

proper contrast

keyboard navigation

visible focus states

semantic buttons

accessible forms

alt text

aria labels where required

34. ANIMATION DIRECTION

Use subtle premium animation.

Good:

fade-up

fade-in

image reveal

scale

subtle parallax

line animation

timeline progression

number counters

hover elevation

molecular movement

Do not use:

excessive bouncing

flashy cursor effects

neon effects

excessive 3D

random animations

The website should feel like a premium biotech company, not a gaming website.

35. IMPORTANT — NO GENERIC PLACEHOLDERS

Do not create sections that say:

"Lorem ipsum"

"Image here"

"Content goes here"

"Coming soon"

unless absolutely necessary.

Use polished demo content based on the supplied Vesco Science concept.

If exact company-specific facts are not provided, do not invent them.

Use generic but professionally written descriptive copy where appropriate.

Do not invent:

certifications

production capacity

years of experience

countries served

regulatory approvals

scientific test results

facility classifications

clinical claims

36. IMAGE DIRECTION

Every major visual section should have relevant imagery.

Prioritize:

Korean laboratory
Korean biotech scientists
Cleanroom
Biotechnology manufacturing
Microscopic exosome visuals
Cellular imagery
Molecular structures
Pharmaceutical equipment
Vials
Advanced research facilities

The imagery should have a consistent cool scientific color atmosphere.

Use blue/white/navy visual tones naturally.

Do not use unrelated generic stock photos.

If image assets are generated or sourced for the demo, keep them visually consistent.

37. FINAL VISUAL TEST

Before considering the demo complete, review the website as if you were the CEO of a Korean biotechnology company seeing it for the first time.

Within 5 seconds it must communicate:

KOREAN BIOTECHNOLOGY
+
REGENERATIVE SCIENCE
+
ADVANCED MANUFACTURING
+
OEM / ODM
+
INTERNATIONAL B2B

The design must look expensive, clean, scientific and trustworthy.

38. MOST IMPORTANT PRIORITY ORDER

Prioritize these in this exact order:

Premium Korean biotech visual identity

Hero section

Typography

Imagery

Navigation

Technology section

Exosome section

Manufacturing

Quality

OEM / ODM

B2B conversion

Korean language experience

Responsive design

Performance

Vercel deployment readiness

39. FINAL REQUIREMENT

This is a DEMO FOR CLIENT APPROVAL.

Do not waste time building backend systems right now.

Spend the effort on making the frontend look extremely polished.

The demo should be visually close to the final production website.

After approval, the following can be added later:

CMS

Admin panel

Database

Real product management

Real document access

CRM

Inquiry storage

Email notifications

Authentication

Advanced downloads

Analytics

Real APIs

For now:

MAKE THE FRONTEND LOOK FINAL.

MAKE THE KOREAN EXPERIENCE FEEL REAL.

MAKE THE WEBSITE FEEL LIKE A PREMIUM KOREAN BIOTECHNOLOGY COMPANY.

MAKE SURE IT DEPLOYS CLEANLY ON VERCEL.

MAKE SURE THE PROJECT HAS A CLEAR STANDARD BUILD OUTPUT AND NO VERCEL OUTPUT DIRECTORY PROBLEM.

Do not stop at a rough wireframe.

Build the actual polished website demo.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/00ebacd4-21bc-4aa3-9d6c-b613026b92e7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
