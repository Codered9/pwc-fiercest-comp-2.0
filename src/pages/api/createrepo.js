const {exec} = require("child_process")
export default function handler(req, res) {
    const {repo_loc, repo_name , archive_name , source,  passphrase } = req.body.data
    exec(`bash ./scripts/borg_create.sh ${repo_loc} ${repo_name} ${passphrase} ${source} ${archive_name}`, (err,stdout,stderr) => {
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