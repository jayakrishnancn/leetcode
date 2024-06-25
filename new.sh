#!/bin/bash

if [ $# -eq 0 ]; then
	echo "No arguments supplied"
	exit
fi

Directory="./src/$1"

while [ -d $Directory ]; do
	echo "$Directory is a directory"
	read -p "another name:" name
	Directory="./src/$name"
done

mkdir -p $Directory
cp -a ./templates/ts/. "$Directory"
pnpm jest $Directory --watch --verbose false
