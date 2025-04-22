import { Title } from "@solidjs/meta";

export default function NotFound() {
  return (
    <main class='text-center mx-auto p-4 text-[#668] text-[1.6em] font-["silkscreennormal",Georgia,serif] tracking-[0.01em]'>
      {/*
        ,-.      .-,
        |-.\ __ /.-|
        \  `    `  /
        / _     _  \
        | _`q  p _ |
        '._=/  \=_.'
        {`\()/`}`\
        {      }  \
        |{    }    \
        \ '--'   .- \
        |-      /    \
        | | | | |     ;
        | | |.;.,..__ |
        .-"";`         `|
        /    |           /
        `-../____,..---'`
      */}
      <Title>啥都没有</Title>
      <h1 class='max-6-xs text-6xl text-solid font-thin uppercase my-16'>
        NOTHING HERE
      </h1>
      <div class="bg-[url('fox.png')] bg-right bg-bottom bg-no-repeat -ml-full sm:mr-[245px] mr-[45px] min-h-[256px]"></div>
      <h2>
        The quick brown fox jumped over{' '}
        <span class='text-black'>absolutely nothing.</span>
      </h2>
    </main>
  );
}
