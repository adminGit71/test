import { useState, ChangeEvent, MouseEvent } from 'react';
import { useThemeMode } from '@hooks/useThemeMode';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Form from '@radix-ui/react-form';
import { CheckIcon } from '@radix-ui/react-icons';
import { Button, Flex, Strong, Text } from '@sekmet/radix-ui-themes';
import Image, { ImageLoaderProps } from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { useRouter } from 'next/router';

import { Input } from '../Input/Input';

const Login: FC = () => {
  const { mode } = useThemeMode();
  const router = useRouter();


  // create state variables
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');


  // Create function for handling login
  const handleLogin = () => {
    // Replace this with your actual dummy data
    const fakeUser = {
      email: 'john.doe@gmail.com',
      password: 'password123',
    };

    // Check if the entered email and password match the dummy data
    if (email === fakeUser.email && password === fakeUser.password) {
      // Simulate successful login
      router.push('/');
    } else {
      // Display error message if login fails
      setError('Invalid email or password');
    }
  };

  // Add types for event handlers
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const handleLoginClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <Flex
      justify={'between'}
      align={'center'}
      className="m-auto mt-12 w-full max-w-screen-2xl px-10 max-lg:h-3/4"
    >
      <Flex
        gap={'3'}
        direction={'column'}
        className="m-auto h-full w-1/2 px-16 py-6 
                    max-lg:flex max-lg:w-3/4 max-md:w-full max-md:px-2"
      >
        <Text size={'7'}>
          <Strong>Login to account</Strong>
        </Text>
        <div className="h-4" />
        <Form.Root className="flex h-full flex-col items-stretch justify-between">
          <div>
            <p style={{ textTransform: 'capitalize', fontSize: '14px' }}>
              Email
            </p>
            <Input placeholder="john.doe@gmail.com" value={email} onChange={handleEmailChange} />
          </div>

          <div>
            <Flex justify={'end'}>
              <Link href="/forgot-password">
                <Text style={{ fontSize: '14px' }} color="violet">
                  Forgot password?
                </Text>
              </Link>
            </Flex>
            <p style={{ textTransform: 'capitalize', fontSize: '14px' }}>
              Password
            </p>
            <Input placeholder="**************" type="password" value={password} onChange={handlePasswordChange} />
          </div>

          <Flex align={'center'} gap={'2'} className="mb-6 mt-6">
            <Checkbox.Root
              className="hover:bg-violet3 flex h-5 w-5 items-center justify-center rounded-[4px] border border-solid border-black bg-white"
              defaultChecked
              id="c1"
            >
              <Checkbox.Indicator className="text-violet11">
                <CheckIcon />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <Text>Stay logged in for a week.</Text>
          </Flex>

          <Form.Submit asChild>
            <Button
              className="h-24 w-24 rounded-2xl"
              style={{
                padding: '26px 14px',
                borderRadius: '12px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: '#A855F7'
              }}
              onClick={handleLoginClick}
            >
              Login
            </Button>
          </Form.Submit>

          {/* Display error message */}
          {error && <p className="text-red-500 text-xs italic">{error}</p>}

          <hr className="mb-6 mt-6 border border-[#E4E4E7] text-[#E4E4E7]" />

          <div>
            <Text>Don't have an account? </Text>
            <Text color="violet">Sign up</Text>
          </div>
        </Form.Root>
      </Flex>
      <div className="hidden w-1/2 max-w-[50%] lg:block">
        <Image
          className="h-full w-full"
          src={
            mode === 'dark'
              ? `/assets/images/login-dark.png`
              : `/assets/images/login-page.png`
          }
          alt="Login Page"
          width={536}
          height={500}
          loader={({ src, width, quality }: ImageLoaderProps) => {
            return `${mode === 'dark' ? `/assets/images/login-dark.png` : `/assets/images/login-page.png`}?w=${width}&q=${quality || 75
              }`
          }}
          priority
        />
      </div>
    </Flex>
  );
};

export default Login;
