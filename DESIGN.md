---
name: Pacific Autumn Editorial
colors:
  surface: '#fcf9f3'
  surface-dim: '#dcdad4'
  surface-bright: '#fcf9f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ed'
  surface-container: '#f0eee8'
  surface-container-high: '#ebe8e2'
  surface-container-highest: '#e5e2dc'
  on-surface: '#1c1c18'
  on-surface-variant: '#4f4541'
  inverse-surface: '#31312d'
  inverse-on-surface: '#f3f0ea'
  outline: '#817471'
  outline-variant: '#d2c3bf'
  surface-tint: '#6e5a53'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#261813'
  on-primary-container: '#957f78'
  inverse-primary: '#dbc1b9'
  secondary: '#914853'
  on-secondary: '#ffffff'
  secondary-container: '#fea2ae'
  on-secondary-container: '#7a3540'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#161e08'
  on-tertiary-container: '#7e8869'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#f8ddd4'
  primary-fixed-dim: '#dbc1b9'
  on-primary-fixed: '#261813'
  on-primary-fixed-variant: '#55433c'
  secondary-fixed: '#ffd9dc'
  secondary-fixed-dim: '#ffb2bb'
  on-secondary-fixed: '#3c0513'
  on-secondary-fixed-variant: '#74313c'
  tertiary-fixed: '#dde7c4'
  tertiary-fixed-dim: '#c1cba9'
  on-tertiary-fixed: '#161e08'
  on-tertiary-fixed-variant: '#414a30'
  background: '#fcf9f3'
  on-background: '#1c1c18'
  surface-variant: '#e5e2dc'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: 0em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
  title-editorial:
    fontFamily: Playfair Display
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: 0.04em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.14em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.02em
spacing:
  gutter: 1.5rem
  gutter-desktop: 2.5rem
  margin: 1.25rem
  margin-desktop: 4rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3.5rem
---

## Brand & Style

This design system channels the moody, introspective beauty of the early-2000s Pacific Northwest combined with the golden-hour nostalgia of vintage American lookbooks. It captures the understated, layered romance of cinematic autumns: damp pine forests, oversized thermal knits, weathered corduroy, and soft 35mm film grain.

The personality balances quiet intimacy with disciplined editorial sophistication. Interfaces prioritize space, deliberate pacing, tactile borders, and rich natural materials over digital gloss. The visual style merges **Editorial Minimalism** with **Tactile / Archival Cues**—evoking physical moodboards, press prints, and weathered bookcloth without veering into pastiche.

## Colors

The palette draws strictly from autumnal earth, tannin, and garment dyes:

- **Primary (`#241611`)**: Deep roasted espresso. Replaces pure black entirely across typography, outlines, and structural accents for a softer, organic weight.
- **Secondary (`#5B1D29`)**: Velvety oxblood / burgundy. Used for focal highlights, selected states, and brand editorial callouts.
- **Tertiary (`#4F583D`)**: Muted forest olive. Applied to badge elements, seasonal metadata, natural indicators, and subtle tag surfaces.
- **Warm Cider Amber (`#8C4A28`)**: Supplemental warm accent for seasonal campaign callouts and contextual hover cues.
- **Neutral Canvas (`#F7F4EE`)**: Warm antique cream serving as the foundational page canvas, avoiding clinical starkness.
- **Sub-neutrals**: Oatmeal beige (`#E8E2D5`) and weathered parchment (`#D9D0C1`) establish card fills and container tiers; faded charcoal denim (`#2C3038`) handles high-contrast editorial photography overlays.

Surfaces should feel like thick unbleached cotton paper. Avoid pure whites (`#FFFFFF`) or synthetic grays; tint all neutral fills with warm golden undertones.

## Typography

The typography pairing contrasts the literary cadence of **Playfair Display** with the clear, modern utility of **Plus Jakarta Sans**. 

- **Editorial Headings**: Utilize Playfair Display with slight tracking adjustments. When set in italic weights for collection names or narrative quotes, it introduces an evocative diary-entry nuance.
- **Metadata and Category Tags**: Use `label-caps` in all-uppercase with wide tracking (`0.14em`) to mirror archival print margins and vintage garment tags.
- **Body & Captions**: Plus Jakarta Sans provides high optical clarity across garment specifications, pricing, and sizing charts while maintaining humanistic warmth.

## Layout & Spacing

The layout is built upon an **Asymmetrical Editorial Grid** (12 columns on desktop, 6 columns on tablet, 4 columns on mobile) that accommodates varying aspect ratios: 4:5 lookbook portraits, 1:1 swatch details, and cinematic 16:9 full-bleed landscapes.

- **Breakpoints**: 
  - Mobile: `< 768px` (Fluid, single-column story feeds, horizontal swipe strips).
  - Tablet: `768px - 1024px` (Balanced two-column product tiles, staggered lookbook spreads).
  - Desktop: `> 1024px` (Expansive offset layouts, sticky editorial sidebars, generous gutter widths).
- **Rhythm**: Generous vertical pacing mimics magazine spreads. Sections must breathe with distinct vertical gaps (`space-xl` to double `space-xl`) between narrative features.

## Elevation & Depth

To sustain a grounded, archival aesthetic, avoid digital drop shadows and blur layers. Depth is constructed through **Tonal Stacking** and **Hairline Framing**:

- **Surface Tiers**: Base background is unbleached cream (`#F7F4EE`). Elevated cards, drawers, and modal panels step upward through warmer parchment (`#E8E2D5`) and tinted ivory.
- **Hairline Outlines**: Elements demarcate boundaries via ultra-crisp 1px borders using `#241611` at 12% to 18% opacity (`rgba(36, 22, 17, 0.14)`).
- **Polaroid / Print Elevation**: For product moodboards and photographic stacks, apply a subtle offset outline (1px solid border coupled with a non-blurred 2px to 4px crisp offset tone) rather than soft atmospheric blurs.

## Shapes

This design system adheres to a strict **Sharp (`0`)** shape profile:
- 0px border-radius across buttons, cards, image containers, input fields, badges, and modals.
- Sharp corners reinforce the tactile quality of printed catalogs, physical press proofs, and early 2000s web minimalism.
- Dividers and structural lines maintain a razor-thin 1px weight, drawing sharp horizontal boundaries between editorial vignettes.

## Components

### Buttons
- **Primary Action**: Solid `#241611` (Deep Espresso) fill with `#F7F4EE` (Antique Cream) text. Flat, zero radius, uppercase `label-caps` typography, padded with `14px 28px`. Hover shifts background smoothly to `#5B1D29` (Oxblood) over a 200ms ease.
- **Secondary / Outline**: Transparent fill, 1px solid border in `#241611` at 40% opacity. Text in `#241611`. Hover fills background with `#E8E2D5` at 50% opacity and tightens border opacity to 100%.
- **Text / Editorial Link**: Playfair Display italic or tracked `label-caps` with a 1px baseline underline offset by 4px. Underline transitions to oxblood on hover.

### Product & Editorial Cards
- **Lookbook Card**: Clean 4:5 image container framed by a 1px `#D9D0C1` border. Image captions sit below in `body-sm`, accompanied by prices in `#241611` and fabric notes in muted forest olive.
- **Polaroid / Moodboard Card**: Generous bottom padding (mimicking physical instant film print margins), oatmeal beige surface (`#E8E2D5`), slight rotation offset on hover (+1° / -1°), and hand-typed or serif italic descriptors.

### Input Fields & Controls
- **Form Inputs**: Flat fields with a bottom-only 1px hairline border (`#241611` at 30% opacity) or 4-sided crisp border with antique cream fill. Focus state shifts the border to solid `#5B1D29` without glowing rings.
- **Checkboxes & Radios**: Square 16px geometric boxes, 1px border. Selected state fills with `#241611` housing a crisp cream mark.
- **Chips / Filters**: Sharp-cornered rectangular pills, uppercase tracking, transparent background with 1px hairline border. Active state features an olive (`#4F583D`) or espresso (`#241611`) fill with cream text.

### Navigation & Header
- **Top Bar**: Fixed/sticky navigation featuring high-transparency antique cream background (`#F7F4EE` at 92% opacity with minimal backdrop blur). Features a centered editorial serif wordmark, left-aligned collection routes in `label-caps`, and right-aligned bag/account actions. Separated from body content with a single 1px hairline border.

### Footers
- Grounded in `#1B100C` (Dark Roast Coffee) or weathered `#E8E2D5`. Houses a central archival newsletter prompt ("Letters from the Woods"), minimalist input field, and understated collection indices arranged in crisp columnar grids.