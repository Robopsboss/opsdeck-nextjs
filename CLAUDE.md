# OpsDeck — Build Rules

These rules apply to all work in this repo. Follow them by default; ask before deviating.

## 1. Styling

- Use existing Tailwind tokens (e.g. `bg-hero`, `bg-section-alt`).
- Never hardcode hex values in components.

## 2. Rendering & SEO

- All product pages must be statically rendered and fully indexable.
- No client-side rendering of page content.

## 3. JSON-LD schema

- Every product page gets **Service + Offer** JSON-LD.
- Service schema must reference the existing Organization by `@id`:
  - `"provider": { "@id": "https://opsdeck.co.uk/#organization" }`
- Where local relevance applies, also reference the LocalBusiness by `@id`:
  - `"provider": { "@id": "https://opsdeck.co.uk/#localbusiness" }`
- The FAQ page gets **FAQPage** schema.

## 4. Existing inline JSON-LD — do not duplicate or remove

The following pages already have correct inline JSON-LD. Build on it, never replace or duplicate it:

- `/` — Organization (id `#organization`) — `src/app/page.tsx`
- `/pricing` — SoftwareApplication + FAQPage — `src/app/pricing/page.tsx`
- `/service-area` — LocalBusiness (id `#localbusiness`) — `src/app/service-area/page.tsx`
- `/how-it-works` — FAQPage — `src/app/how-it-works/page.tsx`
- `/bespoke-vs-off-the-shelf` — FAQPage — `src/app/bespoke-vs-off-the-shelf/page.tsx`
- `/honest-comparison` — FAQPage — `src/app/honest-comparison/page.tsx`
- `/author/rob-france` — Person (id `https://opsdeck.co.uk/author/rob-france#person`, references `#organization` via `worksFor.@id`) — `src/app/author/rob-france/page.tsx`
- Blog posts under `/blog/*` — BlogPosting (references `#person` via `author.@id`, `#organization` via `publisher.@id`) — first post at `src/app/blog/why-every-quoting-tool-failed/page.tsx`
- `/policy-ethics` — WebPage (id `#webpage`, references `#organization` via `about.@id` and `publisher.@id`) + FAQPage — `src/app/policy-ethics/page.tsx`

## 5. `mailto:` links

- URL-encode `subject` (and `body`) query params.

## 6. Sitemap

- Edit `src/app/sitemap.ts` to **add** new routes. Never replace the file.

## 7. Hands-off: existing Learn pages

Do not modify these unless explicitly asked:

- `/how-it-works`
- `/bespoke-vs-off-the-shelf`
- `/honest-comparison`
- `/case-studies/birdwell`
