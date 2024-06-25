#!/bin/bash

if [ $# -ne 2 ]; then
	echo "2 arguments are required <dir_name> <question_number>"
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

full_path="$(realpath "$Directory")"

if [ -n "$2" ]; then
	ln -s "$full_path" "$(pwd)/src/problems/$2"
	echo "Symbolic link created from $full_path to src/$2"
else
	echo "Second parameter not provided. Usage: $0 <dir_name> <2nd parameter>"
fi

pnpm jest $Directory --watch --verbose false
