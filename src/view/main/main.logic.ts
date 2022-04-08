import schedulesPresenter from '~modules/schedules/presenter';
import moment from 'moment';
import { memo, useEffect, useMemo, useRef, useState } from 'react';
import fetchBlob from 'react-native-fetch-blob'
import { MenuItem } from '@material-ui/core';


export const readFileFromSystem =async () =>{
  const arrMedia = await fetchBlob.fs.ls(fetchBlob.fs.dirs.CacheDir + `/files`)
  .then((data) => {
    return data
  })
  return arrMedia;
}

export const downloadImages =async (playlist:any) =>{  
  const date = new Date();
  const timeBegin = playlist.timeBegin;
  const timeEnd = playlist.timeEnd;
  const now = moment(date).format("HH:mm:ss")
  if(now > timeBegin && now < timeEnd){
    const arrMedia = await fetchBlob.fs.ls(fetchBlob.fs.dirs.CacheDir + `/files`)
  .then((data) => {
    return data
  })

  const data = playlist.mediaResponses.reduce((total:any,current:any) =>{
    if(current.mediaContentVideo){
        total.push(current.mediaContentVideo);
    }
    if(current.mediaContentAudio){
      total.push(current.mediaContentAudio);
    }
    if(current.mediaContentMPD){
      total.push(current.mediaContentMPD)
    }
    return total;
  },[])
  data.forEach((item:any)=>{
    const fileName = item.split("/");
    const finalName = fileName[fileName.length - 1];
    const check = arrMedia.some((mediaName)=>{
        return mediaName === finalName;
    })
    if(!check){
    fetchBlob .config({
      path : fetchBlob.fs.dirs.CacheDir + `/files/${finalName}`
    })
    .fetch('GET', item, {
      'Cache-Control' : 'no-store'
    })
    .then((res)=>{
       console.log("ok: ",res.path())
    })
    .catch((err)=>{
      console.log(err)
    })
    }
  })
  }
  return null;
}

export const MainLogic = async () => {
  const [data, setData] = useState("");
  useEffect(() => {
    const timerIdInterVal = setInterval(() =>{
      if(true){
        schedulesPresenter.getListSchedules({
          TimeBegin:moment().startOf("day").format("MM-DD-YYYY HH:mm:ss"),
          TimeEnd:moment().endOf("day").format("MM-DD-YYYY HH:mm:ss")
        })
        .then((res:any) => setData(res))
        .catch((err:any)=> console.error(err)); 
      }
    },4000) 
    return ()=>{
      clearInterval(timerIdInterVal)
    }
  }
,[])
  return data;
}


export const convertDurationToTime = (value:number) =>{
    let hours:number | string   = Math.floor(value / 3600);
    let minutes:number | string = Math.floor((value - (hours * 3600)) / 60);
    let seconds:number | string = value - (hours * 3600) - (minutes * 60);
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds; // Return is HH : MM : SS
}


export const sumDuration = (value:[]) => {
  if(value){
    const total = value.reduce((acc, value:any) =>{
      return acc + value.mediaDuration
    },0)
    return total;
  }
}

export const checkStatus = (value:{timeBegin:string, timeEnd:string})=>{
  const date = new Date();
  const timeBegin = value.timeBegin;
  const timeEnd = value.timeEnd;
  const now = moment(date).format("HH:mm:ss")
  if(now > timeBegin && now < timeEnd){
    return {
      message:"is Playing",
      status:true
    }
  }else if(now > timeBegin){
    return {
      message:"played",
      status:false
    }
  }else{
    return {
      message:"Ready",
      status:false
    }
  }
}


export const findMediaInPlaylist = (playlist:any):{} =>{
  const date = new Date();
  const now = moment(date).format("HH:mm:ss")
  const media = playlist.find((item:{timeBegin:string,timeEnd:string})=>{
    if(now > item.timeBegin && now < item.timeEnd){
      return item
    }
  })
  return media;
}

export const storeFirstItem = (media:any) =>{
  console.log(media);
}

