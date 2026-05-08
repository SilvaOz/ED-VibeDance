import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/was-ist`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/veranstaltungen`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/kuenstler`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/artistas/oscar-silva`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/artistas/la-lvcha`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/zehnerkarte`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/blog/didgeridoo-und-ich`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/blog/was-ist-ecstatic-dance`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/blog/didgeridoo-heilklang`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/blog/zehnerkarte-lohnt-sich`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/community`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/kontakt`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
  ];
}
