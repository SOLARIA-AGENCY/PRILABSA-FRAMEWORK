# PRILABSA Framework - Changelog

All notable changes to the PRILABSA Framework will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.0] - 2025-05-28

### 🎨 Added - Visual Identity & Branding
- **Solaria Agency Logos Integration**
  - Added main Solaria Agency logo (SVG format) to header and footer
  - Integrated Solaria isotipo in header navigation
  - Implemented responsive logo sizing and positioning

- **Typography System Enhancement**
  - Implemented IBM Plex Mono as primary framework typography
  - Added `font-framework` utility class for consistent framework branding
  - Maintained separate typography options for client content (Inter, Merriweather, JetBrains Mono)

- **Asset Organization Structure**
  - Created organized directory structure: `src/assets/framework/` vs `src/assets/client/`
  - Separated framework assets from client-customizable assets
  - Established clear asset management guidelines

### 🔧 Changed - Configuration Updates
- **Framework Configuration**
  - Updated theme configuration to include IBM Plex Mono as framework font
  - Enhanced font family definitions with clear framework vs client separation
  - Updated all date references to May 2025

- **TailwindCSS Configuration**
  - Added `font-framework` utility class for IBM Plex Mono
  - Enhanced font family configuration with semantic naming
  - Maintained backward compatibility with existing font classes

### 📝 Updated - Documentation
- **Deployment Status**
  - Updated deployment status with new visual identity features
  - Added asset organization documentation
  - Updated server URL and current status information

- **Application Interface**
  - Applied IBM Plex Mono typography to all framework elements
  - Enhanced visual consistency across header, navigation, and footer
  - Improved transition effects and hover states

### 🏗️ Technical Improvements
- **CSS Import Optimization**
  - Added IBM Plex Mono to Google Fonts import
  - Maintained proper import order for CSS processing
  - Ensured compatibility with existing TailwindCSS configuration

- **Component Enhancement**
  - Applied framework typography to navigation elements
  - Enhanced logo integration with proper alt text and sizing
  - Improved responsive design for logo display

---

## [1.0.0] - 2025-01-28

### 🚀 Initial Release
- **Core Framework Architecture**
  - React 18 + TypeScript foundation
  - Vite 6.3.5 build system
  - TailwindCSS 3.4.17 styling framework

- **Multi-Application Support**
  - Corporate website module
  - Blog platform module  
  - Product catalog module

- **Solaria Agency Branding**
  - Complete agency information integration
  - Professional contact details and links
  - Custom proprietary licensing

- **Development Infrastructure**
  - Comprehensive testing setup (Jest, RTL, Cypress)
  - ESLint and Prettier configuration
  - TypeScript strict mode configuration

- **Documentation Suite**
  - README.md with quick start guide
  - PRD.md (Product Requirements Document)
  - ARCHITECTURE.md technical documentation
  - IMPLEMENTATION.md developer guide

---

## Versioning Strategy

- **Major versions** (x.0.0): Breaking changes, major feature additions
- **Minor versions** (x.y.0): New features, enhancements, non-breaking changes
- **Patch versions** (x.y.z): Bug fixes, minor improvements

---

**Maintained by [Solaria Agency](https://solaria.agency)**  
**Contact:** hello@solaria.agency  
**Support:** support@solaria.agency

*© 2025 Solaria Agency. All rights reserved.* 