const FtpDeploy = require('ftp-deploy')
const path = require('path');
// dotenv.config({ path: "./.env" });

async function main() {
  try {
        // Replace "/out" with your build directory which contains all generated static files
        const outDir = path.join(process.cwd(), "/out");

        await new FtpDeploy().deploy({
            user: 'mokhter@test.mokhterahmad.info', // Your credentials
            password: '@sTo#f12[oll', // Your credentials
            host: 'ftp.mokhterahmad.info', // Your credentials
            port: 21, // Your credentials

            localRoot: outDir, // Location of build files in project
            remoteRoot: "/mokhterahmad.info", // Upload location on remote, replace with subfolder on FTP-server if required

            include: ["", "**/"], // Upload all files from build folder
            exclude: [], // Exclude no files

            deleteRemote: false, // Set to true if you want to delete ALL FILES in the remote root before uploading
            forcePasv: true // Use passive mode
        })

        console.log("Succesfully deployed site")
        return 0;
    } catch (e) {
        console.error("An error occured during deployment:", e);
        return 1;
  }
}

main().then((code) => process.exit(code));