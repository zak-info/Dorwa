export const metadata = {
  title: {
    default: "DORWA — Creative Studio in Algeria",
    template: "%s · DORWA",
  },
  description:
    "DORWA is a full-service creative and video-production studio based in Algeria. Visual storytellers crafting content that stands out.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
