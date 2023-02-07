#!/bin/sh
AppName=${1:-kitchen}

if [[ "$AppName" == "storybook" ]]
then
sed -i -e 's|./rn-kitchen-sink/App|./storybook|g' ./index.js
else
sed -i -e 's|./storybook|./rn-kitchen-sink/App|g' ./index.js
fi

rm -rf ./index.js-e