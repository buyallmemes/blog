/**
 * Icon configuration for the application.
 * This file centralizes all FontAwesome icon imports and registration.
 */
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

// Solid icons (general UI elements)
import { faLink } from '@fortawesome/free-solid-svg-icons';

// Brand icons (social media, external services)
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

/**
 * Registers all application icons with the FontAwesome library.
 * Icons are grouped by type (solid, regular, brand) for better organization.
 *
 * To add new icons:
 * 1. Import the icon from the appropriate FontAwesome package
 * 2. Add it to the appropriate library.addIcons() call below
 * 3. Update this documentation if adding a new category
 *
 * @param library - The FontAwesome icon library instance
 */
export function addIcons(library: FaIconLibrary): void {
  // UI element icons (from solid icon set)
  library.addIcons(
    faLink // Used for anchor links
  );

  // Social media and external service icons (from brands icon set)
  library.addIcons(
    faLinkedinIn // LinkedIn sharing
  );
}
