const { exec } = require("child_process");

exec("dir", "newman -v", (stdout) => {

    console.log(`stdout: ${stdout}`);
});

// run myExampleNodeJSApi.postman_collection.json