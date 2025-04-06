
export interface ManifestoChapter {
  number: number;
  title: string;
  pdfPath?: string;
  mdPath?: string;
  mdContent?: string;
}

// Split chapters into smaller arrays to improve file organization
import { chaptersIntro } from './manifestoChapters/chaptersIntro';
import { chaptersAnalytics } from './manifestoChapters/chaptersAnalytics';
import { chaptersAdvanced } from './manifestoChapters/chaptersAdvanced';

// Combine all chapter sections
export const manifestoChapters: ManifestoChapter[] = [
  ...chaptersIntro,
  ...chaptersAnalytics,
  ...chaptersAdvanced
];
