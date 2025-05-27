import { Title } from '@solidjs/meta';

export default function Home() {
  return (
    <main class='text-center mx-auto text-gray-700 p-4'>
      <Title>爱莲者</Title>
      <h1 class='max-6-xs text-6xl text-solid font-thin uppercase my-16'>
        不爱国的请划走！
      </h1>
      <a
        href='https://github.com/yanchim/solorus'
        target='_blank'
        class='text-sky-600 hover:underline'
      >
        一起建设爱莲者の日常
      </a>
    </main>
  );
}
