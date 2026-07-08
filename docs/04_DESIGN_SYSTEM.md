# Beyond TULIP Engineering Handbook

**Document:** Design System  
**Version:** 2.0 (Draft)  
**Status:** Active Development  
**Last Updated:** 2026-07-07  
**Document Owner:** Eirik Storesletten

---

# 04. Design System

## Purpose

This document defines the visual design principles, user interface standards, and reusable design components used throughout Beyond TULIP.

Its purpose is to ensure a consistent, accessible, and maintainable user experience across the entire website.

## Design Philosophy

The Beyond TULIP design system is built around simplicity, clarity, readability, and consistency.

The visual design should always support the content rather than compete with it.

Every design decision should help readers focus on studying Scripture and theology without unnecessary visual distractions.

The design should remain timeless, professional, accessible, and easy to maintain.

## Design Principles

Every page within Beyond TULIP should follow these design principles:

### Content First

Content is always more important than visual decoration.

### Consistency

The same components, spacing, colors, and typography should be used throughout the website.

### Readability

Text should be easy to read on all devices with clear typography, appropriate spacing, and sufficient contrast.

### Simplicity

The interface should avoid unnecessary complexity and visual clutter.

### Accessibility

Design should follow modern accessibility best practices wherever practical.

### Responsive Design

Every page should function well on desktop, tablet, and mobile devices.

## Color System

The Beyond TULIP color system should promote readability, consistency, and a calm reading experience.

Colors should be assigned clear purposes rather than used arbitrarily.

The design system should define:

- Primary color
- Secondary color
- Accent color
- Background color
- Surface color
- Text color
- Link color
- Border color
- Success color
- Warning color
- Error color

Color values should remain consistent across the entire website.

The exact color values are defined separately and should remain consistent across all pages and components.

## Typography

Typography should prioritize readability and consistency across all devices.

The typography system should define:

- Primary font
- Secondary font (if used)
- Heading hierarchy
- Body text
- Captions
- Quotes
- Code blocks
- Line spacing
- Paragraph spacing

Headings should create a clear visual hierarchy, while body text should remain comfortable to read during long study sessions.

## Spacing System

Consistent spacing should be used throughout the website to create a clean, readable, and predictable layout.

The spacing system should define:

- Page margins
- Section spacing
- Component spacing
- Grid spacing
- Card padding
- Button spacing
- Form spacing
- Responsive spacing

Spacing should remain consistent across all pages and reusable components.

## Layout System

The Beyond TULIP layout system provides a consistent structure across all pages.

The layout should define:

- Page width
- Content width
- Header
- Navigation
- Main content area
- Sidebar (when applicable)
- Footer
- Responsive breakpoints

Every page should use the same fundamental layout to create a familiar and predictable user experience.

## Component Library

Beyond TULIP uses reusable interface components to ensure consistency across the website.

Components should follow the same visual language, spacing, typography, and interaction patterns.

The component library includes:

- Header
- Navigation
- Hero Sections
- Cards
- Buttons
- Links
- Tables
- Callout Boxes
- Bible Verse Blocks
- Article Cards
- Diagram Cards
- Search Components
- Footer

Each component should be defined once and reused throughout the project whenever possible.

## Component Design Principles

All reusable components should follow a consistent design language throughout the website.

Every component should be:

- Reusable
- Simple
- Accessible
- Responsive
- Consistent
- Easy to maintain

Components should prioritize readability and usability over visual complexity.

New components should be added only when existing components cannot reasonably fulfill the same purpose.

## Button Standards

Buttons should follow a consistent appearance and behavior throughout the website.

Each button should have a clearly defined purpose.

Standard button types include:

- Primary Button
- Secondary Button
- Outline Button
- Text Button

Buttons should:

- Use consistent spacing and typography.
- Provide clear hover and focus states.
- Remain accessible when using keyboard navigation.
- Clearly indicate disabled states when applicable.
- Avoid unnecessary animations.

## Card Standards

Cards are one of the primary content presentation components used throughout Beyond TULIP.

Cards should present information in a clear, consistent, and visually balanced manner.

Standard card types include:

- Article Card
- Bible Commentary Card
- Bible Study Card
- Diagram Card
- Resource Card
- Topic Card
- Series Card

Cards should:

- Use consistent spacing and padding.
- Maintain a consistent heading hierarchy.
- Display concise summaries.
- Include clear calls to action where appropriate.
- Remain responsive across all screen sizes.
- Follow the project's typography and color standards.

- ## Article Layout Standards

Articles are the primary content type within Beyond TULIP and should provide a consistent reading experience.

Article pages should include:

- Page title
- Introduction
- Main content
- Scripture references
- Related articles
- Related Bible commentary (when applicable)
- Related diagrams (when applicable)
- Footer navigation

Article layouts should prioritize readability, generous whitespace, and a logical content hierarchy.

Long articles should be divided into clearly defined sections using descriptive headings.

## Bible Commentary Layout Standards

Bible Commentary pages should present Scripture in a clear, structured, and consistent format.

Each commentary page should include:

- Bible passage
- Historical and literary context
- Verse-by-verse commentary
- Cross references
- Original language insights (when appropriate)
- Theological observations
- Related articles
- Navigation to adjacent passages

The visual presentation should emphasize the biblical text while clearly distinguishing commentary from Scripture.

The detailed content requirements are defined in **06_BIBLE_COMMENTARY_STANDARD.md**.

## Diagram Standards

Diagrams should simplify complex theological concepts without sacrificing biblical accuracy.

Every diagram should:

- Support an accompanying article whenever possible.
- Present information clearly and logically.
- Use consistent typography, spacing, and colors.
- Remain readable on desktop and mobile devices.
- Include a descriptive title.
- Avoid unnecessary visual complexity.

The detailed standards for theological diagrams are defined in **07_DIAGRAM_STANDARD.md**.

## Image Standards

Images should support the educational purpose of Beyond TULIP and enhance the reader's understanding of the content.

Images should:

- Be relevant to the accompanying content.
- Maintain high visual quality.
- Be optimized for fast loading.
- Use consistent dimensions where practical.
- Include descriptive alternative text.
- Respect copyright and licensing requirements.

Decorative images should be used sparingly and should never distract from the study of Scripture.

## CSS Standards

CSS should be organized, consistent, and easy to maintain.

The project should prioritize:

- Reusable utility classes where appropriate.
- Clearly named CSS variables.
- Modular stylesheets.
- Minimal selector specificity.
- Consistent naming conventions.
- Responsive-first design.

Visual styling should be centralized whenever possible to reduce duplication and simplify future maintenance.

## Naming Conventions

Design components should use clear, descriptive, and consistent names.

Naming should prioritize readability over brevity.

Component names should:

- Clearly describe their purpose.
- Remain consistent throughout the project.
- Avoid ambiguous abbreviations.
- Follow the project's established naming conventions.

Examples include:

- Article Card
- Bible Commentary Card
- Primary Button
- Secondary Button
- Callout Box
- Hero Section
- Navigation Bar

## Navigation Standards

Navigation should be simple, predictable, and consistent throughout the website.

The primary navigation should remain stable as the project grows.

Navigation should:

- Clearly indicate the current page.
- Group related content logically.
- Minimize unnecessary menu levels.
- Remain accessible on desktop and mobile devices.
- Provide consistent navigation across all pages.

Primary navigation items should be defined in the Site Architecture documentation and implemented consistently throughout the project.

## Footer Standards

The footer should provide consistent navigation, project information, and supporting resources across the entire website.

The footer should normally include:

- Copyright information
- Project description
- Primary navigation links
- Contact information
- GitHub repository
- Version information (when appropriate)

The footer should remain visually simple, consistent, and accessible on all devices.

## Search Standards

Search should help users quickly discover relevant biblical and theological content.

The search experience should prioritize:

- Fast results
- Relevant content ranking
- Clear result titles
- Short content summaries
- Topic filtering (when applicable)
- Bible reference searching
- Mobile-friendly interaction

Search should be available from any page and remain consistent throughout the website.

## Theme Standards

Beyond TULIP should maintain a consistent visual identity across all pages.

The theme should prioritize:

- A calm and distraction-free reading experience.
- Consistent colors and typography.
- Clear visual hierarchy.
- Minimal visual clutter.
- High readability in both light and dark themes (if supported).

Theme changes should preserve the established design language and should not alter the overall user experience.

## Design Maintenance

The Design System should evolve gradually as Beyond TULIP grows.

Changes to the design system should:

- Preserve visual consistency.
- Improve usability and accessibility.
- Maintain compatibility with existing components whenever practical.
- Be documented before widespread implementation.
- Avoid unnecessary redesigns.

All major design changes should be reviewed to ensure they remain consistent with the project's Design Philosophy and Engineering Handbook.

## Responsive Design Standards

Beyond TULIP should provide a consistent reading experience across desktop, tablet, and mobile devices.

Responsive design should prioritize:

- Readable typography
- Flexible layouts
- Scalable images
- Touch-friendly navigation
- Consistent spacing
- Fast loading

Content should adapt naturally to different screen sizes without sacrificing readability or usability.

Mobile users should have access to the same content and functionality as desktop users.

## Accessibility Standards

Beyond TULIP should be designed to be accessible to as many users as possible.

The design should prioritize:

- Semantic HTML
- Clear heading hierarchy
- Sufficient color contrast
- Keyboard navigation
- Descriptive link text
- Alternative text for images
- Readable font sizes
- Consistent navigation

Accessibility should be considered during both design and development rather than added as an afterthought.

## Iconography & Imagery

Icons and images should support the educational purpose of Beyond TULIP rather than serve as decoration.

The visual language should remain consistent throughout the website.

Images should:

- Support the accompanying content.
- Be high quality and optimized for web use.
- Maintain a consistent visual style.
- Include alternative text where appropriate.

Icons should:

- Be simple and easy to recognize.
- Use a consistent style throughout the project.
- Improve navigation and usability without distracting from the content.

- ## Conclusion

The Beyond TULIP Design System establishes the visual standards that create a consistent, readable, and maintainable user experience.

As the project grows, new components and design patterns should build upon these standards rather than replace them.

The Design System should evolve gradually while preserving the project's commitment to simplicity, consistency, accessibility, and Scripture-focused content.
