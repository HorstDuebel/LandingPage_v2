"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import type { DownloadItem } from "@/lib/downloads";

type DownloadGateProps = {
  item: DownloadItem;
  children: (props: { onRequestDownload: () => void }) => ReactNode;
};

/**
 * Phase 1: direkter Download.
 * Phase 2: Modal mit E-Mail (+ optional Marketing-Opt-in) vor dem Download.
 */
export function DownloadGate({ item, children }: DownloadGateProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [optIn, setOptIn] = useState(false);

  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = item.file;
    link.download = item.downloadFileName;
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleRequestDownload = () => {
    if (!item.emailGate) {
      triggerDownload();
      return;
    }

    setModalOpen(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (item.emailGate && item.formEndpoint) {
      // Phase 2: Formular an externen Dienst senden, dann Download.
      void item.formEndpoint;
      void email;
      void optIn;
    }

    setModalOpen(false);
    triggerDownload();
  };

  return (
    <>
      {children({ onRequestDownload: handleRequestDownload })}

      {item.emailGate && modalOpen ? (
        <div
          className="download-gate__backdrop"
          role="presentation"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="download-gate__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="download-gate-title"
            onClick={(event) => event.stopPropagation()}
          >
            <h2 id="download-gate-title" className="download-gate__title">
              Handout herunterladen
            </h2>
            <p className="download-gate__lead">
              Bitte tragen Sie Ihre E-Mail-Adresse ein, um das Dokument zu
              erhalten.
            </p>

            <form className="download-gate__form" onSubmit={handleSubmit}>
              <label className="download-gate__label" htmlFor="download-email">
                E-Mail-Adresse
              </label>
              <input
                id="download-email"
                type="email"
                required
                autoComplete="email"
                className="download-gate__input"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />

              {item.marketingOptIn ? (
                <label className="download-gate__checkbox">
                  <input
                    type="checkbox"
                    checked={optIn}
                    onChange={(event) => setOptIn(event.target.checked)}
                  />
                  <span>
                    Ich möchte zukünftig Informationen zu KI, Strategie und
                    verwandten Themen erhalten.
                  </span>
                </label>
              ) : null}

              <p className="download-gate__privacy">
                Hinweis: Ihre Angaben werden nur für diesen Download bzw. die
                von Ihnen erteilte Einwilligung verwendet.{" "}
                <Link href="/datenschutz">Datenschutz</Link>
              </p>

              <button type="submit" className="btn-primary w-full">
                Download starten
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
