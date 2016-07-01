#!/bin/bash

#####
# Helper script for pretty formatting of json files
#####

for file in `ls -a app/critters | grep -v \\\.\$`; do
  cat app/critters/$file | python -mjson.tool > tmp.json
  rm app/critters/$file
  mv tmp.json app/critters/$file
done
