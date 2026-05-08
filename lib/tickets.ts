import QRCode from "qrcode";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ecstaticdanceleipzig.de";

export async function generateTicketId(): Promise<string> {
  const { nanoid } = await import("nanoid");
  return `tk_${nanoid(10)}`;
}

export async function generateCardId(): Promise<string> {
  const { nanoid } = await import("nanoid");
  return `zk_${nanoid(10)}`;
}

export async function generateQR(id: string): Promise<string> {
  const url = `${SITE_URL}/ticket/${id}`;
  return QRCode.toDataURL(url, {
    errorCorrectionLevel: "H",
    width: 400,
    margin: 2,
    color: { dark: "#1A1A2E", light: "#F8F5EE" },
  });
}
