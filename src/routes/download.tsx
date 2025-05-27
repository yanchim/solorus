import { Title } from '@solidjs/meta';
import record from '~/../tasks/sing-box/record.json';

export default function Download() {
  return (
    <main>
      <Title>下载</Title>
      <h1>配置</h1>
      <h2>桌面端</h2>
      <h2>移动端</h2>
      <h1>sing box</h1>
      <h2>当前版本：{record.version}</h2>
      <h2>更新时间：{new Date(record.date).toLocaleString()}</h2>
    </main>
  );
}
