(function() {
    'use strict';

    // Incliude Highlight.js if code elements exist
    document.querySelector('pre') && (function() {
        var style = document.createElement('link'),
            script = document.createElement('script');

        style.rel = 'stylesheet';
        style.href = '/bower_components/highlightjs/styles/github.css';
        document.head.appendChild(style);

        script.async = 'true';
        script.src = '/bower_components/highlightjs/highlight.pack.js';
        document.body.appendChild(script);
    }());

    // Google Analytics
    (function(i,s,o,g,r,a,m) {i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-38735621-1', 'michaelwales.com');
    ga('send', 'pageview');

}());
