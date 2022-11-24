import { WebPlugin } from '@capacitor/core';

import type { TestPluginPlugin } from './definitions';

export class TestPluginWeb extends WebPlugin implements TestPluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
