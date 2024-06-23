import Resolver from '@forge/resolver';

const resolver = new Resolver();

resolver.define('getText', (req) => {
  console.log(req);

  resolver.define('getApiKey', (req) => {
    return process.env.LLM_API_KEY;
  });
  
  resolver.define('getDevAIApiUrl', (req) => {
    return process.env.DEVAI_API_URL;
  });
});

export const handler = resolver.getDefinitions();

