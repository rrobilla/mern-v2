#!/bin/bash
echo "Starting React client..."
(cd $PWD && cd client && start "" "%SYSTEMDRIVE%\Git\bin\sh.exe" -c "npm start") &
echo "Starting Express server..."
(cd $PWD && cd server && start "" "%SYSTEMDRIVE%\Git\bin\sh.exe" -c "npm start") &
echo "Application is running..."
##### This script will open two gitbash windows and start the React app and express app
