import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase environment variables are not set");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local",
    );
  }

  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occurred -- no svix headers", {
      status: 400,
    });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occurred", {
      status: 400,
    });
  }

  const eventType = evt.type;

  if (eventType === "user.created") {
    const {
      id,
      created_at,
      first_name,
      last_name,
      image_url,
      email_addresses,
    } = payload.data;

    // Convert the Unix timestamp to ISO 8601 date string
    const createdAtISO = new Date(created_at).toISOString();

    const { data: user, error } = await supabase.from("User").insert([
      {
        id,
        created_at: createdAtISO,
        first_name,
        last_name,
        image_url,
        email_address: email_addresses[0].email_address,
      },
    ]);

    if (error) {
      console.error("Error inserting user into Supabase:", error);
      return new Response("Error occurred while inserting user", {
        status: 500,
      });
    }
    console.log("User inserted successfully:", user);
  }

  return new Response("", { status: 200 });
}
