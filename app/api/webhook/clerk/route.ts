import { Webhook } from "svix";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { connectDb } from "@/lib/db";
import User from "@/models/User";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET!;

  console.log("Webhook triggered");

  const headerPayload = await headers();
  

  const payload = await req.json();

  console.log(payload, headerPayload);


}