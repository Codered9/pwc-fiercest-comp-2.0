const {exec} = require("child_process")
export default function handler(req, res) {
    const {repo_loc, repo_name , archive_name , source,  passphrase } = req.body.data
    // const repo_loc = "/home/sudhanshu"
    // const repo_name = "test84"
    // const archive_name = "backend_test"
    // const source = "/home/sudhanshu/test"
    // const passphrase = "test1234"
    exec(`bash ./scripts/borg_create.sh ${repo_loc} ${repo_name} ${passphrase} ${source} ${archive_name}`, (err,stdout,stderr) => {
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