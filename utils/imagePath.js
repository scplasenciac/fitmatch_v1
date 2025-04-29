/**
 * Utility function to handle image paths consistently across development and production
 * @param {string} path - The path to the image relative to the public directory
 * @returns {string} - The full path to the image
 */
export function getImagePath(path) {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // Always use the path without the prefix in development
  return `/${cleanPath}`;
} 