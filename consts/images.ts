/**
 * Central registry for static local images bundled via `require()`.
 *
 * App-config assets (icon, adaptive-icon, favicon, splash-*) are NOT listed
 * here — those are referenced as string paths from `app.config.ts`.
 */
export const IMAGES = {
  guestTruck: require('@/assets/images/guest-truck.png'),
  backgrounds: {
    heroClient: require('@/assets/images/backgrounds/hero-client.png'),
    heroTransporter: require('@/assets/images/backgrounds/hero-transporter.png'),
    profileClient: require('@/assets/images/backgrounds/profile-client.png'),
    profileTransporter: require('@/assets/images/backgrounds/profile-transporter.png'),
  },
  vehicles: {
    expressCargo: require('@/assets/images/vehicles/express-cargo.png'),
    expressCargoWide: require('@/assets/images/vehicles/express-cargo-wide.png'),
    lightCargo: require('@/assets/images/vehicles/light-cargo.png'),
    lightCargoWide: require('@/assets/images/vehicles/light-cargo-wide.png'),
    heavyCargo: require('@/assets/images/vehicles/heavy-cargo.png'),
    heavyCargoWide: require('@/assets/images/vehicles/heavy-cargo-wide.png'),
  },
} as const;
