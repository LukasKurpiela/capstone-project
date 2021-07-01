import { fileURLToPath } from 'url';
import { dirname as dirnameFromPath } from 'path';

export default function dirname(importMaterialUrl) {
  return fileURLToPath(importMaterialUrl);
}
