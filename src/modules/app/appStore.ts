import { createSlice, PayloadAction, Selector } from '@reduxjs/toolkit';
import { RootState } from '~modules';


export interface IRect{
    x: number,
    y: number,
    w: number,
    h: number
}

interface IApp {
    mode: "staging" | 'production';
    inSplash?:boolean,
    clientId?:number,
    rect:IRect,
    fontSize:number,
}


const appStore = createSlice({
    name: 'appStore',
    initialState: {
        mode: 'production',
        inSplash: true,
        fontSize:20,
        rect:{
            x:0,
            y:0,
            w:100,
            h:100,
        }
    } as IApp,
    reducers: {
        setMode: (state, action: PayloadAction<"staging" | 'production'>) =>
            Object.assign(state, { mode: action.payload }),
        setSplash: (state, action: PayloadAction<boolean>) =>
            Object.assign(state, { inSplash: action.payload }),
        setClient: (state, action: PayloadAction<number>) =>
            Object.assign(state, { clientId: action.payload }),
        setFontSize: (state, action: PayloadAction<number>) =>
            Object.assign(state, { fontSize: action.payload }),
        setRect: (state, action: PayloadAction<IRect>) =>
            Object.assign(state, { rect: action.payload }),
    }
});

interface IMode {
    mode: "staging" | 'production';
}
export const ModeSelector: Selector<RootState, IMode> = (state) => {
    return {
        mode: state.appStore.mode,
    };
};

interface ISplash {
    inSplash: boolean;
}
export const SplashSelector: Selector<RootState, ISplash> = (state) => {
    return {
        inSplash: state.appStore.inSplash!==false,
    };
};


interface IClient {
    clientId?: number;
    fontSize:number;
}
export const ClientSelector: Selector<RootState, IClient> = (state) => {
    return {
        clientId: state.appStore.clientId,
        fontSize: state.appStore.fontSize||20,
    };
};

export const RectSelector: Selector<RootState, {rect:IRect}> = (state) => {
    return {
        rect: state.appStore.rect,
    };
};

export default appStore;
