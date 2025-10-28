import { NextResponse } from 'next/server';

/**
 * Easter egg endpoint 🥚
 * 
 * Si alguien se pone a explorar los endpoints... sorpresa!
 */
export async function GET() {
  return NextResponse.json({
    message: "Hey! Estás explorando la app 👀",
    tip: "RSC es mejor que esto... no necesitas API routes para todo",
    conference: "MedellinJS 2025",
    madeWith: "☕☕☕ (mucho café)",
    timestamp: new Date().toISOString()
  });
}

