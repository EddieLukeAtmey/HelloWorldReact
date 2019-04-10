echo 'OK'

DIR=$PWD

if [[ -e $1 ]]; then
	DIR=$1
fi

echo "Making React-native base directory structure in ${DIR}"

# Validation
# Not sure how to validate the React-native root dir so we'll leave here

# move on to create structure
# create package.json for $1 =
createPackage() {
	dirName=`basename "$1"`
	echo "Creating $dirName/package.json"
	echo "{\"name\": \"$dirName\", \"version\": \"0.0.1\"}" >> "$1/package.json"
}

createDir() {
	if [[ ! -d $1 ]]; then
		echo "create $1"
		mkdir $1
	fi
}

# According to https://medium.freecodecamp.org/how-to-structure-your-project-and-manage-static-resources-in-react-native-6f4cfc947d92
# React-native should have this structure:
# Root
# 	src
#	  screens/
#	  library/
#		package.json
#		components/
#	    utils/
#	    networking/
#	  res/
#		package.js
#		images/

# Making src
srcDir="$DIR/src"
createDir $srcDir

# Making screens
createDir "$srcDir/screens"

# Making library folder
libDir="$srcDir/library"
createDir $libDir
createPackage $libDir

# Making resource folder
resDir="$srcDir/res"
createDir "$resDir"
createPackage $resDir

