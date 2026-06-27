import mongoose, { Connection } from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('MONGODB_URI environment variable is not defined');
}

const MONGODB_URI = process.env.MONGODB_URI;

interface CachedConnection {
  conn: Connection | null;
  promise: Promise<Connection> | null;
}

let cached: CachedConnection = {
  conn: null,
  promise: null,
};

export async function connectDB(): Promise<Connection> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      return mongoose.connection;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export async function disconnectDB(): Promise<void> {
  if (cached.conn) {
    await mongoose.disconnect();
    cached.conn = null;
    cached.promise = null;
  }
}

export default mongoose;
