export type ThemeId = "a" | "b" | "c" | "d";

export const THEMES: {
  id: ThemeId;
  label: string;
  shortLabel: string;
  accentHex: string;
  description: string;
}[] = [
  {
    id: "a",
    label: "Pure B&W Cinematic",
    shortLabel: "B&W",
    accentHex: "#ffffff",
    description:
      "Black background, white type, monochrome imagery. Strongest match to DORWA's logo and visual-storyteller positioning.",
  },
  {
    id: "b",
    label: "Black + Warm Gold",
    shortLabel: "Gold",
    accentHex: "#c9a961",
    description:
      "Premium metallic accent on CTAs and highlights. Evokes desert / Valley of the Sun.",
  },
  {
    id: "c",
    label: "Red Gradient (retuned)",
    shortLabel: "Red",
    accentHex: "#ef4444",
    description:
      "Template's red→gray system retuned for DORWA. Bold and energetic, less distinctive.",
  },
  {
    id: "d",
    label: "Black + Electric Cyan",
    shortLabel: "Cyan",
    accentHex: "#4adede",
    description:
      "Cool cyan accent. Reads more 'tech studio' than 'cinematic agency.'",
  },
];

export function isThemeId(value: string): value is ThemeId {
  return value === "a" || value === "b" || value === "c" || value === "d";
}
