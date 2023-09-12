const { exec } = require("child_process");
export default function handler(req, res) {
  const {encryptionKey, name} = req.body.data
  // const { repo_loc, repo_name, archive_name, dest, passphrase } = req.body.data;
  exec(
    `bash ./scripts/borg_extract.sh /home/sudhanshu backuprepo /home/sudhanshu/Downloads/restore ${name} ${encryptionKey}`,
    (err, stdout, stderr) => {
      // exec(`pwd`, (err,stdout,stderr) => {
      if (err) {
        console.log(`error: ${err.message}`);
        res.status(500).json({ error: err });
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        res.status(500).json({ error: stderr });
      }
      console.log(`stdout: ${stdout}`);
    }
  );
  res.status(200).json({ message: "Backup restored successfully" });
}
