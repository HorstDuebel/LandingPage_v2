"use client";

import Image from "next/image";
import type { LogoDownload } from "@/lib/downloads";

type LogoDownloadGridProps = {
  items: readonly LogoDownload[];
};

function triggerDownload(item: LogoDownload) {
  const link = document.createElement("a");
  link.href = item.file;
  link.download = item.downloadFileName;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export function LogoDownloadGrid({ items }: LogoDownloadGridProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="logo-download" aria-label="Setup-Anleitungen">
      <h2 className="section-title">
        <span className="display-title-line">Setup-Anleitungen</span>
      </h2>
      <p className="logo-download__lead">
        Tippen Sie auf ein Logo, um die passende Anleitung herunterzuladen.
      </p>
      <ul className="logo-download__grid">
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className="logo-download__button"
              onClick={() => triggerDownload(item)}
              aria-label={`${item.label} als PDF herunterladen`}
            >
              <span className="logo-download__logo-wrap">
                <Image
                  src={item.logo}
                  alt=""
                  width={160}
                  height={160}
                  className="logo-download__logo"
                />
              </span>
              <span className="logo-download__label">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
