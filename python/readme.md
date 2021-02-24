## Transpile to Javascript

https://www.transcrypt.org/docs/html/installation_use.html

```bash
pip3 install transcrypt
# verify its installed
python3 -m transcrypt -b -m hello.py

# I had to install java for minification support
# use "-n" to skip minification
sudo apt install openjdk-11-jre-headless

# Node demo
python3 -m transcrypt -b -p .none nodejs_demo
```
