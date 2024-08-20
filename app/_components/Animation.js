"use client";

import gsap from "gsap";
import { useEffect } from "react";

function Animation({ children }) {
  useEffect(() => {
    gsap.fromTo(
      [".nav", ".titleText", ".subText", ".image", ".icons"],
      {
        y: 100, // Mulai dari posisi di bawah
        opacity: 0, // Dengan opasitas 0 (tak terlihat)
      },
      {
        y: 0, // Bergerak ke posisi awal
        opacity: 1, // Dan berubah menjadi terlihat
        duration: 2, // Durasi animasi dalam detik
        stagger: 0.5, // Delay di antara setiap elemen
        ease: "power2.in", // Pilihan easing untuk membuat animasi lebih halus
      },
    );
    gsap.fromTo(
      ".fadeLeft",
      {
        y: 50,
        x: -50,
        opacity: 0,
        duration: 2,
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.5, // Delay di antara setiap elemen
        ease: "sine.inOut", // Pilihan easing untuk membuat animasi lebih halus
      },
    );
    gsap.fromTo(
      ".fadeRight",
      {
        y: 50,
        x: 50,
        opacity: 0,
        duration: 2,
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.5, // Delay di antara setiap elemen
        ease: "sine.inOut", // Pilihan easing untuk membuat animasi lebih halus
      },
    );
  }, []);

  return <>{children}</>;
}

function AnimationCabins({ children, reload }) {
  useEffect(() => {
    gsap.fromTo(
      ".itemCabin",
      {
        scale: 0,
        opacity: 0, // Dengan opasitas 0 (tak terlihat)
      },
      {
        scale: 1,
        opacity: 1, // Dan berubah menjadi terlihat
        duration: 2, // Durasi animasi dalam detik
        stagger: 0.5, // Delay di antara setiap elemen
        ease: "power2.out", // Pilihan easing untuk membuat animasi lebih halus
      },
    );
  }, [reload]);

  return <>{children}</>;
}

export { Animation, AnimationCabins };
