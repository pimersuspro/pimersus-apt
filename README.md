# Pimersus Browser

Pimersus Browser is a minimalist web browser designed originally for **PimersusOS**, with compatibility extended to several Debian-based Linux distributions such as **AntiX, MX Linux, Linux Lite, Ubuntu, and Debian**.

The project focuses on providing a **simple, fast, and practical browsing experience**, even on low-resource or older computers, while remaining fully usable on modern hardware.

The most up-to-date version is **3.2.0**, distributed via **APT repositories** and receiving regular updates.

🚀 Pimersus Browser: Real Privacy & Performance

In a world of bloated browsers riddled with trackers, Pimersus stands as a resilient alternative.
🛠️ Why Pimersus?

    🪶 Extreme Lightweight: Designed to fly on older machines (like 1st Gen Core i5 CPUs)
    and be lightning-fast on modern systems. We optimize every binary so that every CPU cycle counts.

    🕵️ Real Privacy: No telemetry, no "phoning home," and no data collection. We don't
    care about your information or what you do online. Pimersus was born out of the
    frustration of downloading megabytes of updates for commercial browsers without
    knowing what they are actually doing on your PC.

    🛡️ Active Security: Exclusive protection powered by the MalwareBazaar (abuse.ch)
    database, blocking threats in real-time before they even reach your system.

    🧠 Zero Distractions: A clean interface, free from sponsored suggestions or
    unnecessary services that steal your attention or CPU clock cycles.

⚙️ "Guerrilla" Optimization

Unlike generic binaries, Pimersus is custom-built using:

    Clang + LTO (Link Time Optimization): For a smaller, more efficient executable.


    Hardening (RELRO/Stack Protector): Industrial-grade security without sacrificing speed.

    x86-64-v2 Architecture: Full compatibility with hardware from 2009 onwards.

☕ Support the Project

Keeping a "one-man-army" browser alive takes time. If you like what we do:

    Donations: Every little bit helps keep the servers running (and the coffee brewing).

    Amazon: If you are a regular Amazon shopper, use our sponsor link. It costs you
    nothing extra, and we receive a small 3% commission. Every bit helps!


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

### Debian 13 – 64-bit Boosted

```bash
wget -qO - https://pimersuspro.github.io/pimersus-apt/debs/debian13/booster/Pimersus-Key.asc | sudo gpg --dearmor -o /usr/share/keyrings/pimersus.gpg

echo "deb [arch=amd64 signed-by=/usr/share/keyrings/pimersus.gpg] https://pimersuspro.github.io/pimersus-apt/debs/debian13/booster/ ./" | sudo tee /etc/apt/sources.list.d/pimersus.list

sudo apt update
sudo apt install pimersus-browser-db13-boosted
```

Uninstall:
```bash
sudo apt remove pimersus-browser-db13-boosted
```

### Debian 13 – 64-bit Macbook Pro (2009)

```bash
wget -qO - https://pimersuspro.github.io/pimersus-apt/debs/debian13/mcbkpro/Pimersus-Key.asc | sudo gpg --dearmor -o /usr/share/keyrings/pimersus.gpg

echo "deb [arch=amd64 signed-by=/usr/share/keyrings/pimersus.gpg] https://pimersuspro.github.io/pimersus-apt/debs/debian13/mcbkpro/ ./" | sudo tee /etc/apt/sources.list.d/pimersus.list

sudo apt update
sudo apt install pimersus-browser-db13-mcbkpro
```

Uninstall:
```bash
sudo apt remove pimersus-browser-db13-mcbkpro
```


---

## 📦 Manual .deb Installation

### Slim Debian 12 – 32-bit

```bash
sudo dpkg -i pimersus-browser-slim_3.0.1_i386.deb
sudo apt-get -f install
```

### Debian 12 – 32-bit

```bash
sudo dpkg -i pimersus-browser_3.0.1_i386.deb
sudo apt-get -f install
```

### Debian 12 – 64-bit

```bash
sudo dpkg -i pimersus-browser-debian12_3.2.0_amd64.deb
sudo apt-get -f install
```

### Debian 13 – 64-bit

```bash
sudo dpkg -i pimersus-browser-debian13_3.2.0_amd64.deb
sudo apt-get -f install
```

### Booster Debian 13 – 64-bit 

```bash
sudo dpkg -i pimersus-browser-db13-boosted_3.2.0_amd64.deb
sudo apt-get -f install
```

### Booster Debian 13 – 64-bit for Macbook Pro (2009)

```bash
sudo dpkg -i pimersus-browser-db13-mcbkpro_2.8.1_amd64.deb
sudo apt-get -f install
```

📘 Extended documentation is available in the project wiki: https://github.com/pimersuspro/pimersus-apt/tree/main/wiki
