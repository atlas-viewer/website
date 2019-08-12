declare module 'react-fast-highlight' {
  import * as React from 'react';

  type ReactFastHighlight = React.FC<{ languages: string[]; className?: string }>;

  declare var reactFastHighlight: { Highlight: ReactFastHighlight };

  export = reactFastHighlight;
}
