import { IPaging, IUser } from '@/interface';
import request from '@/utils/request';

export function fetchUserInfo() {
  return request.instance({
    url: '/user/get_user_info',
    method: 'get',
  });
}

export function fetchUserList() {
  return request.get<IPaging<IUser>>('/user/list');
}
