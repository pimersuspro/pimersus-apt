# Pimersus Browser

Pimersus Browser is a **minimalist browser** designed especially for **PimersusOS**.
Its goal is to offer a light and direct experience, focused on the navigation of modern HTML web pages such as:

- YouTube
-Gmail
- Copilot
- Gemini
- ChatGPT
- ...and many more

Video: https://youtu.be/u2gwhek5obc

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

## 📦 Installation on Debian/Ubuntu/MX Linux
1. Download the `.deb` package from the `browser/` folder.
2. Install with: 

Debian 12
```bash 
sudo dpkg -i pimersus-browser-debian12_1.0.1_amd64.deb 
sudo apt-get -f install
```

Debian 13
```bash 
sudo sh -c 'echo "deb [trusted=yes] https://pimersuspro.github.io/pimersus-apt/debs/debian13/amd64/ ./" > /etc/apt/sources.list.d/pimersus.list'
sudo apt update
sudo apt install pimersus-browser-debian13
```
