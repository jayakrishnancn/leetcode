if [ $# -eq 0 ]
  then
    echo "No arguments supplied"
    exit;
fi

while true; do
    read -p "Do you wish to create this directory?" yn
    case $yn in
        [Yy]* ) cp ./templates/ts ./src/$1 -R ; break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac
done

cd "./src/$1"
yarn jest "./src/$1" --watch