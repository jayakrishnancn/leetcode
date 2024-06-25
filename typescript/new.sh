#!/bin/bash

if [ $# -eq 0 ]; then
	echo "No arguments passed, ./new.sh <question_number>"
	exit
fi

Directory="./src/problems/$1"

while [ -d $Directory ]; do
	echo "$Directory is a directory"
	read -p "another name:" name
	Directory="./src/problems/$name"
done

mkdir -p $Directory

cp -a ./src/templates/daily/. "$Directory"

full_path="$(realpath "$Directory")"

if [ -n "$2" ]; then
	ln -s "$full_path" "$(pwd)/src/$2"
	echo "Symbolic link created from $full_path to src/$2"
fi

# pnpm jest $Directory --watch --verbose false
