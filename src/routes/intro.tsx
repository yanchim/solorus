import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { A } from '@solidjs/router';

export default function Intro() {
  return (
    <main class='text-center mx-auto text-gray-700 p-4'>
      <Tabs defaultValue='account' class='w-400px'>
        <TabsList>
          <TabsTrigger value='account'>Account</TabsTrigger>
          <TabsTrigger value='password'>Password</TabsTrigger>
        </TabsList>
        <TabsContent value='account'>
          Make changes to your account here.
        </TabsContent>
        <TabsContent value='password'>Change your password here.</TabsContent>
      </Tabs>
      <p>
        <code>sing-box</code> 默认配置文件为 <code>config.json</code>
        ，运行 <code>sing-box run</code> 和{' '}
        <code>sing-box run -c config.json</code> 等价。
      </p>
      <p>
        可以通过 <code>sing-box run -c xxx.json</code> 指定运行名为{' '}
        <code>xxx.json</code> 的配置文件
      </p>
      <p class='mt-8'>
        Visit{' '}
        <a
          href='https://solidjs.com'
          target='_blank'
          class='text-sky-600 hover:underline'
        >
          solidjs.com
        </a>{' '}
        to learn how to build Solid apps.
      </p>
      <p class='my-4'>
        <A href='/' class='text-sky-600 hover:underline'>
          Home
        </A>
      </p>
    </main>
  );
}
