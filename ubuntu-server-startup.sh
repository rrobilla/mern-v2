#!/bin/sh

gnome-terminal --working-directory="/home/mriddett/Desktop/lul-server/client" -e 'npm start' --window-with-profile=appclient

gnome-terminal --working-directory="/home/mriddett/Desktop/lul-server/server" -e 'npm start'  --window-with-profile=appserver
