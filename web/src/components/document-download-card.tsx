"use client";

import type { DownloadItem } from "@/lib/downloads";
import { DownloadGate } from "@/components/download-gate";
import { PdfDocumentIcon } from "@/components/pdf-document-icon";

type DocumentDownloadCardProps = {
  item: DownloadItem;
};

export function DocumentDownloadCard({ item }: DocumentDownloadCardProps) {
  return (
    <DownloadGate item={item}>
      {({ onRequestDownload }) => (
        <article className="download-card">
          <div className="download-card__main">
            <div className="download-card__icon-wrap">
              <PdfDocumentIcon className="download-card__icon" />
            </div>
            <div className="download-card__body">
              {item.eventLabel ? (
                <p className="download-card__event">{item.eventLabel}</p>
              ) : null}
              <h2 className="download-card__title">{item.title}</h2>
              <p className="download-card__desc">{item.description}</p>
            </div>
          </div>
          <button
            type="button"
            className="btn-primary download-card__button"
            onClick={onRequestDownload}
          >
            Handout herunterladen
          </button>
        </article>
      )}
    </DownloadGate>
  );
}
