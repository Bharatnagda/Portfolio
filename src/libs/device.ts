import { headers } from "next/headers";

export async function getDeviceType(): Promise<"Mobile" | "Tablet" | "Desktop"> {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") || "";

  if (/mobile/i.test(userAgent)) {
    return "Mobile";
  } else if (/tablet/i.test(userAgent)) {
    return "Tablet";
  } else {
    return "Desktop";
  }
}