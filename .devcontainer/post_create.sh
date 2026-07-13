#!use/bin/env bash

set -euxo pipefail


direnv allow .envrc
direnv exec . bazel run //tools:bazel_env

echo "postCreateCommand setup complete!"
