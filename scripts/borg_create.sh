#!/bin/bash

# Prompt the user for the Borg repository location
# read -p "Enter the Borg repository location (e.g., /path/to/your/repo): " REPO_LOCATION

# Prompt the user for the Borg repository name
# read -p "Enter the Borg repository name: " REPO_NAME
REPO_LOCATION="$1"
REPO_NAME="$2"
# ENCRYPTION_PASSPHRASE="$3"
export BORG_PASSPHRASE=$3
SOURCE_NAME=$4
ARCHIVE_NAME=$5
# Check if the repository already exists
if [[ -d "$REPO_LOCATION/$REPO_NAME" ]]; then
  borg create "$REPO_LOCATION/$REPO_NAME::$ARCHIVE_NAME" "$SOURCE_NAME"
  exit 1
fi

# Initialize the Borg repository
borg init --encryption=repokey "$REPO_LOCATION/$REPO_NAME" 
borg create "$REPO_LOCATION/$REPO_NAME::$ARCHIVE_NAME" "$SOURCE_NAME"
# Check if the repository initialization was successful
if [[ $? -eq 0 ]]; then
  echo "Borg repository '$REPO_NAME' created successfully at '$REPO_LOCATION' with passphrase encryption."

  # Set the encryption passphrase for the repository
#   echo "$ENCRYPTION_PASSPHRASE" | borg key import --repo "$REPO_LOCATION/$REPO_NAME"

  if [[ $? -eq 0 ]]; then
    echo "Encryption passphrase set successfully."
  else
    echo "Failed to set encryption passphrase. Check the error message for details."
  fi
else
  echo "Failed to create Borg repository. Check the error message for details."
fi