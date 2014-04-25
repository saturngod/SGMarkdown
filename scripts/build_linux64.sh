#!/bin/bash

SOURCE=build/releases/SGMarkdown/linux64/
OUTPUT=build/releases/SGMarkdown-linux64.tar.gz

echo "Building Linux Tar: $OUTPUT"
tar -zcvf $OUTPUT -C ${SOURCE} SGMarkdown
