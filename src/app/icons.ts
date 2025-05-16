// Import and configure Font Awesome icons
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

// Function to add icons to the library
export function addIcons(library: FaIconLibrary) {
  // Add solid icons
  library.addIcons(faLink);

  // Add brand icons
  library.addIcons(faLinkedinIn);
}
