/**
 * CENTRAL IMAGE REGISTRY
 * ------------------------------------------------
 * This file acts as your "Image Folder" in the code.
 * 
 * INSTRUCTIONS:
 * 1. Create a folder named "assets" inside your "public" folder.
 * 2. Put your images (jpg, png, svg) inside that "assets" folder.
 * 3. Update the paths below to match your file names.
 */

export const IMAGES = {
  // Team Member Images
  team: {
    // This points to a local file. Ensure 'snehasis.jpg' exists in 'public/assets/'
    president: '/assets/snehasis.jpg', 
    
    // Default/Placeholder images (You can replace these paths when you have real photos)
    placeholder: (id: number) => `https://picsum.photos/400/400?random=${id}`,
  },

  // Event Images
  events: {
    chainSphere: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832',
    launchEvent: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000',
  },

  // University & Brand Logos
  logos: {
    uem: 'https://uem.edu.in/wp-content/uploads/2018/06/uem-logo.png',
    iem: 'https://iem.edu.in/wp-content/uploads/2017/09/IEM-Logo-1.png',
  }
};