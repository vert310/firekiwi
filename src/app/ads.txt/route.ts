import { NextResponse } from 'next/server';

export async function GET() {
  const adsTxtContent = `google.com, pub-2650916309334823, DIRECT, f08c47fec0942fa0`;

  return new NextResponse(adsTxtContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  });
}

