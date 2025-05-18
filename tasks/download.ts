// import { defineTask } from 'nitropack/runtime';
import path, { dirname } from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

interface Asset {
  id: number;
  name: string;
  browser_download_url: string;
}

interface Release {
  name: string;
  assets: Asset[];
}

interface ReleaseResponse {
  code: number;
  message: string;
  release: Release | null;
}

const owner = 'sagernet';
const repo = 'sing-box';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DOWNLOAD_DIR = path.join(__dirname, 'sing-box');
const RECORD_FILE = path.join(DOWNLOAD_DIR, 'record.json');

let version = '';
let date = new Date();

async function getLatestRelease(): Promise<ReleaseResponse> {
  const url = `https://api.github.com/repos/${owner}/${repo}/releases/latest`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return { code: 1, message: response.statusText, release: null };
    }

    const release: Release = await response.json();
    return { code: 0, message: 'success', release };
  } catch (error) {
    return { code: 1, message: 'catch', release: null };
  }
}

function setupProject() {
  if (fs.existsSync(DOWNLOAD_DIR) && fs.existsSync(RECORD_FILE)) {
    console.log('Dir and record file existed, update date.');
    const content = fs.readFileSync(RECORD_FILE, { encoding: 'utf-8' });
    const data: { version: string; date: Date } = JSON.parse(content);
    version = data.version;
    date = new Date(data.date);
  } else if (fs.existsSync(DOWNLOAD_DIR) && !fs.existsSync(RECORD_FILE)) {
    console.log('Dir existed while record file not, create a new record file.');
    fs.writeFileSync(RECORD_FILE, JSON.stringify({ version, date }));
  } else {
    console.log('Create a new dir to store record.');
    fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });
    fs.writeFileSync(RECORD_FILE, JSON.stringify({ version, date }));
  }
}

// export default defineTask({
//   meta: {
//     name: 'download',
//     description: 'Download latest sing-box executable file',
//   },
//   async run() {
//     setupProject();
//     return { result: 0 };
//   },
// });

export { version, date };
