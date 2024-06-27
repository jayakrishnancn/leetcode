#!/bin/bash

create_new() {
	if [ $# -lt 2 ]; then
		echo "Wrong arguments($#) passed, ./new.sh <question_number> <title_file_name> <(optional)sub_dir_name|daily|blind-75> <dir_pre_fix(optional)>"
		exit 1
	fi

	name="$1.$2"
	Directory="./src/problems/$name"

	while [ -d $Directory ]; do
		echo "$Directory already exist. Try another:"
		read -p "Question_number:" question_number
		read -p "Title:" title_file_name
		name="$question_number.$title_file_name"
		Directory="./src/problems/$name"
	done

	mkdir -p $Directory
	cp -a ./src/templates/daily/. "$Directory"

	full_path="$(realpath "$Directory")"

	if [ -n "$4" ]; then
		name="$4-$name"
	fi

	if [ -n "$3" ]; then
		tgt_dir="$(pwd)/src/$3"
		mkdir -p $tgt_dir
		tgt="$tgt_dir/$name"
		ln -s "$full_path" "$tgt"
		echo "Symbolic link created from $full_path to $tgt"
	fi
}
