/// <reference types="vite-plugin-svgr/client" />

declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
  }

  declare module '*.jpg' {
    const src: string;
    export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module "*.module.css";

interface ImportMeta {
  readonly env: ImportMetaEnv
}
