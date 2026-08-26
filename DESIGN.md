---
name: LULU AI STUDIO
description: A monochrome liquid-glass portfolio system for an AI film director.
colors:
  carbon: "hsl(0 0% 3%)"
  surface: "hsl(0 0% 6%)"
  raised-surface: "hsl(0 0% 9%)"
  white: "hsl(0 0% 100%)"
  silver: "hsl(0 0% 72%)"
  quiet-silver: "hsl(0 0% 52%)"
  hairline: "hsl(0 0% 100% / 0.12)"
typography:
  display: "Poppins, 500, 0 letter-spacing"
  serif-accent: "Source Serif 4 Italic, 500"
  body: "Poppins, 400, 0 letter-spacing"
rounded:
  panels: "8px"
  controls: "999px"
spacing:
  desktop-shell: "24px"
  mobile-shell: "10px"
  section: "clamp(96px, 12vw, 176px)"
---

# Design System: LULU AI STUDIO

## Creative North Star

**The Monochrome Screening Room.** The site should feel like a compact film studio interface placed over a live screening: real footage supplies the color, while all interface chrome remains black, white, and silver. The first viewport communicates a professional creator brand before it reads as a resume.

## Principles

- Real project footage is the primary visual material and keeps its source color.
- Interface color is strict grayscale. No red, yellow, blue, purple, or tinted glass.
- Frost, raster grain, and blur create material depth without obscuring typography.
- Claims, project counts, experience, contact details, and credits must remain factual.
- Desktop can be cinematic and asymmetric; mobile must be immediate, legible, and overlap-free.

## Typography

Poppins is the display and body voice. Headings use weight 500. Source Serif 4 Italic is reserved for the emphasized phrase inside major headings and quotes. Letter spacing remains zero throughout; hierarchy comes from size, weight, line height, and space.

## Hero

The hero is one viewport high with the Buick project video filling the entire background. Content sits above it in a 52/48 split:

- The left strong-glass panel contains the studio identity, positioning, two actions, discipline pills, and director statement.
- The right side holds a light-glass availability card and a grouped studio-data panel using real counts.
- On screens at or below 720px, the right panel is hidden and the left panel becomes the complete mobile experience.
- On short phones, secondary pills and the quote are removed so identity, positioning, and both actions remain visible.

## Liquid Glass

This is a web glass approximation, not an Apple platform component.

- Light glass uses 4px backdrop blur, a nearly transparent white surface, and a masked highlight edge.
- Strong glass uses 50px backdrop blur and a slightly brighter inset highlight.
- Cards use an 8px radius; small controls use full-pill geometry.
- Reduced-transparency environments receive an opaque near-black surface and no backdrop blur.

## Work Browser

Selected Work remains an editorial project browser, not a thumbnail grid. Filters, project information, and the DepthCarousel stay together as one framed tool. The active filter and directional BorderGlow are silver-white. Project imagery retains its original color and is never tinted by interface accents.

## Motion And Accessibility

- Hoverable controls scale to 1.05 and press to 0.95; motion is short and interruptible.
- Autoplay media is muted by default. Sound requires an explicit control.
- Keyboard focus stays visible in white, touch targets remain at least 44px, and information never depends on hover.
- Reduced-motion users receive stable compositions without cinematic choreography.

## Do Not

- Do not reintroduce colored accents, gradient text, decorative blobs, or tinted overlays.
- Do not replace project evidence with generic feature cards or invented company metrics.
- Do not place the hero video inside a decorative preview frame.
- Do not allow desktop-only data panels to compress or overlap the mobile hero.
