import { User } from 'firebase/auth';

export interface IUser {
  user: User | null;
  isLoading: boolean;
  isError: boolean;
}
