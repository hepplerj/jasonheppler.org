#!/bin/bash

# Set the base directory
base_dir="public/"

echo "Setting permissions for $(pwd)/$base_dir"

# Set permissions for directories
echo "Setting directory permissions..."
find "$base_dir" -type d -exec chmod 755 {} \;

# Set permissions for files
echo "Setting file permissions..."
find "$base_dir" -type f -exec chmod 644 {} \;

# Set special permissions for .htaccess
echo "Setting .htaccess permissions..."
htaccess_file="$base_dir/.htaccess"
if [ -e "$htaccess_file" ]; then
    chmod 444 "$htaccess_file"
fi

echo "Permissions set successfully."