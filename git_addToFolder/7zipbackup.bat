@REM choco install 7zip
SET M7DIR=%__CD__%
for %%I in (.) do set CurrDirName=%%~nxI
echo %CurrDirName%
cd ..
SET M7PARENTDIR=%__CD__%
cd %M7DIR%
for /F %%a in ('powershell get-date -format "{yyyy-mm-dd-HH-mm-ss-ffff}"') do set "m7datum=%%a"
echo %m7datum%
7z.exe a -t7z "%M7PARENTDIR%%CurrDirName%-%m7datum%.7z" "%M7DIR%" -bd  -mx9 -xr@"%M7DIR%\7zipignore.txt"
pause
