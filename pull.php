<?php

// Use in the “Post-Receive URLs” section of your GitHub repo.

if ( $_POST['payload'] ) {
shell_exec( "cd /var/www/drupalsites/git-repo/ && git reset HEAD && git pull" );
}

?>hi