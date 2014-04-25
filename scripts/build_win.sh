#!/bin/bash

SOURCE=build/releases/SGMarkdown/win/
TITLE=SGMarkdown
OUTPUT=build/releases/SGMarkdown.zip

echo "Building Windows Release ZIP file: $OUTPUT"

# Temporary till it can't be done with grunt-node-webkit-builder
wine ./node_modules/rcedit/bin/rcedit.exe ./build/releases/SGMarkdown/win/SGMarkdown/SGMarkdown.exe --set-icon ./resources/images/icons/256.ico

cd ${SOURCE} && zip -ru ../../SGMarkdown-win.zip ./*
