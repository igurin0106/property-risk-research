export const env = {
  mongodb: {
    uri: process.env.MONGODB_URI,
  },
  nextAuth: {
    secret: process.env.NEXTAUTH_SECRET,
    url: process.env.NEXTAUTH_URL,
  },
  api: {
    reinfolibKey: process.env.REINFOLIB_API_KEY,
    geocodingBaseUrl: process.env.GEOCODING_API_BASE_URL || 'https://nominatim.openstreetmap.org',
  },
  app: {
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  },
};

export function validateEnv(): void {
  const requiredEnvVars = [
    ['MONGODB_URI', env.mongodb.uri],
    ['NEXTAUTH_SECRET', env.nextAuth.secret],
    ['NEXTAUTH_URL', env.nextAuth.url],
  ];

  const missingEnvVars = requiredEnvVars.filter(([, value]) => !value);

  if (missingEnvVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingEnvVars.map(([name]) => name).join(', ')}`
    );
  }
}
