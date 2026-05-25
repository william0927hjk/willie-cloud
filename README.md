# CloudPlay - Cloud Gaming Hub

A Chrome extension that provides a cloud gaming launcher and hub interface, inspired by platforms like Cloud Moon and GeForce NOW.

## Features

- **New Tab Dashboard** — Replaces Chrome's new tab with a full cloud gaming launcher
- **Game Library** — Browse featured, popular, and recently added games
- **Game Launch Simulation** — Click any game to see the cloud streaming launch flow
- **Search** — Filter games instantly from the search bar
- **Bottom Taskbar** — Windows/OS-style taskbar with navigation, status, and clock
- **Sidebar Navigation** — Quick access to Home, Library, Store, Friends, and Settings
- **Popup Quick Launch** — Access your recent games directly from the extension icon
- **Cloud Stats** — View simulated latency, FPS, and stream quality
- **Dark Theme** — Sleek dark UI with purple/cyan accent gradients

## Installation

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer mode** (toggle in top-right)
4. Click **Load unpacked** and select this folder
5. Open a new tab to see the CloudPlay dashboard

## Project Structure

```
willie-cloud/
├── manifest.json       # Chrome Extension Manifest V3
├── newtab.html         # Main dashboard (new tab override)
├── newtab.css          # Dashboard styles
├── newtab.js           # Dashboard logic & game data
├── popup.html          # Extension popup
├── popup.css           # Popup styles
├── popup.js            # Popup logic
├── icons/              # Extension icons (16, 48, 128px)
└── README.md
```

## Screenshots

After loading the extension, open a new tab to see the cloud gaming dashboard with:
- A hero banner featuring a game
- Horizontal scrolling game rows
- Category browsing grid
- Bottom taskbar with clock and connection status
