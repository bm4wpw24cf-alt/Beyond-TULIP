# Beyond TULIP v2 Blueprint

**Version:** 2.0 (Draft)  
**Last Updated:** 2026-07-07  
**Document Owner:** Eirik Storesletten

---

# 02. Site Architecture

## Purpose

This document defines the structure of the Beyond TULIP website.

Its purpose is to ensure that the project remains organized, scalable, consistent, and easy to maintain as it grows.

The architecture is designed to support hundreds of articles without becoming difficult to navigate or maintain.

---

## Design Principles

---

## Website Hierarchy

---

## Folder Structure

The project is organized into logical directories to ensure scalability, maintainability, and consistency as the library continues to grow.

```text
Beyond-TULIP/
│
├── index.html
├── about.html
├── statement-of-faith.html
├── contact.html
│
├── articles/
│   ├── topics/
│   └── series/
│
├── bible/
│   ├── old-testament/
│   └── new-testament/
│
├── diagrams/
│
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── templates/
│
├── data/
│
├── docs/
│
└── ai/
```

### Folder Purposes

| Folder | Purpose |
|---------|---------|
| **articles/** | Original theological articles organized by topics and article series. |
| **bible/** | Bible commentary, biblical studies, and Scripture resources. |
| **diagrams/** | Original diagrams, illustrations, timelines, and comparison charts. |
| **assets/** | Shared CSS, JavaScript, images, fonts, icons, and other static resources. |
| **templates/** | Standard page templates used throughout the project. |
| **data/** | Metadata files used for navigation, search, categories, and future automation. |
| **docs/** | Blueprint documentation and project planning. |
| **ai/** | AI development standards, prompts, rules, and project guidance. |

### Primary Navigation

- Home
- About
- Statement of Faith
- Articles
- Bible
- Diagrams
- Resources
- Contact

Each primary section may contain additional categories and subcategories without changing the overall navigation structure.

The primary navigation should remain stable over time. New content should normally be added within existing sections rather than by creating new top-level navigation items.



