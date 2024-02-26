export interface TgButton {
  show: () => void;
  hide: () => void;
  setText: (text: string) => void;
  onClick: (callback: () => void) => void;
  offClick: (callback: () => void) => void;
  enable: () => void;
  disable: () => void;
}
