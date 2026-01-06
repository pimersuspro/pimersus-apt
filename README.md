# Pimersus Browser

Pimersus Browser is a minimalist web browser designed originally for **PimersusOS**, with compatibility extended to several Debian-based Linux distributions such as **AntiX, MX Linux, Linux Lite, Ubuntu, and Debian**.

The project focuses on providing a **simple, fast, and practical browsing experience**, even on low-resource or older computers, while remaining fully usable on modern hardware.

The most up-to-date version is **1.6.7**, distributed via **APT repositories** and receiving regular updates.

---

## 🌐 Purpose and Use Case

Pimersus Browser is intended for browsing modern HTML-based web applications and services, including:

- YouTube
- Gmail
- Copilot
- Gemini
- ChatGPT
- …and many more

---

## 🔐 Integrated Security Layer

The latest versions of Pimersus Browser include an additional security layer powered by the **MalwareBazaar** threat intelligence database. MalwareBazaar is operated by **abuse.ch**, a well-respected non-profit organization in the cybersecurity community, and is supported by **Spamhaus**, a global leader in threat intelligence.

### How It Works

- The security engine monitors **new files arriving in the system’s Downloads folder** in real time.
- If a downloaded file matches a known malicious entry in the MalwareBazaar database, it is **automatically quarantined**.
- Existing files already present on the system are **not scanned**.

To manually analyze files from external sources (such as USB drives), users may copy the file into the **Downloads** folder, where it will be evaluated automatically.

### Manual Security Commands

```bash
primersus-av-scan /path/to/file
sudo primersus-av-update
sudo primersus-av-fullupdate
```

The security engine is designed with a **minimalist and lightweight architecture**. It runs locally, operates silently in the background, and has a negligible impact on system performance.

Unlike traditional antivirus solutions that load large signature databases into RAM (often consuming up to 2 GB of memory), this system performs targeted, on-demand checks without maintaining heavy in-memory databases.

Threat intelligence updates are performed **daily**, and the entire database is fully refreshed every **7 days**. If the system has been offline for an extended period, it is recommended to perform a manual full database update to ensure protection resumes with fully up-to-date data.

---

## 🚀 Main Features

- Simple, distraction-free interface
- Compatible with modern HTML websites
- Optimized for low-resource systems
- Integrated lightweight malware protection
- Debian-based `.deb` packages and APT repository support

---

## 🔒 Privacy-Friendly (Simple, Not Extreme)

Pimersus Browser includes a set of **light privacy protections** designed for everyday users.

### ✅ What it protects

- Timezone spoofing (reports UTC)
- Language spoofing (`en-US`)
- Geolocation completely disabled
- WebRTC leak prevention
- Clipboard access protection
- Reduced browser fingerprinting

### ❌ What it does *not* do

- It is **not** an anonymity tool
- It does **not** replace Tor or hardened privacy browsers
- It does **not** include heavy ad blocking (only light DOM filtering)

Pimersus Browser aims to provide **better-than-default privacy** without breaking website compatibility or everyday usability.

---

## ⚠️ Important Notice

Running Pimersus Browser on distributions other than PimersusOS is done **at the user’s own risk**. While it works well on many Debian-based systems, some limitations may exist outside the native environment.

For additional transparency, a security analysis report is available on **VirusTotal**:

https://www.virustotal.com/gui/file/b389ededf9bd5accd8fb9a1103d249f4f66d63983b0a54748da93207e51588c0

---

## 📦 APT Installation (Recommended)

### Slim version Debian 12 – 32-bit (AntiX)
Version for low-resource computers, below 4GB of RAM, older computers

```bash
wget -qO - https://pimersuspro.github.io/pimersus-apt/debs/debian12/slim-i386/Pimersus-Key.asc | sudo gpg --dearmor -o /usr/share/keyrings/pimersus.gpg
echo "deb [arch=i386 signed-by=/usr/share/keyrings/pimersus.gpg] https://pimersuspro.github.io/pimersus-apt/debs/debian12/slim-i386/ ./" | sudo tee /etc/apt/sources.list.d/pimersus.list

sudo apt update
sudo apt install pimersus-browser-slim
```

Uninstall:
```bash
sudo apt remove pimersus-browser-slim
```

---

### Debian 12 – 32-bit (AntiX)

```bash
wget -qO - https://pimersuspro.github.io/pimersus-apt/debs/debian12/i386/Pimersus-Key.asc | sudo gpg --dearmor -o /usr/share/keyrings/pimersus.gpg

echo "deb [arch=i386 signed-by=/usr/share/keyrings/pimersus.gpg] https://pimersuspro.github.io/pimersus-apt/debs/debian12/i386/ ./" | sudo tee /etc/apt/sources.list.d/pimersus.list

sudo apt update
sudo apt install pimersus-browser
```

Uninstall:
```bash
sudo apt remove pimersus-browser
```

---

### Slim version Debian 12 – 64-bit (AntiX)
Version for low-resource computers, below 4GB of RAM, older computers

```bash
wget -qO - https://pimersuspro.github.io/pimersus-apt/debs/debian12/slim-amd64/Pimersus-Key.asc | sudo gpg --dearmor -o /usr/share/keyrings/pimersus.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/pimersus.gpg] https://pimersuspro.github.io/pimersus-apt/debs/debian12/slim-amd64/ ./" | sudo tee /etc/apt/sources.list.d/pimersus.list

sudo apt update
sudo apt install pimersus-browser-slim-debian12
```

Uninstall:
```bash
sudo apt remove pimersus-browser-slim-debian12
```

---

### Debian 12 – 64-bit

```bash
wget -qO - https://pimersuspro.github.io/pimersus-apt/debs/debian12/amd64/Pimersus-Key.asc | sudo gpg --dearmor -o /usr/share/keyrings/pimersus.gpg

echo "deb [arch=amd64 signed-by=/usr/share/keyrings/pimersus.gpg] https://pimersuspro.github.io/pimersus-apt/debs/debian12/amd64/ ./" | sudo tee /etc/apt/sources.list.d/pimersus.list

sudo apt update
sudo apt install pimersus-browser-debian12
```

Uninstall:
```bash
sudo apt remove pimersus-browser-debian12
```

---

### Slim version Debian 13 – 64-bit (MX Linux)
Version for low-resource computers, below 4GB of RAM, older computers

```bash
wget -qO - https://pimersuspro.github.io/pimersus-apt/debs/debian13/slim-amd64/Pimersus-Key.asc | sudo gpg --dearmor -o /usr/share/keyrings/pimersus.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/pimersus.gpg] https://pimersuspro.github.io/pimersus-apt/debs/debian13/slim-amd64/ ./" | sudo tee /etc/apt/sources.list.d/pimersus.list

sudo apt update
sudo apt install pimersus-browser-slim-debian13
```

Uninstall:
```bash
sudo apt remove pimersus-browser-slim-debian13
```

---


### Debian 13 – 64-bit

```bash
wget -qO - https://pimersuspro.github.io/pimersus-apt/debs/debian13/amd64/Pimersus-Key.asc | sudo gpg --dearmor -o /usr/share/keyrings/pimersus.gpg

echo "deb [arch=amd64 signed-by=/usr/share/keyrings/pimersus.gpg] https://pimersuspro.github.io/pimersus-apt/debs/debian13/amd64/ ./" | sudo tee /etc/apt/sources.list.d/pimersus.list

sudo apt update
sudo apt install pimersus-browser-debian13
```

Uninstall:
```bash
sudo apt remove pimersus-browser-debian13
```

---

## 📦 Manual .deb Installation

### Slim Debian 12 – 32-bit

```bash
sudo dpkg -i pimersus-browser-slim_1.5.0_i386.deb
sudo apt-get -f install
```

### Debian 12 – 32-bit

```bash
sudo dpkg -i pimersus-browser_1.5.0_i386.deb
sudo apt-get -f install
```

### Debian 12 – 64-bit

```bash
sudo dpkg -i pimersus-browser-debian12_1.5.0_amd64.deb
sudo apt-get -f install
```

### Debian 13 – 64-bit

```bash
sudo dpkg -i pimersus-browser-debian13_1.5.0_amd64.deb
sudo apt-get -f install
```
📘 Extended documentation is available in the project wiki: https://github.com/pimersuspro/pimersus-apt/tree/main/wiki
