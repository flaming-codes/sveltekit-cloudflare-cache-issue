# Example for bug in `cloudflare-adapter` w/ caching

This minimal Sveltekit-app shows that deployed pages on Cloudflare Pages with a `maxage` and `credentials: 'omit'` lead to a crash on page load.

The page loads fine if the user navigates to it **from another page**, i.e. using client-side routing, but crashes when the page gets called directly.

### Live demo

https://070b0bb1.sveltekit-cloudflare-cache-issue.pages.dev/posts/slug-101

### Steps to reproduce

1. Deploy on Cloudflare pages
2. Go to landing page
3. Click **Posts Page**
4. Click **Open posts detail page**
5. Page loads
6. Reload, see error
