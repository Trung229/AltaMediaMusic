
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {{pascalCase name}}Entity from "./entity";
interface I{{pascalCase name}} {
    list{{pascalCase name}}: Array<{{pascalCase name}}Entity>
}

const {{name}}Store = createSlice({
    name: "{{name}}Store",
    initialState: {
        list{{pascalCase name}}: [],
    } as I{{pascalCase name}},
    reducers: {
        updateList{{pascalCase name}}: (state, action: PayloadAction<Array<{{pascalCase name}}Entity>>) => {
            return {
                ...state,
                list{{pascalCase name}}: action.payload
            }
        }

    }
});


export default {{name}}Store;