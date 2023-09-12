const {exec} = require("child_process")
export default function handler(req, res) {
    console.log(req.body.data)
    const {repo_loc, repo_name , archive_name , dest,  passphrase } = req.body.data
    exec(`bash ./scripts/borg_extract.sh ${repo_loc} ${repo_name} ${dest}  ${archive_name} ${passphrase}`, (err,stdout,stderr) => {
    // exec(`pwd`, (err,stdout,stderr) => {
        if (err) {
            console.log(`error: ${err.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    })
    res.status(200).json({ message: 'Backup generated successfully' })
  }