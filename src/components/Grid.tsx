import type { ReactNode } from 'react';

export default function Grid({ variant, children }: { variant?: 'offset' | 'small'; children: ReactNode }) {
  return <ul className={`grid ${variant === 'offset' ? 'offset' : ''} ${variant === 'small' ? 'small' : ''}`}>{children}</ul>;
}
