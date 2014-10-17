Cordova Emulator for Web/Chrome
================

I'm sure you all know how complicated and frustrating it is to debug/inspect a cordova/phonegap app. Remote inspectors like weinre are not very useful. Up to now you could never inspect and debug a cordova app like you are debugging/inspecting a webpage with Chrome Developer Tools, well now you can! By doing exactly that! YEY!

I had the idea to simplify/convert my app to debug it on the browser, while pursuing that idea I found this extremely simple and extremely useful method. I've eliminated countless very simple yet impossible to pinpoint issues right after I built this emulator, I can't describe what a joy it was, but I'm guessing you are about to experience it yourself.

<h1>How To</h1>
<ul>
  <li>Make a copy of your index.html called emulator.html (or anything else)</li>
  <li>Replace cordova.js with emulator.js at the emulator.html</li>
  <li><a href="http://lmgtfy.com/?q=where+is+the+chrome+executable" target="_blank">Find the chrome executable in your system (Windows/Linux/Mac etc.)</a></li>
  <li>Run <code>/cygdrive/c/Users/USER_NAME/AppData/Local/Google/Chrome/Application/chrome.exe --user-data-dir="C:/ANY_DIRECTORY/chrome-dev-session" --disable-web-security</code></li>
  <li>Open the emulator.html locally, that's it!</li>
</ul>

The method is very simple, the idea is to run a seperate Chrome session without the web security features to access the local files and remote files freely as you do in a cordova app, thanks to Chtome, building a cordova emulator was extremely simple

If you check out the emulator.js file you will see that it's an extremely simple method, you are supposed to edit and improve emulator.js whenever you need an additional feature to suppress errors. You will see that I implemented some placeholder plugins. Check out the Console at Chrome and implement workarounds at emulator.js whenever you discover issues.

I strongly suggest utilizing the Chrome Timeline, by doing so I eliminated many performance issues of my cordova app, look out for things to prevent repaints and layouts (especially layouts, some very simple changes prevent layouts and improve the performance a lot!).

<b>Feel free to utilize the "Issues" tab as a discussion place for common webkit/android/device issues, gimmicks, methods, base styles</b>
