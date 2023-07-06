import { createProxyMiddleware } from 'http-proxy-middleware';
import appConfig from '../4-utils/app-config';

// Create the WebSocket proxy middleware
const wsMessageServiceProxy = createProxyMiddleware({
    target: appConfig.messageServiceWs,
    changeOrigin: true,
    ws: true
  });

  export default wsMessageServiceProxy;