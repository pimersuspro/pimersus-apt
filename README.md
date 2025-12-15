# Pimersus Browser

The Pimersus Browser is a minimalist browser designed specifically for PimersusOS. Although it can be used on Debian distributions such as Antix, MX Linux, Linux Lite, Ubuntu, and Debian itself, the most up-to-date version is 1.3.5, which is installed via APT and receives regular updates.

Its goal is to offer a simple and straightforward experience focused on browsing modern HTML web pages such as:

- YouTube
- Gmail
- Copilot
- Gemini
- ChatGPT
- ...and many more

While the design is intended for low-resource computers or those considered obsolete by other developers, the Pimersus Browser can also be used on modern, more powerful machines.

Video of the latest version: https://www.youtube.com/watch?v=ABuBipN12JU


The latest release of Primersus Browser introduces an additional security layer powered by the MalwareBazaar threat intelligence database, a platform dedicated to the detection and disruption of malware and botnet activity. MalwareBazaar is operated by abuse.ch, a well-respected non-profit organization within the cybersecurity community, and is supported by Spamhaus, a global leader in threat intelligence.

This security engine continuously monitors newly downloaded files in the system’s Downloads folder in real time, similar to the behavior of native protections on Windows systems. When a newly arriving file matches a known threat listed in the MalwareBazaar database, it is automatically isolated and placed into quarantine.

For performance and privacy reasons, the engine does not scan existing files on the system; it only analyzes new files as they enter the Downloads directory. To manually check files from external sources, such as USB drives, users may copy the file into the Downloads folder, where it will then be evaluated automatically.

Manual Commands:

```bash 
primersus-av-scan /path/to/file

sudo primersus-av-update

sudo primersus-av-fullupdate
```
This system has been designed with a minimalist and lightweight architecture. It operates entirely locally and runs silently in the background, with minimal impact on system performance. In practice, it is virtually imperceptible to the user.

Unlike traditional security solutions that load large signature databases into memory (often consuming up to 2 GB of RAM), this approach performs targeted checks on demand without maintaining large databases in memory, ensuring optimal efficiency and low resource consumption.

This protection mechanism updates automatically on a daily basis, ensuring continuous access to the latest threat intelligence. In addition, the entire database is fully refreshed every seven days to maintain data integrity and relevance.

If the system has not been used for an extended period—for example, during travel—it is recommended to perform a manual full database update upon returning. This ensures the protection cycle resumes with a fully up-to-date and synchronized threat database.

---

## 🚀 Main Features
- Simple interface without distractions.
- Compatible with current HTML websites.
- Integration designed for PimersusOS, but portable to other systems.
- `.deb` package ready to install on Debian-based distributions.

---



## 🔒 Privacy-Friendly (simple, not extreme)

Pimersus Browser includes a set of **light privacy protections** designed for everyday users — not for advanced anonymity tools like Tor.

### ✅ What it protects
- **Timezone spoofing:** forces UTC instead of your real timezone.  
- **Language spoofing:** always reports `en-US`.  
- **No geolocation:** GPS/WiFi location completely blocked.  
- **No WebRTC leaks:** prevents exposing your local IP.  
- **Clipboard protection:** sites cannot read your clipboard without permission.  
- **Reduced fingerprinting:** hides or limits some hardware information.

### ❌ What it *does not* do
- It is **not** an anonymity tool.  
- It does **not** replace Tor or privacy-focused browsers.  
- It does **not** include heavy ad-blocking (only light DOM filtering).  

**Pimersus Browser simply gives you a bit more privacy than a normal browser —  
without breaking compatibility or your everyday browsing.**

---



## ⚠️ Important notice
If you want to try the browser on your Debian distribution, **it is at your own risk**.
This project is in development and may have limitations outside of PimersusOS.

For greater peace of mind, you can consult the result of the security analysis in **VirusTotal**:
[Full report here](https://www.virustotal.com/gui/file/b389ededf9bd5accd8fb9a1103d249f4f66d63983b0a54748da93207e51588c0?nocache=1)

---

## 📦 APT Installation on Debian/Ubuntu/MX Linux
Debian 12 32 bits (AntiX)
```bash 
wget -qO - https://pimersuspro.github.io/pimersus-apt/debs/debian12/i386/Pimersus-Key.asc | sudo gpg --dearmor -o /usr/share/keyrings/pimersus.gpg

echo "deb [arch=amd64 signed-by=/usr/share/keyrings/pimersus.gpg] https://pimersuspro.github.io/pimersus-apt/debs/debian12/i386/ ./" | sudo tee /etc/apt/sources.list.d/pimersus.list

sudo apt update
sudo apt install pimersus-browser
```
Uninstall
```bash 
sudo apt remove pimersus-browser
```

Debian 12 64 bits
```bash 
wget -qO - https://pimersuspro.github.io/pimersus-apt/debs/debian12/amd64/Pimersus-Key.asc | sudo gpg --dearmor -o /usr/share/keyrings/pimersus.gpg

echo "deb [arch=amd64 signed-by=/usr/share/keyrings/pimersus.gpg] https://pimersuspro.github.io/pimersus-apt/debs/debian12/amd64/ ./" | sudo tee /etc/apt/sources.list.d/pimersus.list

sudo apt update
sudo apt install pimersus-browser-debian12
```
Uninstall
```bash 
sudo apt remove pimersus-browser-debian12
```

Debian 13 64bits
```bash 
wget -qO - https://pimersuspro.github.io/pimersus-apt/debs/debian13/amd64/Pimersus-Key.asc | sudo gpg --dearmor -o /usr/share/keyrings/pimersus.gpg

echo "deb [arch=amd64 signed-by=/usr/share/keyrings/pimersus.gpg] https://pimersuspro.github.io/pimersus-apt/debs/debian13/amd64/ ./" | sudo tee /etc/apt/sources.list.d/pimersus.list

sudo apt update
sudo apt install pimersus-browser-debian13
```
Uninstall
```bash 
sudo apt remove pimersus-browser-debian13
```


## 📦 Manual .deb Installation on Debian/Ubuntu/MX Linux
1. Download the `.deb` package from the `browser/` folder.
2. Install with: 

Debian 12 32Bits
```bash 
sudo dpkg -i pimersus-browser_1.2.2_i386.deb 
sudo apt-get -f install
```

Debian 12 64Bits
```bash 
sudo dpkg -i pimersus-browser-debian12_1.2.5_amd64.deb 
sudo apt-get -f install
```

Debian 13 64Bits
```bash 
sudo dpkg -i pimersus-browser-debian13_1.2.5_amd64.deb 
sudo apt-get -f install
```
