/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly CLIENT_ID: string;
  readonly CLIENT_SECRET: string;
  readonly CLIENT_PLAYLIST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}