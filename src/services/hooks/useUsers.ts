import {useQuery} from 'react-query';
import { string } from 'yup';
import { api } from '../api';

type User = {
  id: string;
  name: string;
  email: string;
  created_at: string;
}

type GetUserResponse = {
  users:User[],
  totalCount: number
}

export async function getUsers(page:number): Promise<GetUserResponse> {
  const {data,headers} = await api.get('/users',{
    params: {
      page,
    }
  });

  const totalCount =  Number(headers['x-total-count']);

  const users= data.users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.created_at).toLocaleDateString('pt-PT',{
          day: '2-digit',
          month: 'long',
          year: 'numeric'
      })
    }
  });

  return  {users,totalCount};
  
}

export function useUsers(page: number){
  return useQuery(['users',page] ,()=>getUsers(page) ,{
     staleTime:1000 * 10 * 60, // 10 minutes
 });
}