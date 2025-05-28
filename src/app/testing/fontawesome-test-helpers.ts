// Common testing utilities for FontAwesome
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

// A helper function to register all required FontAwesome icons for testing
export function registerTestIcons(library: FaIconLibrary): void {
  // UI element icons
  library.addIcons(faLink);

  // Social media icons
  library.addIcons(faLinkedinIn);
}
