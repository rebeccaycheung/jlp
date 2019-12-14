# JLP Website

## Set up

### SSH keys for authentication
1. Open terminal
2. `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
⋅⋅⋅ replace 'your_email' with your gihub email
3. Follow the instructions that follow
⋅⋅⋅ you can press enter without filling out the questions (i.e. don't need a passphrase)
4. After following the instructions, a fingerprint and randoart image will be generated
5. `cd ~/.ssh`
⋅⋅⋅ if the keys have not been generated here, check your home directory `cd ~`
6. `cat file_name.pub`
⋅⋅⋅ replace file_name with the file you called your key, default id id_rsa
⋅⋅⋅ make sure it is the pub file
7. Copy and paste the output of the above command
8. On github -> settings (under your profile - top right corner) -> SSH and GPG keys
9. Add a new SSH key
10. Paste the public key into the text box and save (make sure to name it something you will remember)

Now you will be able to clone repositories using SSH.

More info: https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

## To do list
