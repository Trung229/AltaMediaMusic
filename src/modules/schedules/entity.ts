import moment, { Moment } from "moment";

class MediaEntity {
  createdAt: string = "";
  constructor(media:Partial<MediaEntity>) {
    if(!media) return;
    Object.assign(this, media);
    this.createdAt = media.createdAt? moment(media.createdAt).format("DD/MM/YYYY"):"";
  }
  static createListSchedules(listMedia:Array<Partial<MediaEntity>>){
    if (!Array.isArray(listMedia)) return [];
    return listMedia.map((medias:Partial<MediaEntity>) => {
      return new MediaEntity(medias);
    });
  }
}

class SchedulesEntity {
  scheduleId:string = "";
  createdAt?: string = "";
  date?:Moment;
  timeBegin:string = "";
  timeEnd:string = "";
  playListName:string = "";
  playListId:string = "";
  playlistRepeat:number = 0;
  playlistHowToPlay: number = 0;
  scheduleName:string = "";
  mediaResponses?:MediaEntity[];
  constructor(schedules:Partial<SchedulesEntity>) {
    if(!schedules) return;
    Object.assign(this, schedules);
    // convert entity type here
    this.createdAt = schedules.createdAt? moment(schedules.createdAt).format("DD/MM/YYYY"):"";
  }
  static createListSchedules(listSchedules:Array<Partial<SchedulesEntity>>){
    if (!Array.isArray(listSchedules)) return [];
    return listSchedules.map((schedules:Partial<SchedulesEntity>) => {
      return new SchedulesEntity(schedules);
    });
  }
}

export default SchedulesEntity;
