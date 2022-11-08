#! /usr/bin/env python3

# This script is intended to loop through a directory of markdown files and
# look for the yaml front matter that says "external." If it finds that, it
# moves that file to the /content/links directory.

import os
import shutil
import frontmatter # python-frontmatter

# Set the directory to search for markdown files
directory = '../content/blog'

# Loop through the directory
for filename in os.listdir(directory):
    # If the file is a markdown file
    if filename.endswith(".md") or filename.endswith(".markdown"):
        # Open the file
        with open(os.path.join(directory, filename), 'r') as f:
            # Load the front matter
            post = frontmatter.load(f)
            # If the front matter has a value called "external," then it's a link post
            if post.get('external'):
                # Move the file to the links directory
                shutil.move(os.path.join(directory, filename), '../content/links')
                print(filename + ' moved to links directory')

# # Loop through the directory
# for filename in os.listdir(directory):
#     # If the file is a markdown file, but catch both .md and .markdown
#     if filename.endswith(".md"):
#         # Open the file
#         with open(os.path.join(directory, filename), 'r') as f:
#             # Read the first line
#             first_line = f.readline()
#             # If the first line is the yaml front matter
#             if first_line.startswith('---'):
#                 # Read the yaml front matter
#                 yaml_front_matter = yaml.load_all(f, Loader=yaml.FullLoader)
#                 # If the yaml front matter has the external key
#                 if 'external' in yaml_front_matter:
#                     # Move the file to the links directory
#                     shutil.move(os.path.join(directory, filename), '../content/links')

# # Print how many files were moved
# print(f'{len(os.listdir(directory))} files moved.')