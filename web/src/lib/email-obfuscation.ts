/**
 * E-Mail nur kodiert im Quelltext – Dekodierung erfolgt clientseitig.
 * Schützt vor einfachen Harvestern; 100 % Spam-Schutz ist technisch nicht möglich.
 */
export const protectedEmailEncoded = {
  u: "b2ZuSQ==",
  d: "ZWQudHNyb2hsbHVWa25hckY=",
} as const;

export function decodeProtectedEmail(): string {
  const user = atob(protectedEmailEncoded.u).split("").reverse().join("");
  const domain = atob(protectedEmailEncoded.d).split("").reverse().join("");
  return `${user}@${domain}`;
}
