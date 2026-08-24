# Instagram Reels Integration Guide

This guide explains how to add actual Instagram reels to the Omo Distro website slideshow.

## Current Implementation (Option 1: Direct Links + Thumbnails)

The slideshow currently uses **direct Instagram links** with **thumbnail images**. When a user clicks a reel, it opens in a new tab on Instagram.

### How to Add Your Reel Thumbnails

The current implementation uses placeholder Unsplash images. To use your actual Instagram reel thumbnails:

#### **Option A: Download Thumbnail Images (Recommended)**

1. **Download your reel thumbnails**
   - Go to each Instagram reel URL
   - Take a screenshot or use a tool to download the thumbnail
   - Save images to your project (e.g., `public/images/reels/reel-1.jpg`)

2. **Update the thumbnail paths in `TheAfricanStory.tsx`**
   - Open `src/pages/TheAfricanStory.tsx`
   - Find the `reels` array (around line 11)
   - Replace the Unsplash URLs with your local image paths:
     ```typescript
     { 
       id: 1, 
       title: "The Farmers", 
       description: "Stories from the fields",
       instagramUrl: "https://www.instagram.com/reel/DcQ2JlNocyc/",
       thumbnail: "/images/reels/reel-1.jpg" 
     }
     ```

3. **Add images to public folder**
   - Create folder: `public/images/reels/`
   - Add your thumbnail images: `reel-1.jpg`, `reel-2.jpg`, etc.

#### **Option B: Use Instagram oEmbed Thumbnails (Advanced)**

You can use Instagram's oEmbed API to get actual thumbnails:

1. Get Instagram oEmbed for each reel
2. Extract thumbnail URL from the response
3. Update the thumbnail URLs in the code

**Note:** This requires Instagram API setup and is more complex.

### Current Reel Configuration

The slideshow currently has 8 reels configured:

1. **The Farmers** - Stories from the fields
   - URL: https://www.instagram.com/reel/DcQ2JlNocyc/
   - Thumbnail: Placeholder Unsplash image

2. **The Traders** - Moving resources across borders
   - URL: https://www.instagram.com/reel/DbN0cSQOQbc/
   - Thumbnail: Placeholder Unsplash image

3. **The Builders** - Creating infrastructure
   - URL: https://www.instagram.com/reel/Da5spdKO88I/
   - Thumbnail: Placeholder Unsplash image

4. **The Families** - Generations of knowledge
   - URL: https://www.instagram.com/reel/DYVTDyeOhwL/
   - Thumbnail: Placeholder Unsplash image

5. **The Brands** - African products going global
   - URL: https://www.instagram.com/reel/DcBsasUo6wk/
   - Thumbnail: Placeholder Unsplash image

6. **The Future** - What's next for African resources
   - URL: https://www.instagram.com/reel/Db3qDnwqIvm/
   - Thumbnail: Placeholder Unsplash image

7. **The Community** - Building stronger together
   - URL: https://www.instagram.com/reel/DcHD35GI264/
   - Thumbnail: Placeholder Unsplash image

8. **The Journey** - From source to shelf
   - URL: https://www.instagram.com/reel/DaLJuWyMJh6/
   - Thumbnail: Placeholder Unsplash image

### How to Replace Thumbnails

**Step 1:** Download thumbnails from Instagram
- Open each reel in your browser
- Right-click and save the thumbnail image
- Or use a screenshot tool

**Step 2:** Add images to your project
```bash
mkdir -p public/images/reels
# Add your images: reel-1.jpg, reel-2.jpg, etc.
```

**Step 3:** Update `TheAfricanStory.tsx`
```typescript
const reels = [
  { 
    id: 1, 
    title: "The Farmers", 
    description: "Stories from the fields",
    instagramUrl: "https://www.instagram.com/reel/DcQ2JlNocyc/",
    thumbnail: "/images/reels/reel-1.jpg"  // Replace with your image
  },
  // ... repeat for all 8 reels
]
```

**Step 4:** Rebuild
```bash
npm run build
```

---

## Current Behavior

- ✅ Each reel shows a thumbnail image (currently placeholders)
- ✅ Hovering pauses the scrolling
- ✅ Hovering dims the thumbnail and shows play button
- ✅ Clicking opens the reel in a new tab on Instagram
- ✅ All 8 reels scroll back and forth continuously
- ✅ ~3 reels visible at a time on desktop

---

## About Video Playback on Hover

**Why actual video playback isn't implemented:**

Instagram reels cannot be directly embedded and auto-played on hover due to:
1. Instagram's embed policies (requires iframe with controls)
2. Cross-origin restrictions
3. Instagram's terms of service
4. Autoplay policies in modern browsers

**Workarounds:**

1. **Download and self-host videos** (Best control)
   - Download your reels as MP4 files
   - Host them on your server
   - Use HTML5 video tags with autoplay on hover
   - See Option 3 below

2. **Use Instagram embed iframes** (Limited control)
   - Instagram provides embed codes
   - But autoplay is not supported
   - Users must manually click play

3. **Keep current approach** (Recommended for now)
   - Use thumbnails + click to open Instagram
   - Simple, reliable, no API needed
   - Works perfectly for MVP

---

## Alternative Options

### Option 2: Instagram Embeds (API Required)

If you want reels to play directly on your site (without leaving to Instagram):

**Pros:**
- Reels play inline on your website
- Better user experience
- Keeps users on your site

**Cons:**
- Requires Instagram Basic Display API setup
- More complex implementation
- API rate limits
- Need to handle authentication
- Autoplay not supported

**Implementation Steps:**
1. Create a Facebook Developer account
2. Create an Instagram Basic Display app
3. Add OAuth redirect URLs
4. Get access token
5. Use Instagram Embed SDK or fetch media via API
6. Implement iframe embeds

**Resources:**
- [Instagram Basic Display API](https://developers.facebook.com/docs/instagram-basic-display-api)
- [Instagram Embed Guide](https://developers.facebook.com/docs/instagram/embed)

---

### Option 3: Self-Hosted Videos (Best Control)

If you want full control over the video experience:

**Pros:**
- Complete control over playback
- Can autoplay on hover
- No API dependencies
- Can add custom branding
- Works offline
- Better performance

**Cons:**
- Need to download and host videos
- Requires video hosting/storage
- Must manage video files
- Larger file sizes
- Bandwidth costs

**Implementation Steps:**
1. Download your Instagram reels (use tools like [SaveFrom](https://en.savefrom.net/) or similar)
2. Upload videos to your hosting (AWS S3, Cloudinary, Vercel, etc.)
3. Update the slideshow to use video tags instead of images
4. Add video controls

**Example Code:**
```tsx
<video 
  src="/videos/reel-1.mp4"
  muted
  loop
  playsInline
  className="the-african-reel-video"
  onMouseEnter={(e) => e.currentTarget.play()}
  onMouseLeave={(e) => e.currentTarget.pause()}
  poster="/images/reels/reel-1.jpg"
/>
```

---

## Recommendation

For the **Omo Distro website**, I recommend:

**Phase 1 (Current):** Use thumbnails + direct links
- Quick to implement
- No API setup needed
- Works immediately
- Good for MVP
- Replace placeholder images with actual thumbnails

**Phase 2 (Next):** Upgrade to self-hosted videos
- Download and host 8 showcase reels
- Add actual video playback on hover
- Better UX and control
- No dependencies on Instagram

**Phase 3 (Optional):** Consider Instagram embeds
- Only if you want to automatically sync new reels
- Requires ongoing API maintenance
- More complex but automated

---

## How to Get Actual Thumbnail Images

### Method 1: Screenshot (Easiest)
1. Open each Instagram reel
2. Take a screenshot at a good frame
3. Crop to 9:16 aspect ratio
4. Save as JPG/PNG

### Method 2: Download from Instagram
1. Use a tool like [InstaNav](https://instanav.com/) or similar
2. Paste the reel URL
3. Download the thumbnail
4. Save to your project

### Method 3: Extract from oEmbed (Advanced)
Use Instagram's oEmbed API to get thumbnail URLs programmatically.

---

## Need Help?

If you want to implement Option 2 or Option 3, let me know and I can:
- Set up the Instagram API integration
- Implement video playback controls
- Add video hosting infrastructure
- Create a video management system
- Help extract actual thumbnails from Instagram
