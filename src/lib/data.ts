export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: 'Real-Time OS for ARM Cortex-M',
    description: 'A custom-built real-time operating system for ARM Cortex-M microcontrollers, featuring preemptive scheduling, and IPC mechanisms.',
    image: 'https://placehold.co/600x400.png',
    tags: ['C', 'ARM Assembly', 'RTOS', 'Keil'],
    link: 'https://github.com',
  },
  {
    title: 'IoT Weather Station',
    description: 'A solar-powered IoT weather station that sends data to a cloud platform via LoRaWAN. The device measures temperature, humidity, and pressure.',
    image: 'https://placehold.co/600x400.png',
    tags: ['C++', 'STM32', 'LoRaWAN', 'PlatformIO', 'Grafana'],
    link: 'https://github.com',
  },
  {
    title: 'CAN Bus Network Analyzer',
    description: 'A tool for monitoring and analyzing CAN bus traffic in automotive systems. Features a cross-platform GUI built with Qt.',
    image: 'https://placehold.co/600x400.png',
    tags: ['C++', 'Qt', 'CAN bus', 'SocketCAN'],
  },
  {
    title: 'Bluetooth Low Energy Embedded Lock',
    description: 'A smart lock system controlled via a mobile app using BLE. Implemented on a Nordic nRF52 series SoC.',
    image: 'https://placehold.co/600x400.png',
    tags: ['C', 'Nordic SDK', 'BLE', 'Zephyr RTOS'],
    link: 'https://github.com',
  },
  {
    title: 'Motor Control with FOC',
    description: 'Field-Oriented Control (FOC) implementation for a brushless DC (BLDC) motor on a custom PCB, achieving high efficiency and smooth operation.',
    image: 'https://placehold.co/600x400.png',
    tags: ['C', 'DSP', 'Motor Control', 'Altium'],
  },
  {
    title: 'Firmware Update Over-the-Air (FOTA)',
    description: 'A secure and robust FOTA mechanism for a fleet of IoT devices, using MQTT and signed firmware binaries.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Python', 'C', 'MQTT', 'Cryptography'],
  },
];

export interface Blog {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

export const blogPosts: Blog[] = [
  {
    slug: 'debugging-embedded-systems',
    title: 'Mastering the Art of Debugging in Embedded Systems',
    date: '2023-10-26',
    excerpt: 'Explore advanced debugging techniques, from JTAG/SWD to logic analyzers, that can save you hours of frustration.',
    image: 'https://placehold.co/600x400.png',
  },
  {
    slug: 'choosing-the-right-rtos',
    title: 'How to Choose the Right RTOS for Your Next Project',
    date: '2023-09-15',
    excerpt: 'A deep dive into the criteria for selecting a Real-Time Operating System, comparing FreeRTOS, Zephyr, and others.',
    image: 'https://placehold.co/600x400.png',
  },
  {
    slug: 'memory-management-in-c',
    title: 'Memory Management in Embedded C: Best Practices',
    date: '2023-08-01',
    excerpt: 'Learn crucial memory optimization techniques to make your embedded applications more robust and efficient.',
    image: 'https://placehold.co/600x400.png',
  }
];

export const skills = [
    { name: 'C/C++', icon: 'code' },
    { name: 'Python', icon: 'code' },
    { name: 'RTOS', icon: 'cpu' },
    { name: 'Linux Kernel', icon: 'terminal' },
    { name: 'Device Drivers', icon: 'memory-stick' },
    { name: 'System Architecture', icon: 'git-branch' },
    { name: 'PCB Design', icon: 'ruler' },
    { name: 'Communication Protocols', icon: 'rss' },
];
