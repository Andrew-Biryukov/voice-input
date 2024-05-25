#!/bin/bash

folder="/usr/local/www/amb/voice"

if [ ! -d $folder ]
then
	mkdir $folder
fi

if [ -f index.html ]
then
	install -m 644 -o www -g www index.html $folder/
fi

if [ -f voiceForm.js ]
then
        install -m 644 -o www -g www voiceForm.js $folder/
fi

