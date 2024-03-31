import { NextResponse } from "next/server"
export async function GET() {
    return NextResponse.json({ characters: "hey" })
}

export async function POST( ) {
    return NextResponse.json({ characters: "hey" })
}