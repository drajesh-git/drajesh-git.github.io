# HimaRaj Vlogs - Food Vlogger Website

A modern, responsive food vlogger website showcasing authentic Indian recipes, categorized by food type, with interactive features and community engagement tools.

## Features

### 📱 Responsive Design
- Mobile-first approach
- Fully responsive layout for all screen sizes
- Works seamlessly on desktop, tablet, and mobile devices

### 🍳 Recipe Showcase
- Featured recipe section with embedded video
- Recipe grid with 6+ categorized recipes
- Recipe cards with:
  - Thumbnail images
  - Video duration
  - View and like counts
  - Channel information
  - Recipe category tags
  - Cooking time, servings, and spice level
  - Hover effects

### 📂 Recipe Categories
The channel features 6 main recipe categories:
1. **Curries & Gravies** - Traditional Indian curries with rich flavors
2. **Breads & Flatbreads** - Naan, Roti, Paratha, and more
3. **Street Food** - Popular Indian street food recipes
4. **Desserts & Sweets** - Traditional Indian sweets and desserts
5. **Vegetarian** - Delicious meat-free recipes
6. **Non-Vegetarian** - Chicken, meat, and seafood dishes

### 🎨 Modern UI/UX
- Clean and professional design inspired by YouTube
- Food-themed color scheme (warm reds, oranges, and greens)
- Smooth animations and transitions
- Interactive hover effects
- Food-appropriate typography
- Font Awesome icons integration

### 📋 Key Sections
1. **Navigation Bar** - Sticky navigation with recipe categories link
2. **Hero Section** - Welcome message with YouTube subscribe CTA
3. **Recipe Categories** - Visual category cards with icons
4. **Featured Recipe** - Highlighted recipe with video and cooking details
5. **Recipe Grid** - Collection of latest recipes by category
6. **About Section** - Food vlogger biography and social links
7. **Newsletter** - Email subscription for weekly recipes
8. **Contact** - Collaboration and business inquiry form
9. **Footer** - Links and social media

### ✨ Interactive Features
- Smooth scroll navigation
- Form submissions (newsletter and contact)
- Recipe card click handlers
- Social media integration (links to HimaRaj Vlogs YouTube)
- Animated elements on scroll
- Mobile hamburger menu
- Category filtering visualization

## File Structure

```
drajesh-git.github.io/
├── index.html          # Main HTML file with recipe content
├── styles.css          # Styling and responsive design
├── script.js           # JavaScript interactivity
└── README.md           # This file
```

## Featured Recipes

The homepage features these delicious recipes:

1. **Paneer Tikka** - Vegetarian appetizer
2. **Hyderabadi Biryani** - Premium rice and meat dish
3. **Crispy Samosa** - Popular street food
4. **Authentic Naan** - Traditional Indian bread
5. **Gulab Jamun** - Sweet dessert favorite
6. **Tandoori Chicken** - Non-vegetarian specialty

## How to Use

1. **Open the page**: Simply open `index.html` in your web browser
2. **Browse recipes**: 
   - Explore the category section to understand recipe types
   - Click on featured recipe video to watch
   - Browse the recipe grid for latest uploads
   - Click any recipe card to navigate to YouTube

3. **Customize content**: 
   - Replace "HimaRaj Vlogs" with your channel name
   - Update recipe titles and descriptions
   - Add your actual YouTube video embeds
   - Update social media links
   - Replace placeholder images with actual recipe thumbnails

4. **Customize styling**:
   - Modify colors in `:root` section of `styles.css`
   - Change fonts and spacing as needed
   - Adjust the color scheme to match your brand

## Customization Guide

### Change Primary Color
Edit the color variables in `styles.css`:
```css
:root {
    --primary-color: #e74c3c;        /* Main red */
    --food-orange: #f39c12;           /* Orange accent */
    --food-green: #27ae60;            /* Green accent */
}
```

### Add Real YouTube Videos
Replace the placeholder embed code with your actual YouTube video IDs:
```html
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID"></iframe>
```

### Add Recipe Categories
Update or add new categories in the HTML and CSS:
```html
<div class="category-card">
    <i class="fas fa-icon-name"></i>
    <h3>Category Name</h3>
    <p>Category description</p>
</div>
```

### Update Contact Information
Edit the contact section with your actual details:
- Email: your-email@example.com
- Phone: +91 (555) 123-4567
- Location: Your City, India

### Add Social Media Links
Update the social media links in the about and footer sections:
- YouTube: https://www.youtube.com/@YourChannel
- Instagram: https://www.instagram.com/yourprofile
- Facebook: https://www.facebook.com/yourpage
- Twitter: https://www.twitter.com/yourhandle

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid and Flexbox
- **JavaScript (Vanilla)** - No dependencies required
- **Font Awesome** - Icon library (food-themed)
- **Placeholder Service** - For sample images

## Features Ready to Enhance

- Add actual YouTube playlist integration
- Implement backend for newsletter/contact forms
- Add recipe comment section
- Create detailed recipe pages with ingredients and instructions
- Implement user authentication for saved recipes
- Add recipe search and filter functionality
- Create printable recipe cards
- Add nutritional information
- Implement recipe difficulty ratings

## Deployment

To deploy on GitHub Pages:

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Update food vlogger content"
   ```

2. Push to your repository:
   ```bash
   git push origin main
   ```

3. Your site will be available at: `https://yourusername.github.io`

## Notes

- All placeholder images can be replaced with real recipe photos
- Customize the channel name and branding throughout
- Ensure you customize all links before deploying
- Test on multiple devices before publishing
- Consider adding Google Analytics for tracking

## Future Enhancements

- [ ] Dark mode toggle
- [ ] Advanced recipe search
- [ ] Recipe difficulty and time filters
- [ ] Ingredient-based recipe suggestions
- [ ] Shopping list generator
- [ ] Nutrition calculator
- [ ] User reviews and ratings
- [ ] Recipe sharing on social media
- [ ] Mobile app integration

## License

This food vlogger page is open source and free to use and modify.

---

**Happy Cooking! 🍳** - Enjoy sharing your authentic Indian recipes with the world!

