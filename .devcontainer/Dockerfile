FROM mcr.microsoft.com/devcontainers/base:ubuntu

RUN curl -sfL https://direnv.net/install.sh | bash

RUN curl -L https://github.com/bazelbuild/bazelisk/releases/latest/download/bazelisk-linux-amd64 \
      -o /usr/local/bin/bazel \
    && chmod +x /usr/local/bin/bazel

RUN echo 'eval "$(direnv hook bash)"' >> /etc/bash.bashrc

RUN curl -L https://kind.sigs.k8s.io/dl/v0.32.0/kind-linux-amd64 \
    -o /usr/local/bin/kind \
    && chmod +x /usr/local/bin/kind
