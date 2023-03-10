import { setFailed, setOutput } from '@actions/core';

(async function main() {
  try {
    setOutput('response', 'response');
  } catch (err: any) {
    if (typeof err === 'string') {
      setFailed(err);
      return;
    }
    if (err instanceof Error) {
      setFailed(err.message);
      return;
    }
    if (err) {
      setFailed(err.toString());
      return;
    }
    setFailed('Something catch mistakes, but I know nothing!');
  }
})();
