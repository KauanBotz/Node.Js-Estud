const fs = require('fs');

fs.unlink('file.txt', function (err) {
    if (err) {
        console.log('Err deleting file:', err);
    }
    else {
        console.log('File deleted successfully');
    }
});