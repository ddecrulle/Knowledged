export const getEnvVar = (key) =>
  window?._env_?.[key] || import.meta.env[`REACT_APP_${key}`];
