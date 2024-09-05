import{_ as s,c as a,a3 as t,o as e}from"./chunks/framework.BQG4uxqG.js";const d=JSON.parse('{"title":"frb-commitlint-config","description":"","frontmatter":{"title":"frb-commitlint-config","categories":["工程规范"],"tags":["工程规范"],"author":{"name":"Anson","link":"https://github.com/yangsheng8/frontend-rules-bundle"}},"headers":[],"relativePath":"npm/commitlint.md","filePath":"npm/commitlint.md"}'),n={name:"npm/commitlint.md"};function l(h,i,p,o,c,r){return e(),a("div",null,i[0]||(i[0]=[t(`<h1 id="frb-commitlint-config" tabindex="-1">frb-commitlint-config <a class="header-anchor" href="#frb-commitlint-config" aria-label="Permalink to &quot;frb-commitlint-config&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>FRB-Git 规范</p></div><p>支持配套的 <a href="https://commitlint.js.org/#/concepts-shareable-config" target="_blank" rel="noreferrer">commitlint 配置</a>，用于对 <code>git commit message</code> 进行校验。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>使用时，需要安装 <a href="https://www.npmjs.com/package/@commitlint/cli" target="_blank" rel="noreferrer">@commitlint/cli</a>：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> frb-commitlint-config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @commitlint/cli</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-dev</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>在 <code>commitlint.config.js</code> 中集成本包:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  extends: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;frb-commitlint-config&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h2 id="设置-git-hook" tabindex="-1">设置 git hook <a class="header-anchor" href="#设置-git-hook" aria-label="Permalink to &quot;设置 git hook&quot;">​</a></h2><p>可通过 <a href="https://www.npmjs.com/package/husky" target="_blank" rel="noreferrer">husky</a> 设置在 <code>git commit</code> 时触发 <code>commitlint</code>。</p><p>首先安装 husky：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> husky</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-dev</span></span></code></pre></div><p>然后执行添加<code>commit-msg</code>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> husky</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .husky/commit-msg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;npx commitlint --edit $1&#39;</span></span></code></pre></div><p>更多信息可参考 <a href="https://commitlint.js.org/#/guides-local-setup?id=install-husky" target="_blank" rel="noreferrer">commitlint 文档</a>。</p>`,16)]))}const m=s(n,[["render",l]]);export{d as __pageData,m as default};