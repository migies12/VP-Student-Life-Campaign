# VP Student Life Campaign Website - Customization Guide

Welcome to your VP Student Life campaign website! This guide will help you quickly customize the website with your personal information and campaign details.

## 🚀 Quick Start

1. Open the `index.html` file in a text editor
2. Search for text in square brackets like `[CANDIDATE NAME]` and replace with your information
3. Save the file and open it in a web browser to see your changes

## 📝 Text to Replace

### Personal Information
- `[CANDIDATE NAME]` - Replace with your full name
- `[YOUR EMAIL ADDRESS]` - Your campaign email
- `[YOUR INSTAGRAM HANDLE]` - Your Instagram username
- `[YOUR FACEBOOK PAGE]` - Your Facebook page name
- `[YOUR PHONE NUMBER]` - Your campaign phone number

### About Section
- `[ADD YOUR PERSONAL STORY HERE...]` - Write your personal background and why you're running
- `[X] Years at UBC` - Number of years you've been at UBC
- `[X] Clubs Involved` - Number of clubs/organizations you've been part of
- `[X] Events Organized` - Number of events you've helped organize
- `[X] Students Reached` - Estimate of students you've impacted

### Experience List
Replace these with your actual experiences:
- `[ADD YOUR RELEVANT EXPERIENCE...]`
- `[ADD ANOTHER EXPERIENCE]`
- `[ADD ANOTHER EXPERIENCE]`

### Platform Points
Replace these with your actual platform points:
- `[PLATFORM POINT 1 TITLE]` and its description
- `[PLATFORM POINT 2 TITLE]` and its description
- `[PLATFORM POINT 3 TITLE]` and its description
- `[PLATFORM POINT 4 TITLE]` and its description

## 📸 Adding Photos

### Method 1: Click to Upload (Interactive)
1. Open the website in a browser
2. Click on the placeholder areas where it says "Add Your Photo"
3. Select your image files

### Method 2: Direct File Replacement
1. Save your photos in the same folder as the website files
2. Name them appropriately (e.g., `profile.jpg`, `about.jpg`)
3. Update the `src` attributes in the HTML:
   - Find `<img src="#" alt="[CANDIDATE NAME]" id="candidate-image">`
   - Change to `<img src="profile.jpg" alt="[CANDIDATE NAME]" id="candidate-image">`

## 🎨 Color Customization

If you want to change the colors, edit the CSS variables in `styles.css`:

```css
:root {
    --primary-blue: #002145;      /* UBC Navy Blue */
    --ubc-blue: #0f4c8c;         /* UBC Blue */
    --accent-gold: #FFD700;      /* Gold accent */
    --bright-green: #2E8B57;     /* Green for nature/campus */
    --vibrant-orange: #FF6B35;   /* Orange for energy */
    --energetic-red: #E53E3E;    /* Red for excitement */
}
```

## 📱 Social Media Links

Update the social media links in the footer and contact sections:

1. Find `<a href="#" class="social-link">`
2. Replace `#` with your actual social media URLs
3. Example: `<a href="https://instagram.com/yourusername" class="social-link">`

## 🌟 Platform Details

For each platform point, make sure to:
1. Use a clear, action-oriented title
2. Explain specifically what you'll do
3. Show how it benefits students
4. Keep it concise but impactful

## 📋 Example Platform Points

Here are some example platform points to inspire you:

### 1. "Expand Late-Night Study Spaces"
"Create 24/7 study lounges in every residence and key campus buildings, because great ideas don't follow a 9-5 schedule."

### 2. "Thunderbirds Spirit Week"
"Launch an annual campus-wide spirit week with events, competitions, and prizes to boost school pride and community connection."

### 3. "Student Life App"
"Develop a mobile app connecting students to events, clubs, volunteer opportunities, and campus resources in real-time."

### 4. "Outdoor Adventure Program"
"Partner with local outdoor companies to offer discounted ski trips, hiking excursions, and beach days for all students."

## 🔧 Technical Notes

- The website is fully responsive and will work on all devices
- All animations and interactions are built-in
- The contact form is set up but will need backend integration for actual email sending
- Images should be web-optimized (JPG or PNG, under 1MB each)

## 🎯 Final Tips

1. **Be Authentic**: Use your real voice and personality
2. **Be Specific**: Concrete plans are more convincing than vague promises
3. **Show Impact**: Use numbers and examples where possible
4. **Stay Positive**: Focus on what you'll improve, not what's wrong
5. **Test Everything**: View your website on phone, tablet, and computer

## 🆘 Need Help?

If you need help customizing the website:
1. Check that you've replaced all bracketed placeholder text
2. Make sure image file names match what's in the HTML
3. Test the website in multiple browsers
4. Ask a tech-savvy friend to review it before launching

Good luck with your campaign! 🚀

---

**Remember**: This website represents you and your campaign. Take time to make it authentic, professional, and engaging!