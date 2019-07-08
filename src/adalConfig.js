import {AuthenticationContext, AdalConfig} from 'react-adal';

const headers = {Authorization: `Bearer ${getToken()}`};

const adalConfig = {
  tenant: 'my-org.onmicrosoft.com',
  clientId: '11111111-aaaa-2222-bbbb-33333333333',
  redirectUri: 'http://localhost:3000',
  endpoints: {
    api: 'https://my-org.onmicrosoft.com/11111111-aaaa-2222-bbbb-33333333333',
  },
  cacheLocation: 'sessionStorage',
};

export const authContext = new AuthenticationContext(adalConfig);

export const getToken = () => authContext.getCachedToken(adalConfig.clientId);
