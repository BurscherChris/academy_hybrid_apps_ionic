import { registerPlugin } from '@capacitor/core';

import type { TestPluginPlugin } from './definitions';

const TestPlugin = registerPlugin<TestPluginPlugin>('TestPlugin', {
  web: () => import('./web').then(m => new m.TestPluginWeb()),
});

export * from './definitions';
export { TestPlugin };
