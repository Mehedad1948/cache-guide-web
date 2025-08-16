export const dynamic = 'force-dynamic';

export async function GET() {
  const timestamp = Date.now();
  return new Response(JSON.stringify({ timestamp }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
