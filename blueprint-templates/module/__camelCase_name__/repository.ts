import httpRepository from "~core/http";
import {{pascalCase name}}Entity from "./entity";

// API GET 
export const getList{{ pascalCase name }} = (params: any): Promise<{data:{{pascalCase name}}Entity[], info:any}> => {
  return httpRepository.execute({
    path: '/api/{{name}}',
    showSuccess: false,
    showError: false,
    params,
    convert: (res) => {
      return {
        data: {{pascalCase name}}Entity.createList{{pascalCase name}}(res?.pagedData),
        info: res?.pageInfo
      };
    }
  });
};
  //and get detail
export const getDetail{{pascalCase name}} = (id:string):Promise<{{pascalCase name}}Entity> => {
  return httpRepository.execute({
    path: '/api/{{name}}/' + id,
    showSuccess: false,
    showError: false,
    convert: (res) => {
      return new {{pascalCase name}}Entity(res);
    }
  });
};


//API ADD
export const add{{pascalCase name}} = (payload:any) => {
  return httpRepository.execute({
    path: '/api/{{name}}',
    method: "post",
    payload
  })
}


//API EDIT/UPDATE
export const edit{{pascalCase name}} = (id:string, payload:any) => {
  return httpRepository.execute({
    path: '/api/{{name}}/' + id,
    method: "put",
    payload
  })
}


//API DELETE
export const delete{{pascalCase name}} = (id:string) => {
  return httpRepository.execute({
    path: '/api/{{name}}/' + id,
    method: "delete",
  });
};
