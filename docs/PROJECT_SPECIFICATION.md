# Beyond TULIP Engineering Handbook

**Document:** Project Specification  
**Version:** 2.0 (Draft)  
**Status:** Active Development  
**Last Updated:** 2026-07-07  
**Document Owner:** Eirik Storesletten

---

# Project Specification

## Purpose

This document serves as the master specification for the Beyond TULIP project.

It defines the project's purpose, requirements, architecture, standards, and development principles.

All other documents within the Engineering Handbook should be consistent with this specification.

When conflicts arise, this document takes precedence.

## Project Overview

Beyond TULIP is a Scripture-first theological library dedicated to examining Calvinist theology in the light of Scripture.

The project combines biblical exegesis, theological articles, Bible commentary, diagrams, apologetics, and educational resources into a unified online library.

Its mission is to help readers understand, evaluate, and defend biblical doctrine through careful study of God's Word.

## Project Scope

Beyond TULIP is intended to be a comprehensive Scripture-first theological library focused on the study of the gospel, salvation, Calvinism, biblical theology, and Christian apologetics.

The project includes:

- Theological articles
- Bible Commentary
- Bible Studies
- Educational diagrams
- Frequently Asked Questions
- Recommended resources
- Historical theology
- Christian apologetics

The project does not seek to replace the local church, pastoral ministry, or formal theological education. Its purpose is to serve as a biblical study resource that encourages readers to examine all doctrines in the light of Scripture.

## Project Audience

Beyond TULIP is intended for readers who desire to study Scripture carefully and examine theological doctrines in a biblical, historical, and respectful manner.

The primary audience includes:

- Christians seeking a deeper understanding of Scripture.
- Students of theology.
- Pastors and church leaders.
- Those studying Calvinism and non-Calvinist perspectives.
- Christians engaged in apologetics.
- Anyone interested in examining biblical doctrine through careful study of God's Word.

- ## Technology Stack

Beyond TULIP is built using a lightweight, standards-based technology stack that prioritizes simplicity, maintainability, and long-term compatibility.

The project currently uses:

- HTML5
- CSS3
- JavaScript (Vanilla)
- Progressive Web App (PWA)
- Git
- GitHub
- GitHub Pages

Future technologies may be introduced when they provide clear long-term benefits without compromising the project's simplicity or maintainability.

## Project Structure

The Beyond TULIP project is organized into separate documents, each with a specific responsibility.

The Engineering Handbook currently consists of:

- PROJECT_SPECIFICATION.md — Master project specification.
- 01_PROJECT_IDENTITY.md — Project identity, mission, and vision.
- 02_SITE_ARCHITECTURE.md — Website structure and navigation.
- 03_CONTENT_ARCHITECTURE.md — Content organization and content types.

Additional documents define standards for design, editorial practices, Bible commentary, diagrams, and future development.

Each document should focus on its own responsibility while remaining consistent with the Project Specification.

## Project Objectives

The objectives of Beyond TULIP are to:

- Present biblical truth with Scripture as the highest authority.
- Examine Calvinist theology carefully and fairly in the light of Scripture.
- Equip Christians to understand, evaluate, and defend biblical doctrine.
- Build a comprehensive theological library that is accessible, searchable, and easy to navigate.
- Maintain a consistent architecture, design, and writing standard across the entire project.
- Support long-term growth through clear documentation and AI-assisted development.

## Functional Requirements

The Beyond TULIP website shall:

- Present theological articles in a clear and structured format.
- Organize content by Topics and Series.
- Provide verse-by-verse Bible Commentary.
- Provide in-depth Bible Studies.
- Display theological diagrams and illustrations.
- Include Frequently Asked Questions (FAQ).
- Provide internal links between related content.
- Support search and content discovery.
- Provide downloadable resources where appropriate.
- Support responsive design for desktop, tablet, and mobile devices.
- Support Progressive Web App (PWA) functionality.
- Be fully compatible with GitHub Pages hosting.

## Non-Functional Requirements

Beyond TULIP shall be designed to meet the following quality requirements:

### Performance

- Pages should load quickly.
- Images should be optimized for web delivery.
- The website should remain responsive on modern devices.

### Accessibility

- Follow modern web accessibility standards where practical.
- Support keyboard navigation.
- Use semantic HTML whenever possible.

### Maintainability

- Code should remain simple and well organized.
- Documentation should be kept up to date.
- New content should follow established project standards.

### Scalability

- The architecture should support thousands of pages without major restructuring.
- New Topics, Series, and content types should be added without changing the core architecture.

### Reliability

- Internal links should remain valid.
- Stable URLs should be preserved whenever possible.
- The project should remain compatible with GitHub Pages.

### AI Compatibility

- Project documentation should enable AI assistants to understand the architecture.
- AI-generated content should follow the Engineering Handbook.
- AI should preserve existing architecture whenever possible.

## System Architecture

Beyond TULIP follows a content-first architecture designed for long-term maintainability, simplicity, and scalability.

The project is based on the following architectural principles:

### Static Website

The website is built as a static website to maximize speed, security, portability, and compatibility with GitHub Pages.

### Content-First Development

Content is the primary focus of the project.

Architecture, design, and implementation exist to support the presentation and study of biblical content.

### Modular Organization

Content, assets, templates, documentation, and AI resources are organized into separate modules to simplify maintenance and future expansion.

### Progressive Web App

The project supports Progressive Web App (PWA) features to provide an improved user experience across desktop and mobile devices.

### AI-Assisted Development

AI assistants are used to accelerate development while following the standards defined in the Engineering Handbook.

Human review remains responsible for all theological, editorial, architectural, and technical decisions.

## Development Workflow

All development within Beyond TULIP should follow a consistent workflow to ensure quality, consistency, and long-term maintainability.

## Engineering Principles

All development within Beyond TULIP should follow these principles:

### Scripture First

Scripture is the highest authority for all theological conclusions.

### Simplicity Before Complexity

Choose the simplest solution that fulfills the project's requirements.

### Consistency Before Innovation

Maintain a consistent user experience throughout the website.

### Documentation Before Implementation

Major architectural and structural decisions should be documented before implementation whenever practical.

### Reuse Before Duplication

Reuse existing components, templates, and standards whenever possible.

### Human Review

All AI-generated content, code, and documentation should be reviewed before publication.

### Long-Term Maintainability

Every change should improve or preserve the long-term maintainability of the project.

### Standard Workflow

1. Define the objective.
2. Review the relevant project documentation.
3. Create or update the project specification if necessary.
4. Develop the content or feature.
5. Review for theological, editorial, and technical accuracy.
6. Test functionality and navigation.
7. Commit changes to Git.
8. Deploy to GitHub Pages.
9. Review the published result.

All significant architectural or content decisions should be documented before implementation whenever practical.

### Workflow Overview

1. Idea
2. Research
3. Specification
4. Content Development
5. Review
6. Implementation
7. Testing
8. Git Commit
9. Deployment
