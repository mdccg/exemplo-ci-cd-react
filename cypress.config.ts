import { defineConfig } from 'cypress';

const isProduction = true;

export default defineConfig({
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },

    video: false,
  },

  e2e: {
    baseUrl: isProduction ? 'https://exemplo-ci-cd-react.vercel.app' : 'http://localhost:3000',
    video: false,
  },

  env: {
    API_URL: 'https://api.dictionaryapi.dev/api/v2/entries/en',
  },
});