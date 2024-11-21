#!/usr/bin/env sh

# Create the .ssh directory on the runner. Used to store
# the ssh key for authentication
export SSHDIR="$HOME/.ssh"
mkdir -p "$SSHDIR"

# Copy the ssh key from the secrets store into the .ssh directory
# and assign the correct permissions
echo "$ACTIONS_DEPLOY_KEY" > "$SSHDIR/key"
chmod 600 "$SSHDIR/key"

# Setup a variable to pass to ssh for the connection to the server
export SERVER_DEPLOY_STRING="$SSH_USERNAME@$SERVER_ADDRESS:$SERVER_DESTINATION"

# Change to the public directory and rsync everything to the 
# documents location for the web server on my server 
cd "$GITHUB_WORKSPACE/public" || exit 1
rsync --dry-run --omit-dir-times --checksum -avz --itemize-changes --delete "ssh -i $SSHDIR/key -o StrictHostKeyChecking=no -p $SSH_PORT" . "$SERVER_DEPLOY_STRING"
