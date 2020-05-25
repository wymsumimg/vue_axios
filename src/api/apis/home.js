import fetch from '../request'

export function employeeClientLogin(params) {
    return fetch.post('Employee/ClientLogin', params);
  }
// 左侧菜单，查询，权限
export function getRoleMenu(params) {
    return fetch.post('Employee/getRoleMenu', params);
  }
  
  // 角色-按钮权限-登录查询
  export const GetRoleBtn=(params)=> {
    return fetch.get('Employee/GetRoleBtn',{params})
  };