// One Line, One Minute: The Vending Machine Pickup Line Contest.
// Writes exactly one pickup line, spoken by the vending machine itself,
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default ./entry.txt).
// Deterministic: no dates, no randomness, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "A thousand snacks passed through my coils and I never hummed once \u2014 until you walked by.";

const CODE_POINTS = [...LINE].length;
if (CODE_POINTS < 1 || CODE_POINTS > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${CODE_POINTS}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only white space");
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
