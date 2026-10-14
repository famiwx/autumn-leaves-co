#!/bin/bash
EDGE="/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
[ -f "$EDGE" ] || EDGE="/c/Program Files/Microsoft/Edge/Application/msedge.exe"
echo "using: $EDGE"
TMP="C:/Users/WINDOW 10/AppData/Local/Temp"
for p in index about contact; do
  "$EDGE" --headless=new --disable-gpu --window-size=1440,1000 --hide-scrollbars \
    --screenshot="$TMP/alco-$p.png" \
    "file:///C:/Users/WINDOW%2010/Documents/Qoder/2026-10-15/2b08e2da/$p.html" 2>/dev/null
  echo "shot: $p"
done
ls -la /c/Users/WINDOW~1/AppData/Local/Temp/ | grep alco
