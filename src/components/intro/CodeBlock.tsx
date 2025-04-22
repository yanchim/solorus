import { createSignal } from 'solid-js';
import { Button } from '~/components/ui/button';
import userData from '~/../data/user.json';

interface CodeBlockProps {
  codeSnippets: Record<string, string>;
  user: (typeof userData)[number]['name'];
  type: 'shadowsocks' | 'tun';
}

export function CodeBlock({ codeSnippets, user, type }: CodeBlockProps) {
  const packageManagers = Object.keys(codeSnippets);
  const [currentPkg, setCurrentPkg] = createSignal(packageManagers[0]);

  function formatCode(code: string): string {
    return code
      .split('\n')
      .map((line) => `$ ${line}`)
      .join('\n');
  }

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(codeSnippets[currentPkg()]);
      console.log('copied');
      setTimeout(() => console.log('reset copy'), 1500);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }

  return (
    <div class='rounded-md bg-[#1e1e1e] overflow-hidden border border-gray-700'>
      <div class='flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-900/50 border-b border-gray-700'>
        <div class='flex flex-wrap gap-3 mb-3 sm:mb-0'>
          <span class='text-sm text-gray-400 self-center'>PACKAGE MANAGER</span>
          <div class='flex gap-1.5'>
            {packageManagers.map((pkg) => (
              <Button
                variant={currentPkg() === pkg ? 'default' : 'ghost'}
                size='sm'
                onClick={() => setCurrentPkg(pkg)}
                class={
                  currentPkg() === pkg
                    ? 'bg-gray-700 text-white border border-gray-500'
                    : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-200'
                }
              >
                {pkg}
              </Button>
            ))}
          </div>
        </div>

        <Button
          variant='ghost'
          size='sm'
          onClick={copyToClipboard}
          class='text-gray-300 hover:bg-gray-700/50 hover:text-white sm:ml-4'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            class='mr-2'
          >
            <rect x='9' y='9' width='13' height='13' rx='2' ry='2'></rect>
            <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'></path>
          </svg>
          Copy
        </Button>
      </div>

      <pre class='p-4 overflow-x-auto text-sm font-mono'>
        <code class='text-gray-200'>
          {formatCode(codeSnippets[currentPkg()])}
        </code>
      </pre>
    </div>
  );
}
