export function getNBNScore(address: string): number {
  const addr = address.toLowerCase();

  if (addr.includes("fttp") || addr.includes("full fibre") || addr.includes("fibre to the premises")) {
    return 20;
  }

  if (addr.includes("fttn") || addr.includes("fibre to the node") || addr.includes("node")) {
    return 14;
  }

  if (addr.includes("wireless") || addr.includes("fixed wireless")) {
    return 8;
  }

  if (addr.includes("satellite")) {
    return 4;
  }

  return 12; // Unknown = neutral fallback
}
