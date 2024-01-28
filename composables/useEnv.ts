export const useEnv = (envKey: string) => {
  const config = useRuntimeConfig();
  return config.public[envKey];
}
