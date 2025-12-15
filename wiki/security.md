# Security Architecture


This document describes the security architecture, protection scope, and limitations of **Pimersus Browser**.

---

## Security Philosophy

Pimersus Browser is designed around a **lightweight, privacy-respecting security model**. Rather than implementing a full traditional antivirus, the browser integrates a focused protection layer intended to reduce exposure to known malware threats while maintaining minimal system impact.

The goal is to provide **effective, transparent, and low-overhead protection** without intrusive background processes or excessive resource consumption.

---

## Integrated Malware Protection

Pimersus Browser includes a local security engine powered by the **MalwareBazaar** threat intelligence database.

MalwareBazaar is operated by **abuse.ch**, a respected non-profit organization within the cybersecurity community, and is supported by **Spamhaus**, a global leader in threat intelligence.

This integration allows the browser to detect known malware and botnet-related files at the moment they are introduced to the system.

---

## How the Protection Works

- The security engine runs **locally** on the user's system.
- It monitors **new files arriving in the Downloads folder** in real time.
- When a newly downloaded file matches a known malicious signature listed in MalwareBazaar, it is **automatically quarantined**.
- The process is silent and requires no user interaction in most cases.

This behavior is similar to native real-time protections found in modern operating systems, but implemented in a minimal and targeted manner.

---

## What Is and Is Not Monitored

### Monitored

- New files downloaded by the browser into the **Downloads** directory.

### Not Monitored

- Files already present on the system.
- System files, user documents, or application data.
- Network traffic or browsing activity.
- Files located outside the **Downloads** folder.

This design choice prioritizes performance, privacy, and predictability.

---

## Scanning External Files

Pimersus Browser does not actively scan removable media such as USB drives.

To check a file obtained from an external source:

1. Copy the file into the system's **Downloads** folder.
2. The security engine will automatically analyze the file upon arrival.

---

## Resource Usage

The security engine is intentionally minimalist:

- No large signature databases are loaded into RAM.
- Memory usage remains negligible.
- CPU usage is minimal and event-driven.

Unlike traditional antivirus solutions that may consume several gigabytes of memory, Pimersus Browser performs **on-demand checks** without persistent heavy resource allocation.

---

## Database Updates

- Threat intelligence updates are performed **daily**.
- The entire database is refreshed every **7 days**.

If the system has been offline for an extended period, users are encouraged to perform a manual full update (when available) to ensure the protection engine is fully synchronized with the latest threat data.

---

## Limitations

It is important to understand the scope of this protection:

- This security layer is **not a replacement for a full antivirus solution**.
- It focuses exclusively on **known threats** listed in MalwareBazaar.
- Zero-day malware or unknown threats may not be detected.

Users requiring comprehensive system-wide protection should continue to use a dedicated antivirus or endpoint security solution alongside Pimersus Browser.

---

## Responsible Disclosure

If you believe you have discovered a security vulnerability in Pimersus Browser, please report it responsibly.

Include:
- A detailed description of the issue
- Steps to reproduce (if applicable)
- Relevant logs or screenshots

Security reports should be submitted through the official project channels listed on SourceForge.

---

## Final Notes

Security in Pimersus Browser is designed to be **simple, predictable, and transparent**. By clearly defining what the protection does—and what it does not do—the project aims to provide users with realistic expectations and reliable defensive behavior.
