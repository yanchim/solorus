import { A, useLocation } from '@solidjs/router';

export default function Nav() {
  const location = useLocation();

  function active(path: string): string {
    return path == location.pathname
      ? 'border-sky-600'
      : 'border-transparent hover:border-sky-600';
  }

  return (
    <nav class='bg-solid'>
      <ul class='container flex items-center justify-around p-3 text-gray-200'>
        <li class={`border-b-2 ${active('/')}`}>
          <A href='/'>爱莲者</A>
        </li>
        <li class={`border-b-2 ${active('/download')}`}>
          <A href='/download'>下载</A>
        </li>
        <li class={`border-b-2 ${active('/intro')}`}>
          <A href='/intro'>说明</A>
        </li>
      </ul>
    </nav>
  );
}
