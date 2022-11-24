export interface TestPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
