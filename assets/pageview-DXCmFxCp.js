function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{a8 as t}from"./app-CBYzDiQ4.js";var a={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"www.blogdlut.fun"};const i=async()=>{try{const{pageviewCount:e}=await t(()=>import("./app-CBYzDiQ4.js").then(r=>r.a9),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!")}};export{i as updatePageview};
