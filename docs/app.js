(function () {
  // 代码高亮
  if (window.hljs) {
    document.querySelectorAll("pre code[class*='language-']").forEach(function (el) {
      try { window.hljs.highlightElement(el); } catch (e) { /* 高亮失败不影响阅读 */ }
    });
  }
  // 移动端目录：点链接后收起
  var d = document.querySelector("details.toc__mob");
  if (d) d.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { d.open = false; });
  });
})();
