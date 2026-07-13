FROM mcr.microsoft.com/devcontainers/base:ubuntu

# Install direnv
RUN curl -sfL https://direnv.net/install.sh | bash

# Hook direnv into bash
RUN echo 'eval "$(direnv hook bash)"' >> /etc/bash.bashrc

# Install bazelisk
RUN curl -L https://github.com/bazelbuild/bazelisk/releases/latest/download/bazelisk-linux-amd64 \
      -o /usr/local/bin/bazelisk \
    && chmod +x /usr/local/bin/bazelisk \
    && ln -s /usr/local/bin/bazelisk /usr/local/bin/bazel

# Install kind
RUN curl -L https://kind.sigs.k8s.io/dl/v0.32.0/kind-linux-amd64 \
    -o /usr/local/bin/kind \
    && chmod +x /usr/local/bin/kind
