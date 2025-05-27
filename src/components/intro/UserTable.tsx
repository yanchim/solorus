import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table';
import userData from '~/../data/user.json';
import { For } from 'solid-js';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '~/components/ui/hover-card';

export default function UserTable() {
  return (
    <Table>
      <TableCaption>
        <p>Desktop 基于 ss 配置，移动端未 root 无法使用</p>
        <p>
          Mobile 基于 tun 配置，桌面端移动端均可使用，但桌面端需配合 sudo (
          <HoverCard>
            <HoverCardTrigger class='text-sky-600 hover:underline'>
              on Windows?
            </HoverCardTrigger>
            <HoverCardContent>
              sudo 已在 Windows11 24H2 版本后内置，文档详见
              <a
                href='https://learn.microsoft.com/zh-cn/windows/sudo/'
                class='text-sky-600'
                target='_blank'
                rel='noopener noreferrer'
              >
                官方
              </a>
            </HoverCardContent>
          </HoverCard>
          ) 使用
        </p>
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead class='w-[100px]'>User</TableHead>
          <TableHead>Desktop</TableHead>
          <TableHead>Mobile</TableHead>
          <TableHead class='text-right'>Bridge</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <For each={userData}>
          {(user) => (
            <TableRow>
              <TableCell class='font-medium'>{user.name}</TableCell>
              <TableCell>{user.desktop}</TableCell>
              <TableCell>{user.mobile}</TableCell>
              <TableCell class='text-right'>{user.bridge || 'N/A'}</TableCell>
            </TableRow>
          )}
        </For>
      </TableBody>
    </Table>
  );
}
