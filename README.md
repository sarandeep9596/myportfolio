# Project Portfolio

A simple and Beautiful Porfolio made with Nextjs and Shadcn Ui.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Configuration

This project uses a centralized configuration approach for all personal information. The main configuration file is located at:

```
src/config/portfolio.config.ts
```

### Configuration Structure

The configuration file contains the following sections:

- **Basic Information**: Name, title, description, location
- **Contact Information**: Email and other contact details
- **Social Media Links**: Links to various social media profiles
- **SEO Information**: Keywords, metadata, and SEO-related settings
- **About Information**: Bio, hobbies, and personal details
- **Skills**: Programming languages, frameworks, tools, and professional roles
- **Education**: Academic background and qualifications
- **Projects**: Portfolio of projects with descriptions and links
- **More Links**: Additional external links and resources

### Customizing Your Portfolio

To personalize the portfolio, simply edit the values in the `portfolio.config.ts` file. All changes will be reflected throughout the site automatically without having to modify multiple files.

Example usage in a component:

```typescript
import { portfolioConfig } from "@/config/portfolio.config";

// Access configuration values
const { name, title } = portfolioConfig;
```
