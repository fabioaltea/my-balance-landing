export interface NavItem {
  label: string;
  path: string;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

// Asset type declarations
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}