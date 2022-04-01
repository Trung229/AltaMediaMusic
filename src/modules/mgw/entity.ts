export class Media {
  created?: number;
  duration: number = 0;
  expired?: number;
  url?: string;
  mid: number = 0;
  start?: number;
  ts?: number[];
  repeat: boolean = false;
  prio: number = 0;
  mode: number = 0;
  loop: boolean = false;
  days: number = 0;
  path?: string;
  constructor(media?: Partial<Media>) {
    if (media == null) return;
    Object.assign(this, media);
  }

  static createList(array?: Array<Partial<Media>>) {
    if (array == null) return;
    return array.map(a => new Media(a));
  }
}
