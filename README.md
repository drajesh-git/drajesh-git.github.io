# TechVlogs - Sample Vlogger Page

A modern, responsive vlogger website showcasing video content, channel information, and community engagement tools.

## Features

### 📱 Responsive Design
- Mobile-first approach
- Fully responsive layout for all screen sizes
- Works seamlessly on desktop, tablet, and mobile devices

### 🎥 Video Showcase
- Featured video section with highlighted content
- Video grid with 6+ sample videos
- Video cards with:
  - Thumbnail images
  - Video duration
  - View and like counts
  - Channel information
  - Hover effects

### 🎨 Modern UI/UX
- Clean and professional design inspired by YouTube
- Smooth animations and transitions
- Interactive hover effects
- Color scheme optimized for video content
- Font Awesome icons integration

### 📋 Key Sections
1. **Navigation Bar** - Sticky navigation with smooth scrolling
2. **Hero Section** - Welcome message with call-to-action
3. **Featured Video** - Highlighted video with detailed info
4. **Video Grid** - Collection of latest videos
5. **About Section** - Vlogger biography and social links
6. **Newsletter** - Email subscription form
7. **Contact** - Contact form and information
8. **Footer** - Links and social media

### ✨ Interactive Features
- Smooth scroll navigation
- Form submissions (newsletter and contact)
- Video card click handlers
- Social media integration points
- Animated elements on scroll
- Mobile hamburger menu

## File Structure

```
drajesh-git.github.io/
├── index.html          # Main HTML file
├── styles.css          # Styling and responsive design
├── script.js           # JavaScript interactivity
└── README.md           # This file
```

## How to Use

1. **Open the page**: Simply open `index.html` in your web browser
2. **Customize content**: 
   - Replace "TechVlogs" with your channel name
   - Update video titles and descriptions
   - Add your actual YouTube video embeds
   - Update social media links
   - Replace placeholder images with actual thumbnails

3. **Customize styling**:
   - Modify colors in `:root` section of `styles.css`
   - Change fonts and spacing as needed
   - Adjust the color scheme to match your brand

4. **Add real content**:
   - Replace YouTube embed IDs in the featured section
   - Update video thumbnails
   - Add your profile picture
   - Update contact information

## Customization Guide

### Change Primary Color
Edit the `--primary-color` variable in `styles.css`:
```css
:root {
    --primary-color: #ff0000; /* Change to your brand color */
}
```

### Add YouTube Videos
Replace the placeholder embed code with your actual YouTube video ID:
```html
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID"></iframe>
```

### Update Contact Information
Edit the contact section with your actual details:
- Email: contact@yoursite.com
- Phone: +1 (555) 123-4567
- Location: Your City, State

### Add Social Media Links
Update the social media links in the about and footer sections with your actual profiles.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid and Flexbox
- **JavaScript (Vanilla)** - No dependencies required
- **Font Awesome** - Icon library
- **Placeholder Service** - For sample images

## Features Ready to Enhance

- Add actual YouTube playlist integration
- Implement backend for newsletter/contact forms
- Add video comment section
- Implement user authentication
- Add analytics tracking
- Create video playlist pages
- Add blog/article section

## Deployment

To deploy on GitHub Pages:

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Initial vlogger page"
   ```

2. Push to your repository:
   ```bash
   git push origin main
   ```

3. Your site will be available at: `https://yourusername.github.io`

## Notes

- All placeholder images use placeholder.com service
- Ensure you customize all links and content before deploying
- Test on multiple devices before publishing
- Consider adding Google Analytics for tracking

## Future Enhancements

- [ ] Dark mode toggle
- [ ] Search functionality
- [ ] Video filtering by category
- [ ] Comments section
- [ ] User subscription tracking
- [ ] Recommendation algorithm
- [ ] Video upload functionality

## License

This sample page is open source and free to use and modify.

---

**Happy vlogging! 🎥**
