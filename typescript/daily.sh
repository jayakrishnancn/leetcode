#!/bin/bash

if [ $# -eq 0 ]; then
	echo "No arguments supplied"
	exit
fi

Directory="./src/daily/$1"

while [ -d $Directory ]; do
	echo "$Directory is a directory"
	read -p "another name:" name
	Directory="./src/daily/$name"
done

mkdir -p $Directory
cp -a ./src/templates/daily/. "$Directory"

pnpm jest $Directory --watch --verbose false
