import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocumentDownloadCard } from "@/components/document-download-card";
import { LogoDownloadGrid } from "@/components/logo-download-grid";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import {
  downloadsConfig,
  getDownloadBySlug,
  getAllDownloadSlugs,
  isDownloadAvailable,
} from "@/lib/downloads";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllDownloadSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getDownloadBySlug(slug);

  if (!item) {
    return {
      title: "Dokument nicht gefunden",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: item.title,
    description: item.description,
    robots: { index: false, follow: false },
    alternates: { canonical: `/d/${slug}` },
  };
}

export default async function DownloadPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getDownloadBySlug(slug);

  if (!item) {
    notFound();
  }

  const available = isDownloadAvailable(item);

  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader variant="download" />

      <main className="download-page section-block flex-1 bg-[var(--surface)] pt-28 md:pt-32">
        <div className="page-container">
          <div className="download-layout__column">
            <p className="section-kicker">Dokumente</p>
            <h1 className="section-title mt-2">
              <span className="display-title-line">Handout-Download</span>
            </h1>

            {available ? (
              <div className="mt-10 space-y-12">
                <DocumentDownloadCard item={item} />
                {item.logoDownloads?.length ? (
                  <LogoDownloadGrid items={item.logoDownloads} />
                ) : null}
              </div>
            ) : (
              <div className="download-unavailable mt-10">
                <p className="section-lead">
                  Dieses Handout ist derzeit nicht verfügbar.
                </p>
                {!downloadsConfig.enabled ? (
                  <p className="body-text mt-4">
                    Der Download-Bereich ist vorübergehend deaktiviert.
                  </p>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
