import * as core from '@actions/core';
import * as path from 'path';

export async function run() {
  try {
      const matchersPath = path.join(__dirname, '..', '.github/matchers');
      console.log(`##[add-matcher]${path.join(matchersPath, 'phpunit.json')}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
