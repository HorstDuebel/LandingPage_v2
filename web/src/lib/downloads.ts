export type LogoDownload = {
  id: string;
  label: string;
  logo: string;
  logoAlt: string;
  file: string;
  downloadFileName: string;
};

export type DownloadItem = {
  slug: string;
  active: boolean;
  title: string;
  description: string;
  file: string;
  downloadFileName: string;
  eventLabel?: string;
  /** Zusätzliche Logo-Downloads auf derselben Seite */
  logoDownloads?: readonly LogoDownload[];
  /** Phase 2: E-Mail vor Download abfragen */
  emailGate: boolean;
  /** Phase 2: Opt-in für KI-Informationen */
  marketingOptIn: boolean;
  /** Phase 2: Formspree/Web3Forms Endpoint */
  formEndpoint?: string;
};

export const downloadsConfig = {
  enabled: true,
  items: [
    {
      slug: "khvr",
      active: true,
      title: "Handout: KI-Vortrag",
      description:
        "Begleitmaterial zum Vortrag über Künstliche Intelligenz – kompakt zusammengefasst zum Nachlesen.",
      file: "/downloads/khvr-handout.pdf",
      downloadFileName: "KI-Vortrag-Handout-KHVR-Rossdorf.pdf",
      eventLabel: "Kulturhistorischer Verein Roßdorf",
      emailGate: false,
      marketingOptIn: false,
      logoDownloads: [
        {
          id: "claude",
          label: "Setup Claude",
          logo: "/logos/claude-ai-logo.jpg",
          logoAlt: "Claude AI",
          file: "/downloads/Setup-Claude_04-09-2026.pdf",
          downloadFileName: "Setup-Claude_04-09-2026.pdf",
        },
        {
          id: "mistral",
          label: "Setup Mistral Vibe",
          logo: "/logos/mistral-ai-logo.jpg",
          logoAlt: "Mistral AI",
          file: "/downloads/Setup-Mistral-Vibe_04-09-2026.pdf",
          downloadFileName: "Setup-Mistral-Vibe_04-09-2026.pdf",
        },
        {
          id: "chatgpt",
          label: "Setup ChatGPT",
          logo: "/logos/chatgpt-logo.jpg",
          logoAlt: "ChatGPT",
          file: "/downloads/Setup-ChatGPT_04-09-2026.pdf",
          downloadFileName: "Setup-ChatGPT_04-09-2026.pdf",
        },
      ],
    },
  ] satisfies DownloadItem[],
} as const;

export function getAllDownloadSlugs(): string[] {
  return downloadsConfig.items.map((item) => item.slug);
}

export function getDownloadBySlug(slug: string): DownloadItem | undefined {
  return downloadsConfig.items.find((item) => item.slug === slug);
}

export function isDownloadAvailable(item: DownloadItem): boolean {
  return downloadsConfig.enabled && item.active;
}
