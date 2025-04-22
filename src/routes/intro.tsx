import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { createEffect, createSignal } from 'solid-js';
import { Title } from '@solidjs/meta';
import { TextField, TextFieldInput } from '~/components/ui/text-field';
import { A } from '@solidjs/router';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '~/components/ui/hover-card';

const win = 'Windows';
const nix = 'GNU/Linux & macOS';

const ss = 'shadowsocks';
const tun = 'tun';

function getOS(): string {
  const userAgent = navigator.userAgent;

  const os = {
    isWindows: /Win/.test(userAgent),
    isMacOS: /Mac/.test(userAgent),
    isLinux: /Linux/.test(userAgent),
    isMobile: /Mobi|Android/.test(userAgent),
  };

  return os.isWindows ? win : nix;
}

export default function Intro() {
  const [os, setOS] = createSignal<string>();

  const typeTabs: ['shadowsocks', 'tun'] = [ss, tun];
  const [activeTypeTab, setActiveTypeTab] = createSignal<
    (typeof typeTabs)[number]
  >(typeTabs[0]);

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
          <TextField>
            <TextFieldInput
              disabled
              readonly
              value='Make changes to your account here.'
            />
          </TextField>
        </TabsContent>
        <TabsContent value='GNU/Linux & macOS'>
          <TextField>
            <TextFieldInput
              disabled
              readonly
              value='Change your password here.'
            />
          </TextField>
        </TabsContent>
      </Tabs>
      <article class='grid gap-8 mx-auto max-w-8/12'>
        <p>
          详细文档请参阅
          <A
            href='https://sing-box.sagernet.org/'
            target='_blank'
            class='text-sky-600 hover:underline'
          >
            官方
          </A>
          ，此处只提供 Windows 系统上的运行说明。
        </p>
        <p>
          根据
          <A href='/download' class='text-sky-600'>
            下载
          </A>
          页说明下载 sing-box 和配置文件，将两者放置到一个常用文件夹（如
          <code>C:\Tools\sing-box</code>）中。
        </p>
        <p>
          文件夹空白处右键并选中 "Open in Terminal"
          后会弹出一个终端窗口，在终端窗口中输入
          <code>sing-box run</code>并回车 ，即可在本机运行 sing-box 服务。终止
          sing-box 服务按下 Ctrl-c（同时按下 Ctrl 键和 c
          键）或关闭终端窗口即可。
        </p>
        <div class='border border-gray-300'></div>
        <p>
          <code>sing-box</code>默认配置文件为<code>config.json</code>，运行
          <code>sing-box run</code>和<code>sing-box run -c config.json</code>
          等价。
        </p>
        <p>
          可以通过<code>sing-box run -c xxx.json</code>指定运行名为
          <code>xxx.json</code>的配置文件。
        </p>
        <p>
          注意，如果运行 tun 配置，因为涉及系统权限相关，需要{' '}
          <HoverCard>
            <HoverCardTrigger class='text-sky-600 hover:underline'>
              sudo
            </HoverCardTrigger>
            <HoverCardContent>
              sudo 已在 Windows11 24H2 版本后内置，详细说明见
              <a
                href='https://learn.microsoft.com/zh-cn/windows/sudo/'
                class='text-sky-600'
                target='_blank'
                rel='noopener noreferrer'
              >
                官方
              </a>
            </HoverCardContent>
          </HoverCard>{' '}
          权限，即在<code>sing-box run</code>前加上<code>sudo</code>，如
          <code>sudo sing-box run</code>
        </p>
      </article>
    </main>
  );
}
