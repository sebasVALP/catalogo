---
name: Kinetic Topography
colors:
  surface: '#121315'
  surface-dim: '#121315'
  surface-bright: '#38393b'
  surface-container-lowest: '#0d0e10'
  surface-container-low: '#1b1c1e'
  surface-container: '#1f2022'
  surface-container-high: '#292a2c'
  surface-container-highest: '#343537'
  on-surface: '#e3e2e4'
  on-surface-variant: '#cac8ac'
  inverse-surface: '#e3e2e4'
  inverse-on-surface: '#303032'
  outline: '#939279'
  outline-variant: '#484833'
  surface-tint: '#cdcd00'
  primary: '#f1f132'
  on-primary: '#323200'
  primary-container: '#d4d400'
  on-primary-container: '#5a5a00'
  inverse-primary: '#626200'
  secondary: '#c8c6c6'
  on-secondary: '#303030'
  secondary-container: '#494949'
  on-secondary-container: '#b9b8b8'
  tertiary: '#e9e9e9'
  on-tertiary: '#2f3131'
  tertiary-container: '#cdcdcd'
  on-tertiary-container: '#555757'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#eaea2a'
  primary-fixed-dim: '#cdcd00'
  on-primary-fixed: '#1d1d00'
  on-primary-fixed-variant: '#494900'
  secondary-fixed: '#e4e2e2'
  secondary-fixed-dim: '#c8c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#121315'
  on-background: '#e3e2e4'
  surface-variant: '#343537'
typography:
  display-xl:
    fontFamily: Anton
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Anton
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  title-md:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1.4'
  body-base:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  section-gap: 80px
---

## Brand & Style

This design system is built for a premium, urban-inspired e-commerce experience. The brand personality is energetic, confident, and meticulously curated, targeting a demographic that values street culture and expressive accessories.

The visual style is **High-Contrast Modernism** with **Tactile Elements**. It utilizes a deep, monochromatic foundation to allow product photography to pop, while "Electric Yellow" accents guide the user through the conversion funnel. A subtle topographic pattern serves as a recurring textural motif, bridging the gap between digital interface and physical exploration. The interface should feel fast, responsive, and high-end, utilizing crisp borders and deliberate whitespace to maintain an organized shopping experience.

## Colors

The palette is dominated by **Obsidian Black (#121315)** to create an immersive, low-light environment that reduces eye strain and elevates product vibrancy. 

- **Primary (Electric Yellow):** Reserved strictly for primary Call-to-Actions (CTAs), price highlights, and active states. It represents the "spark" of discovery.
- **Secondary (Iron Gray):** Used for structural borders, inactive icons, and secondary button outlines. This provides definition without competing for attention.
- **Surface Tiers:** Use `#1C1D1F` for cards and elevated sections to create a subtle sense of depth against the pure black background.
- **Typography:** Headlines must be pure white for maximum legibility, while body copy uses a soft gray to maintain visual hierarchy.

## Typography

The typographic scale emphasizes impact and utility. **Anton** is used for high-level headings to evoke a bold, editorial feel reminiscent of street-wear magazines. All headlines should be set in **Uppercase** to reinforce the brand's assertive tone.

**Hanken Grotesk** handles the heavy lifting for product descriptions and UI elements, offering a clean, contemporary sans-serif look that ensures readability at all sizes. **Geist** is utilized for technical data, labels, and micro-copy, providing a "developer-tool" precision that complements the accessory-focused nature of the products.

## Layout & Spacing

The system follows a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

- **Vertical Rhythm:** A strict 8px base unit governs all padding and margins. 
- **Sectioning:** Large vertical gaps (80px+) are used between product categories to prevent visual clutter and allow the topographic patterns in the background to "breathe."
- **Product Grids:** Use a tight 16px gutter for product thumbnails to create a dense, "collector's wall" aesthetic, while main site containers utilize a 24px gutter for better focus.
- **Topographic Overlays:** Patterns should be restricted to the Hero background, Footer, and Category headers, typically appearing at 10-15% opacity to avoid interfering with text legibility.

## Elevation & Depth

Depth is achieved through **Tonal Layering** and **High-Contrast Outlines** rather than traditional shadows.

1.  **Level 0 (Background):** Pure Obsidian (#121315).
2.  **Level 1 (Cards/Containers):** Elevated Gray (#1C1D1F) with a 1px solid border (#4C4C4C).
3.  **Level 2 (Popovers/Modals):** Elevated Gray with a slightly brighter border (#666666) and a subtle 24px blur backdrop filter to maintain focus.

Interactive elements (buttons, inputs) do not use shadows; instead, they utilize a "glow" effect on hover, where the border color transitions to the Primary Electric Yellow.

## Shapes

The shape language is **Soft-Geometric**. A subtle 0.25rem (4px) corner radius is applied to all cards, input fields, and buttons. This creates a professional, "machined" look that feels more precise than fully rounded shapes but friendlier than sharp corners. 

Buttons may occasionally use a "Pill" shape for secondary actions (like "Add to Cart" icons) to differentiate them from primary navigation containers. Icons should follow a 2px stroke weight to match the structural borders of the UI.

## Components

### Buttons
- **Primary:** Solid Electric Yellow background, Black text (Anton, Uppercase). No border. On hover: slight brightness increase.
- **Secondary:** Transparent background, 2px Iron Gray border, White text. On hover: border and text change to Electric Yellow.

### Cards
- **Product Cards:** Image-first layout. The bottom 25% of the card features a dark semi-transparent overlay where the title and price reside. 
- **Quick-Add:** A small square Primary button should appear in the bottom-right corner of the product card on hover.

### Inputs
- **Search Bar:** Dark gray background (#1C1D1F) with a 1px border (#4C4C4C). The search icon remains Iron Gray until the field is focused, at which point the border turns Electric Yellow.

### Tags / Chips
- Used for "New," "Sale," or "Limited Edition." These should be small, rectangular with 2px radius, using a high-contrast background (Primary for sales, White for new arrivals).

### Topographic Footer
- The footer background must feature the topographic line art. All links in the footer should be stacked vertically with generous 12px padding for touch-friendly navigation on mobile.