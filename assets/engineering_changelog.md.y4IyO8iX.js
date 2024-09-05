import{_ as s,c as a,a3 as n,o as t}from"./chunks/framework.BQG4uxqG.js";const r=JSON.parse('{"title":"CHANGELOG 规范","description":"","frontmatter":{"title":"CHANGELOG 规范","categories":["工程规范"],"tags":["工程规范"],"author":{"name":"Anson","link":"https://github.com/yangsheng8/frontend-rules-bundle"}},"headers":[],"relativePath":"engineering/changelog.md","filePath":"engineering/changelog.md"}'),l={name:"engineering/changelog.md"};function h(e,i,k,d,p,o){return t(),a("div",null,i[0]||(i[0]=[n(`<h1 id="changelog-规范" tabindex="-1">CHANGELOG 规范 <a class="header-anchor" href="#changelog-规范" aria-label="Permalink to &quot;CHANGELOG 规范&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>作为一个开发者，我必须为我的项目维护一个更新日志（以下简称 <code>Changelog</code>）吗？</p><ol><li>如果你在维护一个开源项目，或者公司内部的底层技术产品，那么提供一个 <code>Changelog</code> <code>是必需的。开发者用户很可能需要从一个低版本升级到最新版，Changelog</code> 可以帮助他们了解新版本有哪些变化。</li><li>如果你在开发一个业务应用，那么 <code>Changelog</code> 不是必需的。然而提供一个 <code>Changelog</code> 会更好，因为其他协作者或是交接方能更直观地看到业务逻辑的演变。</li></ol><p><a href="./git.html">Git 规范</a> 已经对 <code>Git</code> 提交日志的格式进行了约束，为何还要再约束 <code>Changelog</code> 的格式呢？</p><ol><li>即便是约束了 <code>Git log</code> 的格式，也无法直接将 <code>Git log</code> 导出一个良好的 <code>Changelog</code>。因为 <code>Changelog</code> 中描述的内容需要更加精炼和归纳，对信息降噪处理等等，因此手写 <code>Changelog</code> 仍然是更好的选择。</li><li>不管是手写还是自动生成，<code>Changelog</code> 的格式都不能直接照搬 <code>Git log</code> 的格式。这两者的区别与联系同在。</li></ol><h2 id="_1-文件" tabindex="-1">1. 文件 <a class="header-anchor" href="#_1-文件" aria-label="Permalink to &quot;1. 文件&quot;">​</a></h2><ul><li><p>1.1.【强制】<code>Changelog</code> 文件必须取名为 <code>CHANGELOG.md</code></p><p>使用大写来表明本文件的重要性，相当于是项目仓库元信息的一部分。</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">changelog.md</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Changelog.md</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ChangeLog.md</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CHANGELOG.MD</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CHANGELOG.md</span></span></code></pre></div></li><li><p>1.2.【强制】Changelog 文件必须是使用标准 Markdown 语法的文本文件，并以 <code>.md</code> 作为后缀</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CHANGELOG.txt</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CHANGELOG.docx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CHANGELOG.md</span></span></code></pre></div></li><li><p>1.3.【强制】<code>Changelog</code> 文件必须存放在项目根目录下，和 <code>README.md</code>、<code>CONTRIBUTING.md</code> 等并列</p></li></ul><h2 id="_2-格式" tabindex="-1">2. 格式 <a class="header-anchor" href="#_2-格式" aria-label="Permalink to &quot;2. 格式&quot;">​</a></h2><p>规约推荐的标准 <code>Changelog</code> 格式如下：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># 更新日志</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## [</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">&lt;version&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">](&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">version-diff-url</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">&gt;) (&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">date</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">&gt;)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">### &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">type</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">desc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">desc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">### &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">type</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">desc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">desc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>详细规则如下：</p><ul><li><p>2.1.【强制】文章标题使用「更新日志」作为固定文案。国际化场景使用英文「Change Log」作为固定文案</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># 修改日志</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># ChangeLog</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># 更新日志</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># Change Log</span></span></code></pre></div></li><li><p>2.2【强制】<code>Changelog</code> 内容按版本号降序排列，最新版本放在最前面</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 1.0.0</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 2.0.0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 2.0.0</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 1.0.0</span></span></code></pre></div></li><li><p>2.3.【强制】版本号 <code>version</code> 需遵循 <a href="https://semver.org/lang/zh-CN/" target="_blank" rel="noreferrer">SemVer 规范</a></p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 2.0</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 1.0.a</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 0.a.1</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 0.0.0.1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 2.0.0</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 1.0.0</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 1.0.0-rc.1</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 1.0.0-beta.2</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 1.0.0-beta.1</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 1.0.0-beta</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 1.0.0-alpha.beta</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 1.0.0-alpha.1</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 1.0.0-alpha</span></span></code></pre></div></li><li><p>2.4.【推荐】版本号增加一个超链接，指向当前版本和上一个版本之间的 \`diff</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 2.0.0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## [</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">2.0.0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">](</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">https://version-diff-url</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">)</span></span></code></pre></div></li><li><p>2.5.【强制】更新日期 <code>date</code> 采用 <code>yyyy-MM-dd</code> 格式</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## [</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">2.0.0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">](</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">https://version-diff-url</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">) (20200905)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## [</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">2.0.0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">](</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">https://version-diff-url</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">) (2020-9-5)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## [</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">2.0.0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">](</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">https://version-diff-url</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">) (2020-09-05)</span></span></code></pre></div></li><li><p>2.6.【推荐】更新类型 <code>type</code> 与 Git message header 中的 <a href="./git.html#1.3.1-type"><code>type</code></a> 相关联，可以不一一对应</p><p><code>type</code> 用以说明更新的类型，推荐值如下：</p><ul><li>新增（<code>Features</code>）：新增功能。</li><li>修复（<code>Bug Fixes</code>）：修复 bug。</li><li>文档（<code>Documentation</code>）：文档新增或者修改。</li><li>变更（<code>Changed</code>）：对于某些已存在功能所发生的逻辑变化。</li><li>优化（<code>Refactored</code>）：性能或结构上的优化，并未带来功能的逻辑变化。</li><li>即将删除（<code>Deprecation Warnings</code>）：即将废弃功能。</li><li>删除（<code>Removed</code>）：已删除的功能。</li><li>重大变更（<code>Breaking Changes</code>）：破坏性变动。</li></ul></li><li><p>2.7.【推荐】更新描述 <code>desc</code> 内容需要注意以下几点：</p><ol><li>使用完整的句子。即在标点方面遵循一般的文档格式规约；如果使用英语，则句首大写。</li><li>时态方面使用一般现在时，不要用过去时态。虽然查看 Changelog 时，Changelog 内容本身都发生在过去，然而使用现在时的时态更简洁明确，并且更易达成一致性。</li><li>句式使用祈使句式。即一般情况不要增加主语。因为在绝大情况下，主语都是作者「我」。</li><li>注明修复的问题。如有提过 Issue，则在句尾增加 Issue 的 ID 和链接。</li></ol></li></ul><h2 id="样本示例" tabindex="-1">样本示例 <a class="header-anchor" href="#样本示例" aria-label="Permalink to &quot;样本示例&quot;">​</a></h2><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># 更新日志</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## [</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">4.6.0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">](</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">https://github.com/ant-design/ant-design/compare/4.5.4...4.6.0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">) (2020-08-23)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">### 新增</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 新增图片组件 Image。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Table 新增 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`sticky\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 属性以支持固定表头和滚动条。[</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">#25939</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">https://github.com/ant-design/ant-design/pull/25939</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">### 修复</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 修复 Pagination 字体相关样式问题。[</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">#26230</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">https://github.com/ant-design/ant-design/pull/26230</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 修复 Space </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`children\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 有时会重新渲染的问题。[</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">#26219</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">https://github.com/ant-design/ant-design/pull/26219</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">### 优化</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 用 hooks 重构 Upload。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## [</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">4.5.4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">](</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">https://github.com/ant-design/ant-design/compare/4.5.3...4.5.4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">)(2020-08-12)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">### 新增</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 新增 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`@badge-color\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Less 变量。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">### 修复</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 修复 Form.Item 在 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`hidden\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 时引用 Less 样式时失效的问题。[</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">#26152</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">https://github.com/ant-design/ant-design/pull/26152</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><a href="https://keepachangelog.com/" target="_blank" rel="noreferrer">Keep a Changelog</a></li><li><a href="https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog/CHANGELOG.md" target="_blank" rel="noreferrer">Conventional Changelog</a></li><li><a href="https://github.com/angular/angular.js/blob/master/CHANGELOG.md" target="_blank" rel="noreferrer">Angular Changelog</a></li><li><a href="https://github.com/ant-design/ant-design/blob/master/CHANGELOG.zh-CN.md" target="_blank" rel="noreferrer">Ant Design Changelog</a></li></ul>`,17)]))}const c=s(l,[["render",h]]);export{r as __pageData,c as default};
