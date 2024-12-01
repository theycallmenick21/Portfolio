
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portfolio"
  }
],
  assets: new Map([
['index.csr.html', {size: 515, hash: 'f144c200f6372c7312df4318598f5665dde4055cba48c7474f2b912f201cdc38', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1028, hash: '3ef248566062780523178b021cea4415c809fa889351df666741e29d1da5b8c7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['o/index.html', {size: 20843, hash: '0ea4c210d4bd810fe9d7fea1bdac3374f37d9f81ba84074f5e2799947a7a5a95', text: () => import('./assets-chunks/o_index_html.mjs').then(m => m.default)}], 
['styles-5INURTSO.css', {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
