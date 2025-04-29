/**
 * Utility function to handle image paths consistently across development and production
 * @param {string} path - The path to the image relative to the public directory
 * @returns {string} - The full path to the image
 */
export function getImagePath(path) {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // In development, use the path as is
  if (process.env.NODE_ENV !== 'production') {
    return `/${cleanPath}`;
  }
  
  // In production, add the base path
  return `/fitmatch_v1/${cleanPath}`;
} 