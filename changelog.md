# Changelog – Pimersus Browser

All notable changes to this project are documented in this file.

The format is based on **Keep a Changelog**, and this project follows **Semantic Versioning** where applicable.

---

## [Unreleased]

- Ongoing improvements and internal refinements.

---

## [1.3.0] – 2025-12-12

### Added

- Integrated lightweight malware protection based on the MalwareBazaar database.
- Real-time monitoring of newly downloaded files in the Downloads folder.
- Automatic quarantine of files matching known malware signatures.
- Daily incremental threat intelligence updates.
- Weekly full database refresh mechanism.

### Security

- Introduced a local, event-driven security engine with minimal CPU and RAM usage.
- No persistent signature databases loaded into memory.

### Documentation

- Added INSTALL.md with Linux installation instructions.
- Added SECURITY.md describing protection scope and limitations.
- Added FAQ.md to clarify common user questions.

---

## [1.2.0] – 2025-11-28

### Added

- Initial public Linux release of Pimersus Browser.
- Debian/Ubuntu `.deb` package support.
- Basic privacy-focused browser configuration.

### Changed

- Improved startup performance.
- Reduced background processes.

---

## [1.1.0] – 2025-11-15

### Added

- Early preview release for testing purposes.

---

## [1.0.0] – 2025-11-01

### Added

- First internal release of Pimersus Browser.

---

## Notes

- Dates are provided in YYYY-MM-DD format.
- Only user-visible and security-relevant changes are documented.
- Internal refactoring without functional impact may be omitted.
