(function(win) {
  // compatible SSR like Next.js
  if (!win) return;
  var doc = win.document;
  var iOSDevice = null;
  var iOSVersion = null;
  try {
    iOSDevice = Boolean(navigator.userAgent.match(/iPhone|iPod|iPad/));
    if (iOSDevice) {
      iOSVersion = (navigator.userAgent.match(
        /\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/
      ) || [""])[0].replace(/_/g, ".");
      iOSVersion = parseFloat(iOSVersion);
      if (iOSVersion >= 12) {
        doc.addEventListener(
          "blur",
          function(e) {
            var target = e.target.localName;
            if (target === "input" || target === "textarea") {
              if (doc.body) {
                // win.scrollTo(0, doc.body.scrollTop); not working on iPad!!!
                setTimeout(function() {
                  win.scrollTo(0, doc.body.scrollTop);
                }, 0);
              }
            }
          },
          true
        );
      }
    }
  } catch (e) {
    console.log(e);
  }
})(typeof window === 'undefined' ? null : window);
