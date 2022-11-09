#!/usr/bin/env bash 

set -o errexit
set -o nounset
set -o pipefail

date=`date +"%Y-%m-%d-%H-%M-%S"`

hugo new --kind link links/$date.md
code "content/links/$date.md"
