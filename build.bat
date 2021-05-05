node ./build/index.js
echo off
copy .\export\constant.d.ts ..\GServer\define\ >nul
copy .\export\define.d.ts ..\GServer\define\ >nul
copy .\export\model.d.ts ..\GServer\define\ >nul
copy .\export\protocol.d.ts ..\GServer\define\ >nul