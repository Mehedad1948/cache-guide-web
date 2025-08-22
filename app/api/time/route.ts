export const dynamic = 'force-dynamic';

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 3 * 1000));
  const timestamp = Date.now();
  return new Response(JSON.stringify({ timestamp }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
