import { IFormFields } from '@/app/types/IFormFields';
import { FC, useState } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Input from '../ui/Input/Input';

interface IProps {
  field: ControllerRenderProps<IFormFields, 'password'>;
}

const PasswordInput: FC<IProps> = ({ field }) => {
  const [isSecure, setIsSecure] = useState(true);

  return (
    <div className="relative group">
      <Input
        value={field.value}
        onChange={(e) => field.onChange(e)}
        placeholder="Enter password"
        type={isSecure ? 'password' : 'text'}
      />
      <div
        className={`${
          field.value ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } transition-all duration-300`}>
        {isSecure ? (
          <AiOutlineEyeInvisible
            className="text-2xl text-gray-400 absolute top-[5px] right-3 w-fit h-fit cursor-pointer"
            onClick={() => setIsSecure(!isSecure)}
          />
        ) : (
          <AiOutlineEye
            className="text-2xl text-gray-400 absolute top-[5px] right-3 w-fit h-fit cursor-pointer"
            onClick={() => setIsSecure(!isSecure)}
          />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
