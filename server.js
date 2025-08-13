const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const services = [
  {
    title: "Screen & Display",
    icon: "display",
    items: [
      "Cracked or shattered screen replacement",
      "Touchscreen not responding fix",
      "Dead pixels or screen flickering repair"
    ]
  },
  {
    title: "Battery & Charging",
    icon: "battery",
    items: [
      "Battery replacement",
      "Charging port repair",
      "Slow charging fix",
      "Overheating issues"
    ]
  },
  {
    title: "Camera & Audio",
    icon: "camera",
    items: [
      "Front or rear camera replacement",
      "Camera lens repair",
      "Microphone repair",
      "Speaker or earpiece replacement"
    ]
  },
  {
    title: "Button & Sensor",
    icon: "toggles",
    items: [
      "Power button repair",
      "Volume button repair",
      "Fingerprint sensor replacement",
      "Proximity sensor issues"
    ]
  },
  {
    title: "Software & Performance",
    icon: "cpu",
    items: [
      "OS reinstallation or update",
      "Virus & malware removal",
      "Data backup & recovery",
      "App crash troubleshooting"
    ]
  },
  {
    title: "Network Repairs",
    icon: "wifi",
    items: [
      "SIM card slot repair",
      "Wi-Fi/Bluetooth not working",
      "Mobile network signal issues",
      "Antenna replacement"
    ]
  }
];

app.get('/api/services', (req, res) => {
  res.json(services);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
