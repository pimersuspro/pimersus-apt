# Frequently Asked Questions (FAQ) – Pimersus Browser

This document answers common questions about **Pimersus Browser**, its installation, security model, and intended use.

---

## General

### What is Pimersus Browser?

Pimersus Browser is a lightweight, privacy-focused web browser for Linux that includes a minimalist, local security layer designed to protect users from known malware threats without impacting system performance.

---

### Is Pimersus Browser available for Windows or macOS?

No. Currently, Pimersus Browser is available **only for Linux** systems (Debian/Ubuntu and compatible distributions). There is no official Windows or macOS version at this time.

---

## Installation

### How do I install Pimersus Browser on Linux?

Installation instructions are provided in the `INSTALL.md` file included with the project. In summary:

1. Download the `.deb` package from SourceForge.
2. Install it using `dpkg`.
3. Fix dependencies if required using `apt --fix-broken install`.

---

### I installed the package, but I don't see the browser in the menu. What should I do?

Try launching the browser from a terminal:

```bash
pimersus-browser
```

If it launches correctly, log out and log back in to refresh the desktop menu.

---

## Security

### Does Pimersus Browser include antivirus protection?

Pimersus Browser includes a **lightweight malware detection layer**, but it is **not a full antivirus replacement**. It is designed to provide targeted protection against known malicious downloads.

---

### How does the malware protection work?

The browser integrates a local security engine powered by the MalwareBazaar threat intelligence database. It monitors **new files arriving in the Downloads folder** and automatically quarantines files that match known malware signatures.

---

### Does it scan my entire computer?

No. Pimersus Browser does **not** scan the entire system. It only analyzes **newly downloaded files** placed in the Downloads folder.

---

### Are my personal files or browsing activity monitored?

No. The security engine does not monitor personal files, browsing activity, or network traffic. It operates locally and focuses solely on downloaded files.

---

### How can I scan a file from a USB drive?

To check a file from a USB drive or external source:

1. Copy the file into the **Downloads** folder.
2. The file will be analyzed automatically upon arrival.

---

## Updates

### How often is the malware database updated?

- Incremental updates are performed **daily**.
- The full database is refreshed every **7 days**.

---

### What if my computer was offline for several days?

If the system has been offline for an extended period, it is recommended to perform a manual full update (when available) to ensure the malware database is fully up to date.

---

## Performance

### Does the security engine slow down my system?

No. The security engine is intentionally minimalist and event-driven. It does not load large databases into memory and has negligible CPU and RAM usage.

---

## Scope and Limitations

### Does this replace my antivirus?

No. Pimersus Browser is designed to complement, not replace, a full antivirus or endpoint security solution.

---

### Can Pimersus Browser detect zero-day malware?

No. The protection layer focuses on known threats listed in MalwareBazaar. Unknown or zero-day threats may not be detected.

---

## Support

### Where can I get help or report issues?

Support requests and bug reports should be submitted through the official project pages on SourceForge.

---

## Final Note

This FAQ is intended to provide clear and realistic expectations about Pimersus Browser. For detailed technical information, refer to the `SECURITY.md` and `INSTALL.md` documents.
