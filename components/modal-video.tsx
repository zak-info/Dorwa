"use client";

import { useState, useRef } from "react";
import type { StaticImageData } from "next/image";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Image from "next/image";

interface ModalVideoProps {
  thumb: StaticImageData | string;
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
  video: string;
  videoWidth: number;
  videoHeight: number;
  label?: string;
  duration?: string;
}

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
  label = "Play reel",
  duration,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative">
      <button
        className="group relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-brand-strong bg-brand-elev focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--brand-ring)]"
        onClick={() => setModalOpen(true)}
        aria-label={label}
        data-aos="fade-up"
        data-aos-delay={200}
      >
        <figure className="relative w-full overflow-hidden rounded-2xl">
          <Image
            className="w-full opacity-70 transition duration-700 group-hover:opacity-90 group-hover:scale-[1.02]"
            src={thumb}
            width={thumbWidth}
            height={thumbHeight}
            priority
            alt={thumbAlt}
          />
          <span aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--brand-bg)]/85 via-transparent to-transparent" />
        </figure>

        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="flex items-center gap-3 rounded-full bg-[var(--brand-bg)]/80 px-5 py-3 backdrop-blur-sm transition group-hover:bg-[var(--brand-bg)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              fill="none"
              viewBox="0 0 22 22"
              aria-hidden
            >
              <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5" className="text-fg/40" />
              <path d="M9 7l6 4-6 4V7Z" fill="currentColor" className="text-accent" />
            </svg>
            <span className="text-sm font-medium text-fg">
              {label}
              {duration && (
                <>
                  <span className="mx-2 text-dim">·</span>
                  <span className="text-muted">{duration}</span>
                </>
              )}
            </span>
          </span>
        </span>
      </button>

      <Dialog initialFocus={videoRef} open={modalOpen} onClose={() => setModalOpen(false)}>
        <DialogBackdrop
          transition
          className="fixed inset-0 z-99999 bg-black/80 transition-opacity duration-300 ease-out data-closed:opacity-0"
        />
        <div className="fixed inset-0 z-99999 flex px-4 py-6 sm:px-6">
          <div className="mx-auto flex h-full max-w-6xl items-center">
            <DialogPanel
              transition
              className="aspect-video max-h-full w-full overflow-hidden rounded-2xl bg-black shadow-2xl duration-300 ease-out data-closed:scale-95 data-closed:opacity-0"
            >
              <video ref={videoRef} width={videoWidth} height={videoHeight} loop controls autoPlay>
                <source src={video} type="video/mp4" />
              </video>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
