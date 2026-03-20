# EntheoGen Static Web App

A harm-reduction interaction database for ceremonial, underground, and psychonautic psychedelic use.

## Project Overview

EntheoGen focuses on how entheogens, medications, and other psychoactive substances interact in real-world ceremonial, clinical, and intentional use contexts. This static web app provides information about the project and serves as the public-facing site for the University of Exeter MSc project.

## Pages

- **Home** (`index.html`) - Project overview and beta waitlist
- **About** (`about.html`) - Detailed project information and methodology
- **Sponsorship** (`sponsorship.html`) - Collaboration and support opportunities

## Deployment

This site is designed for deployment on **Azure Static Web Apps** at `www.entheogen.azurewebsites.net`.

### Local Development

To run locally:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if available)
npx serve .

# Or any static file server
```

Then visit `http://localhost:8000`

### Azure Deployment

1. Push to your GitHub repository
2. Create an Azure Static Web App resource
3. Configure deployment with the provided `azure-pipelines.yml`
4. Set the custom domain to `www.entheogen.azurewebsites.net`

## Configuration Files

- `staticwebapp.config.json` - Azure Static Web Apps routing and headers
- `azure-pipelines.yml` - CI/CD pipeline for Azure deployment
- `.gitignore` - Git ignore patterns

## Features

- Responsive design for mobile and desktop
- Semantic HTML5 structure
- Optimized for static hosting
- Security headers configured
- Proper caching strategies

## License

This project is part of an MSc project at the University of Exeter.

## Contact

For collaboration or sponsorship inquiries, please use the contact details provided in the beta invitation or the research profile associated with this project.
