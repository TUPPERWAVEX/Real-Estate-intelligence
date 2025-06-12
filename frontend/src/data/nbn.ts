export function getNBNScore(address: string): number {
  const addr = address.toLowerCase();

  if (addr.includes("fttp") || addr.includes("full fibre")) return 20;
  if (addr.includes("fttn") || addr.includes("node")) return 14;
  if (addr.includes("wireless")) return 8;
  if (addr.includes("satellite")) return 4;

  return 12; // Default fallback for unknown
}
