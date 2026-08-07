import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"
export const runtime = "nodejs"

export async function GET() {
  const keys = [
    "DATABASE_URL",
    "Hutchet_DATABASE_URL",
    "Hutchet_DATABASE_URL_UNPOOLED",
    "Hutchet_PGHOST",
    "Hutchet_PGHOST_UNPOOLED",
    "Hutchet_PGUSER",
    "Hutchet_PGPASSWORD",
    "Hutchet_PGDATABASE",
    "Hutchet_POSTGRES_URL",
    "Hutchet_POSTGRES_URL_NON_POOLING",
    "Hutchet_POSTGRES_URL_NO_SSL",
    "Hutchet_POSTGRES_PRISMA_URL",
    "Hutchet_POSTGRES_HOST",
    "Hutchet_POSTGRES_USER",
    "Hutchet_POSTGRES_PASSWORD",
    "Hutchet_POSTGRES_DATABASE",
    "Hutchet_NEON_PROJECT_ID",
    "AUTH_SECRET",
  ]
  const out: Record<string, string> = {}
  for (const k of keys) {
    out[k] = process.env[k] ?? "(unset)"
  }
  return NextResponse.json(out)
}
