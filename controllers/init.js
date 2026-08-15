const js = require("fs").promises;

const path = require("path");

async function initRepo() {
    const repoPath = path.join(process.cwd(), ".versionflow");
    const commitsPath = path.join(repoPath, "commits");
    //const stagingPath = path.join(repoPath, "staging");
    //to catch the error in folder
    try{
        await js.mkdir(repoPath, { recursive: true });
        await js.mkdir(commitsPath, { recursive: true });
        //await js.mkdir(stagingPath, { recursive: true });
        //json file to store the bucket name in the config.json file
        await js.writeFile(path.join(repoPath, "config.json"), JSON.stringify({bucket: process.env.S3_BUCKET}));
        console.log("Repository initialized successfully.");
        
    }catch(err){
        console.error("Error initializing repository:", err);

    }

    console.log("Init command called");
}
module.exports = { initRepo };
