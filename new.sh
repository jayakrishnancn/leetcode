#!/bin/bash

if [ $# -eq 0 ]
  then
    echo "No arguments supplied"
    exit;
fi

Directory="./src/$1"

while [ -d $Directory ] ; do
    echo "$Directory is a directory";
    read -p "another name:" name
    Directory="./src/$name"
done

cp ./templates/ts/. $Directory -R
yarn jest $Directory --watch --verbose false