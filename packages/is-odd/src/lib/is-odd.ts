import { isEvenly } from '@int/is-even';

export function isOdd(): string {
  return 'is-odd';
}

export const isOddly = (input: number) => !isEvenly(input);
