# Installation Guide


This document explains how to install **Pimersus Browser** on supported operating systems.

---

## Supported Platforms

- Linux (Debian / Ubuntu and compatible distributions)

---

## Installation on Linux (Debian / Ubuntu)

### Requirements

- 64-bit system (amd64)
- 32-bit system (i386)
- sudo privileges

### Steps
📦 APT Installation on Debian/Ubuntu/MX Linux

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

📦 Manual .deb Installation on Debian/Ubuntu/MX Linux

1. Download the latest `.deb` package from SourceForge:
   
   Pimersus Browser → Files → Latest Version

2. Open a terminal in the download directory.

3. Install the package:

   ```bash
   sudo dpkg -i pimersus-browser_*.deb
   ```

4. If dependency errors appear, fix them with:

   ```bash
   sudo apt --fix-broken install
   ```

5. Launch the browser:

   - From the applications menu, or
   - From the terminal:

     ```bash
     pimersus-browser
     ```

---



## Security Engine Behavior

Pimersus Browser includes a lightweight local security layer based on the MalwareBazaar database.

- The engine monitors **new files arriving in the Downloads folder** in real time.
- If a downloaded file matches a known malware signature, it is automatically quarantined.
- Existing files on the system are **not scanned**.

### Scanning External Files (USB Drives)

To scan a file from a USB drive or external source:

1. Copy the file into the system's **Downloads** folder.
2. The file will be checked automatically upon arrival.

---

## Database Updates

- Threat intelligence updates are performed **daily**.
- The full database is refreshed every **7 days**.

If the system has been offline for an extended period, it is recommended to manually trigger a full update (if available) to ensure the database is fully up to date.

---

## Troubleshooting

### Package does not install

Try:

```bash
sudo apt --fix-broken install
sudo dpkg -i pimersus-browser_*.deb
```

### Browser does not appear in menu

Run from terminal:

```bash
pimersus-browser
```

If it launches correctly, log out and log back in to refresh the desktop menu.

---

## Uninstallation (Linux)

```bash
sudo apt remove pimersus-browser
```

To remove configuration files:

```bash
sudo apt purge pimersus-browser
```

---

## Notes

Pimersus Browser is designed to be lightweight and privacy-focused. The integrated protection layer is not intended to replace a full antivirus solution, but to provide efficient, targeted protection against known malicious downloads.

