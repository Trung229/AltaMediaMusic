
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import SchedulesEntity from "./entity";
interface ISchedules {
    listSchedules: Array<SchedulesEntity>
}

const schedulesStore = createSlice({
    name: "schedulesStore",
    initialState: {
        listSchedules: [],
    } as ISchedules,
    reducers: {
        updateListSchedules: (state, action: PayloadAction<Array<SchedulesEntity>>) => {
            return {
                ...state,
                listSchedules: action.payload
            }
        }

    }
});


export default schedulesStore;