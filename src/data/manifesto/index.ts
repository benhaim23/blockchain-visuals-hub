
import { ManifestoChapter } from './types';
import { executiveSummary } from './chapters/executiveSummary';
import { chapter1 } from './chapters/chapter1';
import { chapter2 } from './chapters/chapter2';
import { chapter3 } from './chapters/chapter3';
import { chapter4 } from './chapters/chapter4';
import { chapter5 } from './chapters/chapter5';
import { chapter6 } from './chapters/chapter6';
import { chapter7 } from './chapters/chapter7';
import { chapter8 } from './chapters/chapter8';
import { chapter9 } from './chapters/chapter9';
import { chapter12 } from './chapters/chapter12';
import { chapter13 } from './chapters/chapter13';

export const manifestoChapters: ManifestoChapter[] = [
  executiveSummary,
  chapter1,
  chapter2,
  chapter3,
  chapter4,
  chapter5,
  chapter6,
  chapter7,
  chapter8,
  chapter9,
  chapter12,
  chapter13
];

export * from './types';
