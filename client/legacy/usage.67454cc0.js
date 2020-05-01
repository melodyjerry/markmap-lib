import{d as a,e as n,f as e,h as t,k as o,s as r,j as s,S as i,A as p,m as l,n as m,o as d,q as c,r as h,t as u,T as g,y as f}from"./client.b4e2bd76.js";function k(a){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var o,r=n(a);if(t){var s=n(this).constructor;o=Reflect.construct(r,arguments,s)}else o=r.apply(this,arguments);return e(this,o)}}function b(a){var n;return{c:function(){n=p("main")},l:function(a){n=l(a,"MAIN",{}),m(n).forEach(d)},m:function(e,t){c(e,n,t),n.innerHTML='<h1 id="usage">Usage</h1>\n<p><img src="https://img.shields.io/npm/v/markmap-lib.svg" alt="NPM">\n<img src="https://img.shields.io/npm/l/markmap-lib.svg" alt="License">\n<img src="https://img.shields.io/npm/dt/markmap-lib.svg" alt="Downloads"></p>\n<h2 id="command-line">Command-line</h2>\n<h3 id="installation">Installation</h3>\n<p>Install globally:</p>\n<pre><code class="language-bash">$ yarn global add markmap-lib\n# or\n$ npm install markmap-lib -g</code></pre>\n<p>or use with <code>npx</code>:</p>\n<pre><code class="language-bash">$ npx markmap-lib</code></pre>\n<h3 id="commands">Commands</h3>\n<pre><code>Usage: markmap [options] &lt;input&gt;\n\nCreate a markmap from a Markdown input file\n\nOptions:\n  -V, --version          output the version number\n  -o, --output &lt;output&gt;  specify filename of the output HTML\n  --enable-mathjax       enable MathJax support\n  --no-open              do not open the output file after generation\n  -h, --help             display help for command</code></pre><p>Suppose you have a Markdown file named <code>note.md</code>.</p>\n<p>Run the following command to get an interactive mindmap:</p>\n<pre><code class="language-bash">$ markmap note.md\n\n# without global installation\n$ npx markmap-lib note.md</code></pre>\n<p>Then you will get a <code>note.html</code> in the same directory, and hopefully it will be open in your default browser.</p>\n<h3 id="mathjax">MathJax</h3>\n<p>To enable MathJax support for your Markdown, pass <code>--enable-mathjax</code>:</p>\n<pre><code class="language-bash">$ markmap --enable-mathjax note.md</code></pre>\n<h2 id="api">API</h2>\n<h4 id="installation-1">Installation</h4>\n<pre><code class="language-bash">$ yarn add markmap-lib\n# or\n$ npm install markmap-lib</code></pre>\n<h4 id="transform">Transform</h4>\n<p>Transform Markdown to markmap data:</p>\n<pre><code class="language-js">import { transform } from &#39;markmap-lib/dist/transform.common&#39;;\n\nconst data = transform(markdown);</code></pre>\n<p>Now we get the data for rendering in <code>data</code>.</p>\n<h4 id="render">Render</h4>\n<p>Render a markmap from transformed data:</p>\n<p>Create an SVG element with explicit width and height:</p>\n<pre><code class="language-html">&lt;svg id=&quot;markmap&quot; style=&quot;width: 800px; height: 800px&quot;&gt;&lt;/svg&gt;</code></pre>\n<p>Render a markmap to the SVG element:</p>\n<pre><code class="language-js">import { markmap } from &#39;markmap-lib/dist/view.common&#39;;\n\nmarkmap(&#39;#markmap&#39;, data);\n\n// or pass an SVG element directly\nconst svgEl = document.querySelector(&#39;#markmap&#39;);\nmarkmap(svgEl, data);</code></pre>\n<h4 id="mathjax-1">MathJax</h4>\n<p>To enable MathJax, you need to load MathJax before rendering markmap:</p>\n<pre><code class="language-html">&lt;script&gt;\nwindow.MathJax = {\n  options: {\n    skipHtmlTags: {\n      &#39;[-]&#39;: [&#39;code&#39;, &#39;pre&#39;]\n    }\n  }\n};\n&lt;/script&gt;\n&lt;script src=&quot;https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js&quot;&gt;&lt;/script&gt;</code></pre>\n<p>and process Html with MathJax in <code>options.processHtml</code>:</p>\n<pre><code class="language-js">import { markmap } from &#39;markmap-lib/dist/view.common&#39;;\n\nmarkmap(&#39;#markmap&#39;, data, {\n  processHtml: nodes =&gt; {\n    if (window.MathJax.typeset) MathJax.typeset(nodes);\n  },\n});</code></pre>\n<p><strong>Note</strong>:</p>\n<ul>\n<li>The <code>skipHtmlTags</code> option is required because inline code generated from Markdown is always wrapped in <code>&lt;code&gt;</code>, which is ignored by MathJax by default.</li>\n<li>The MathJax library should better be loaded synchronously so that we can just use it in <code>options.processHtml</code> without a flash.</li>\n</ul>\n<h2 id="related">Related</h2>\n<ul>\n<li>Use with Vim / Neovim: <a href="https://github.com/gera2ld/coc-markmap">coc-markmap</a></li>\n<li>Use with GatsbyJS: <a href="https://github.com/gera2ld/gatsby-remark-markmap">gatsby-remark-markmap</a></li>\n</ul>\n',a[1](n)},p:h,i:h,o:h,d:function(e){e&&d(n),a[1](null)}}}function y(a,n,e){var t;return u((function(){g.highlightAllUnder(t)})),[t,function(a){f[a?"unshift":"push"]((function(){e(0,t=a)}))}]}var w=function(n){a(p,i);var e=k(p);function p(a){var n;return t(this,p),n=e.call(this),o(s(n),a,y,b,r,{}),n}return p}();export default w;
