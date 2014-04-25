#!/bin/bash
SOURCE=build/releases/SGMarkdown/mac/
TITLE=GitBook
OUTPUT=build/releases/SGMarkdown.dmg

echo "Building Mac Release DMG file: $OUTPUT"
hdiutil create $OUTPUT -volname "${TITLE}" -fs HFS+ -srcfolder "${SOURCE}"
