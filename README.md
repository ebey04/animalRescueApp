# Rescue Track 

A React-based animal intake and tracking dashboard designed for small rescue organizations to manage animal profiles and notes. 

## Live Demo 🔗
[Rescue Track](https://rescuetrack.netlify.app/) 

## Project Overview 🐈
Rescue Track centralizes animal intake and profile management for small rescue organizations. Staff can create, edit, and track animal records from a single dashboard, reducing paperwork friction and improving visibility across cases.

This project was inspired by following rescue organizations on Instagram while mourning the loss of my cat, Archibald. Watching their daily work made me think about the operational burden small rescues carry — from intake paperwork to ongoing record management. Rescue Track was built to reduce that administrative burden by centralizing animal data in one system, allowing rescuers to spend more time doing what matters most — helping animals in need.

## Features ✔️
- Create, edit and remove animal profiles
- Persist animal data using localStorage
- Editable intake form 
- Dynamic routing with React Router
- Context API for centralized state management 
- Note-adding system per animal profile 

## Tech Stack 📦
- React
- React Router
- Context API
- localStorage
- CSS Modules
- Vite 

## Architecture 🏛️
The application uses React Context to manage global animal state. The provider wraps the application at the root level and exposes functions for adding, updating, deleting animals, and adding notes. Data is synced to localStorage via useEffect to persist state across sessions.

## Challenges ⚽
- Refactoring to React Context API to avoid unnecessary prop drilling 
- Implementing localStorage in the Provider & preventing stale overwrites 
- Creating a cohesive info-gathering-system balanced through the intake form & dashboard editing components 

## Future Improvements 📋
- Backend integration
- Staff authentication 
- Image upload with cloud storage 
