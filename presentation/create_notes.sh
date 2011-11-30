#!/usr/bin/env bash

echo "Speaker Notes:" > ./notes.txt
egrep "(h1|<\!--)" ./presentation.html >> ./notes.txt
