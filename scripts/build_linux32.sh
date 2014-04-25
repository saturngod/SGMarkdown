#!/bin/bash

SOURCE=build/releases/SGMarkdown/linux32/
OUTPUT=build/releases/SGMarkdown-linux32.tar.gz

echo "Building Linux Tar: $OUTPUT"
tar -zcvf $OUTPUT -C ${SOURCE} SGMarkdown
