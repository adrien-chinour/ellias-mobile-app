#! /bin/bash

echo "Install NPM dependencies"
npm install --no-optional
npm install -g @ionic/cli

echo "Build ionic project"
ionic build

echo "Build Android & iOS project with Capacitor"
ionic cap build
