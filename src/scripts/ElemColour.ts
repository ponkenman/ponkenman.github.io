export class ElemColour {
  public readonly text: string;
  public readonly bg: string;
  public readonly hoverText: string;
  public readonly hoverBg: string;

  constructor(text: string, bg: string, hoverText: string, hoverBg: string) {
    this.text = text;
    this.bg = bg;
    this.hoverText = hoverText;
    this.hoverBg = hoverBg;
  }
}
