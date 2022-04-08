import httpRepository from "~core/http";
import SchedulesEntity from "./entity";


export interface ISchedules {
  TimeBegin: string;
  TimeEnd: string;
}


// API GET 
const getListSchedules = (params: ISchedules): Promise<{data:SchedulesEntity[], info:any}> => {
  return httpRepository.execute({
    path: '/schedules/GetSchedulesOfDevice',
    params,
    showSuccess: false,
    showError: false,
    convert: (res) => {
      return {
        data: SchedulesEntity.createListSchedules(res),
      };
    }
  });
};


//API ADD
// export const addSchedules = (payload:any) => {
//   return httpRepository.execute({
//     path: '/api/schedules',
//     method: "post",
//     payload
//   })
// }


//API EDIT/UPDATE
// export const editSchedules = (id:string, payload:any) => {
//   return httpRepository.execute({
//     path: '/api/schedules/' + id,
//     method: "put",
//     payload
//   })
// }


export default {
  getListSchedules
};
