#!/bin/sh

# local_interface=$(route | awk '/^default/{print $NF}')
# local_ip=$(ip addr show "$local_interface" | grep -w "inet" | awk '{ print $2; }' | sed 's/\/.*$//')
local_ip=$(ip -4 addr | grep -oP '(?<=inet\s)\d+(\.\d+){3}' | awk 'FNR==2');

echo "$local_ip"