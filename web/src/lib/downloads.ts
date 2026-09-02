export type DownloadItem = {
  slug: string;
  active: boolean;
  title: string;
  description: string;
  file: string;
  downloadFileName: string;
  eventLabel?: string;
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
