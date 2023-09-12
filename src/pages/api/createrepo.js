// import upload from "@/middlewares/multeraudio"
const {exec} = require("child_process")
let counter = 1
export default async function handler(req, res) {
    const data = req.body.data
    console.log(data)

    const repo_name  = data.name
    const archive_name = data.name
    const passphrase = data.encryptionKey
    const compressionRatio = data.customRange3
    const file = data.file
    counter = counter +1
    // const {repo_loc, repo_name , archive_name , source,  passphrase } = data
    exec(`bash ./scripts/borg_create.sh /home/sudhanshu backuprepo ${passphrase} ${file} ${archive_name} ${compressionRatio}`, (err,stdout,stderr) => {
        if (err) {
            console.log(`error: ${err.message}`);
            res.status(500).json({error: stderr})
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            res.status(500).json({error: stderr})
        }
        console.log(`stdout: ${stdout}`);
    })
    res.status(200).json({ message: 'Backup generated successfully' })
  }