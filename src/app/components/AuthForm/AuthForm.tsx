'use client';

import { IFormFields } from '@/app/types/IFormFields';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { loginUser, registerUser } from '@/redux/slices/userSlice/userSlice';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Button from '../ui/Button/Button';

import dynamic from 'next/dynamic';
import Heading from '../ui/Heading/Heading';
import InputSkeleton from '../ui/InputSkeleton/InputSkeleton';

const DynamicInput = dynamic(() => import('../ui/Input/Input'), {
  loading: () => <InputSkeleton />,
});
const DynamicPasswordInput = dynamic(() => import('../PasswordInput/PasswordInput'), {
  loading: () => <InputSkeleton />,
});

const AuthForm: FC = () => {
  const { user, isError, isLoading } = useAppSelector((state) => state.user);

  const { handleSubmit, control, reset } = useForm<IFormFields>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const router = useRouter();

  const [isReg, setIsReg] = useState(true);

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IFormFields> = (data) => {
    if (isReg) {
      if (data.email && data.password) {
        dispatch(
          loginUser({
            email: data.email,
            password: data.password,
          }),
        );
        reset();
      }
    } else {
      if (data.name && data.email && data.password) {
        dispatch(
          registerUser({
            name: data.name,
            email: data.email,
            password: data.password,
          }),
        );
        reset();
      }
    }
  };

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  return (
    <form
      className="bg-white dark:bg-neutral-950 flex flex-col text-center p-4 space-y-6 rounded-lg shadow-lg dark:shadow-black"
      onSubmit={handleSubmit(onSubmit)}>
      <Heading size="4xl">{isReg ? 'Sign In' : 'Sign Up'}</Heading>
      {!isReg ? (
        <Controller
          name="name"
          rules={{
            required: 'User name is required!',
          }}
          control={control}
          render={({ field, fieldState }) => (
            <div className="space-y-2 w-full">
              <DynamicInput
                value={field.value!}
                onChange={(e) => field.onChange(e)}
                placeholder="Enter name"
                type="text"
              />
              {fieldState.error && <p className="text-rose-500">{fieldState.error.message}</p>}
            </div>
          )}
        />
      ) : null}
      <Controller
        name="email"
        rules={{
          required: 'User email is required!',
        }}
        control={control}
        render={({ field, fieldState }) => (
          <div className="space-y-2 w-full">
            <DynamicInput
              value={field.value}
              onChange={(e) => field.onChange(e)}
              placeholder="Enter email"
              type="email"
            />
            {fieldState.error && <p className="text-rose-500">{fieldState.error.message}</p>}
          </div>
        )}
      />
      <Controller
        name="password"
        rules={{
          required: 'User password in required!',
        }}
        control={control}
        render={({ field, fieldState }) => (
          <div className="space-y-2 w-full">
            <DynamicPasswordInput field={field} />
            {fieldState.error && <p className="text-rose-500">{fieldState.error.message}</p>}
          </div>
        )}
      />
      {isReg ? (
        <p onClick={() => setIsReg(!isReg)}>
          Don&apos;t have account?{' '}
          <span className="text-sky-400 dark:text-purple-500 cursor-pointer relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-sky-400 dark:after:bg-purple-500 after:rounded-lg after:transition-all after:duration-500 hover:after:w-full">
            Sign Up
          </span>
        </p>
      ) : (
        <p onClick={() => setIsReg(!isReg)}>
          Had account?{' '}
          <span className="text-sky-400 dark:text-purple-500 cursor-pointer relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-sky-400 dark:after:bg-purple-500 after:rounded-lg after:transition-all after:duration-500 hover:after:w-full">
            Sign In
          </span>
        </p>
      )}
      <Button width="full">{isReg ? 'Sign in' : 'Sign up'}</Button>
    </form>
  );
};

export default AuthForm;
