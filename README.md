# New Life Family Chiropractic – Madison, AL

A multi-page static website for the New Life Family Chiropractic office in Madison, Alabama. Mirrors the look and feel of the original Decatur, AL website (https://www.newlifefamilychiro.org/), updated with Madison-specific contact information, services, and SEO.

**Production domain:** `newlifefamilychiro-madison.org`
**Doctor:** Dr. Misty Browning (Webster Certified, ICPA Trained)
**Madison Address:** 26330 Old Hwy 20, Madison, AL 35756
**Phone:** (256) 301-0110

---

## 🚀 Quick Start (Push to GitHub)

### Option A: New Repository (recommended)

1. **Create a new empty repo on GitHub** (no README, no .gitignore): https://github.com/new
   - Name: `newlifefamilychiro-madison`
   - Visibility: Private (recommended) or Public

2. **Download the codebase** from this conversation (the zip file in the deliverables).

3. **Extract the zip** and open a terminal in the extracted folder.

4. **Run these commands** (replace `YOUR-USERNAME` with your GitHub username):

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Madison, AL website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/newlifefamilychiro-madison.git
   git push -u origin main
   ```

5. **Done.** Your codebase is on GitHub.

### Option B: Existing Repository

If the GitHub repo already exists:

```bash
git clone https://github.com/YOUR-USERNAME/REPO-NAME.git
# extract the zip contents into the cloned folder, overwriting if needed
cd REPO-NAME
git add .
git commit -m "Add Madison, AL website codebase"
git push
```

---

## 📁 Project Structure

```
newlifefamilychiro-madison/
├── index.html              # Homepage
├── about.html              # About Dr. Browning
├── services.html           # All chiropractic services
├── new-patients.html       # First-visit information
├── appointments.html       # Appointment request form
├── testimonials.html       # Patient success stories
├── contact.html            # Contact form + map
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Crawler instructions
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   └── script.js           # Interactive features
├── images/
│   ├── logo.jpg            # Original Decatur-style logo
│   ├── dr-browning.jpg     # Dr. Misty Browning portrait
│   └── about-clinic.jpg    # Clinic interior photo
├── .gitignore              # Git ignore patterns
└── README.md               # This file
```

---

## 🌐 Deployment to newlifefamilychiro-madison.org

The site is **pure static HTML/CSS/JS** — no build step required. Deploy to any static host:

### Netlify (drag-and-drop, free)
1. Go to https://app.netlify.com/drop
2. Drag the entire project folder onto the page
3. After deploy, go to **Domain settings → Add custom domain** → `newlifefamilychiro-madison.org`
4. Update your DNS registrar with the Netlify nameservers (or use A/CNAME records)

### Cloudflare Pages
1. Push this repo to GitHub
2. In Cloudflare dashboard: **Workers & Pages → Create application → Pages → Connect to Git**
3. Select this repo
4. Build command: *(leave empty)*
5. Build output directory: `/`
6. Add custom domain in **Custom domains** tab

### GitHub Pages (free, requires public repo or GitHub Pro)
1. Repo **Settings → Pages**
2. Source: **Deploy from a branch** → `main` → `/ (root)`
3. Add a `CNAME` file containing `newlifefamilychiro-madison.org`
4. Configure DNS at your registrar to point to GitHub Pages

---

## 🔍 SEO Checklist

This codebase is pre-optimized for local SEO:

- ✅ Unique `<title>` and meta description on every page
- ✅ Schema.org structured data (LocalBusiness, AboutPage, Service, Review, ContactPage, MedicalWebPage)
- ✅ `sitemap.xml` and `robots.txt` in root
- ✅ Open Graph + Twitter Card meta tags
- ✅ Canonical URLs
- ✅ Mobile-responsive (mobile-first CSS)
- ✅ Madison-specific NAP (Name, Address, Phone) consistent across pages
- ✅ Google Maps embed on Contact page
- ✅ Breadcrumb navigation with BreadcrumbList schema
- ✅ Lazy-loaded images
- ✅ Preconnect hints for Google Fonts

### Post-deploy actions
1. **Submit sitemap to Google Search Console**: https://search.google.com/search-console → Property → Sitemaps → add `sitemap.xml`
2. **Verify Bing Webmaster Tools**: https://www.bing.com/webmasters
3. **Create / claim Google Business Profile** for the Madison location (most important local SEO step)
4. **Submit to other directories**: Yelp, Apple Maps, Bing Places, Healthgrades, WebMD, Vitals

---

## 🛠 Local Development

No build tools required. To preview locally:

```bash
# Python 3
python3 -m http.server 8000

# Or Node.js (if installed)
npx serve .
```

Then open http://localhost:8000 in your browser.

> **Note:** The site is currently deployed at https://htv7ucxc08wb.space.minimax.io for preview.

---

## 📞 Contact

For questions about this codebase, contact the development team.

Built for New Life Family Chiropractic – Madison, AL.
Web design inspired by https://www.newlifefamilychiro.org/ (Decatur, AL).
