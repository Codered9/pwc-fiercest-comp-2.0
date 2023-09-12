#!/bin/bash

# Check if the required number of arguments is provided
if [[ $# -ne 5 ]]; then
  echo "Usage: $0 <repo_location> <repo_name> <archive_name>"
  exit 1
fi

# Assign the command-line arguments to variables
REPO_LOCATION="$1"
REPO_NAME="$2"
EXTRACT_LOC="$3"
ARCHIVE_NAME="$4"
PASSPHRASE=$5
export BORG_PASSPHRASE=$PASSPHRASE
# Check if the Borg repository exists
if [[ ! -d "$REPO_LOCATION/$REPO_NAME" ]]; then
  echo "Repository does not exist. Aborting."
  exit 1
fi

# Extract the specified archive
borg extract "$REPO_LOCATION/$REPO_NAME::$ARCHIVE_NAME" "$EXTRACT_LOC"

# Check if the extraction was successful
if [[ $? -eq 0 ]]; then
  echo "Archive '$ARCHIVE_NAME' extracted successfully from '$REPO_NAME' repository at '$REPO_LOCATION' to '$EXTRACT_LOC'."
else
  echo "Failed to extract archive. Check the error message for details."
fi
