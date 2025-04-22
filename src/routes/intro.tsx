import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { A } from '@solidjs/router';
import { createEffect, createSignal } from 'solid-js';
import { Title } from '@solidjs/meta';

const win = "Windows";
const nix = "GNU/Linux & macOS";

const ss = "shadowsocks";
const tun = "tun";

function getOS(): string {
  const userAgent = navigator.userAgent;

  const os = {
    isWindows: /Win/.test(userAgent),
    isMacOS: /Mac/.test(userAgent),
    isLinux: /Linux/.test(userAgent),
    isMobile: /Mobi|Android/.test(userAgent),
  };

  if (os.isWindows) {
    return win;
  } else {
    return nix;
  };
}

export default function Intro() {
  const [os, setOS] = createSignal<string>();

  const typeTabs = [ss, tun];
  const [activeTypeTab, setActiveTypeTab] = createSignal(typeTabs[0]);

  createEffect(() => setOS(getOS()));

  return (
    <main class='text-gray-700 p-4'>
      <Title>说明</Title>
      <Tabs defaultValue={os()} class='w-400px'>
        <TabsList>
          <TabsTrigger value='Windows'>Windows</TabsTrigger>
          <TabsTrigger value='GNU/Linux & macOS'>*nix</TabsTrigger>
        </TabsList>
        <TabsContent value='Windows'>
          Make changes to your account here.
        </TabsContent>
        <TabsContent value='GNU/Linux & macOS'>Change your password here.</TabsContent>
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
      <p class='my-4'>
        <A href='/' class='text-sky-600 hover:underline'>
          Home
        </A>
      </p>
    </main>
  );
}
