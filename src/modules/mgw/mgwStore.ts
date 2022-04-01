import {createSlice, PayloadAction, Selector} from '@reduxjs/toolkit';
import {RootState} from '~modules';
import {Media} from './entity';
interface IMGW {
  groups: (string | number)[];
  ip?: string;
  active: boolean;
  medias?: Media[];
}

const mgwStore = createSlice({
  name: 'mgwStore',
  initialState: {
    groups: [],
    active: true,
    medias: [],
  } as IMGW,
  reducers: {
    setGroup: (state, action: PayloadAction<{groups: string[]}>) => {
      return {
        ...state,
        groups: action.payload.groups,
      };
    },
    setIp: (state, action: PayloadAction<{ip: string}>) => {
      return {
        ...state,
        ip: action.payload.ip,
      };
    },
    setActive: (state, action: PayloadAction<{active: number}>) => {
      return {
        ...state,
        active: action.payload.active === 1,
      };
    },
    pushMedia: (state, action: PayloadAction<Media>) => {
      const sMedia = state.medias || [];
      return {
        ...state,
        medias: [...sMedia, action.payload],
      };
    },
    cleanMedias: (state, action: PayloadAction<number>) => {
      const medias = state.medias?.filter(
        m => (m.expired || 0) < action.payload,
      );
      return {
        ...state,
        medias,
      };
    },
  },
});

interface IGroup {
  groups: (string | number)[];
}

export const GroupSelector: Selector<RootState, IGroup> = state => {
  return {
    groups: state.mgwStore.groups,
  };
};

interface IIP {
  ip?: string;
}

export const IPSelector: Selector<RootState, IIP> = state => {
  return {
    ip: state.mgwStore.ip,
  };
};

interface IACTIVE {
  active: boolean;
}

export const ActiveSelector: Selector<RootState, IACTIVE> = state => {
  return {
    active: state.mgwStore.active,
  };
};

interface IMedia {
  medias?: Media[];
}

export const MediaSelector: Selector<RootState, IMedia> = state => {
  return {
    medias: state.mgwStore.medias,
  };
};

export default mgwStore;
