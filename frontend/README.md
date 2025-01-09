# Hotel Bonsai Reservation System

## Overview

This project is a reservation system for a hotel called Hotel Bonsai that includes both frontend and backend components. The application allows users to make room reservations and view a list of all existing reservations. The project is developed in TypeScript using React for the frontend and Node.js with Mongoose for the backend.


## Technical Specifications

- **Language:** TypeScript
- **Frontend:** React
 - Principal Components: `Reservation` and `ListReservation`
- **Backend:** Node.js with Mongoose
 - Principal Components: `controllers`, `routes`, `middleware`, `swagger`, `models`, `db.js`, `.env`
- **Database:** MongoDB
- **API Documentation:** Swagger

## Project Structure

## Setup Instructions

### Backend
1. Clone the repository:
```bash
git clone <repository-url>
cd hotel-bonsai-reservation-system/backend
```

2. Install the dependencies:
```bash
npm install
```

3. Create a `.env` file in the `backend` directory and set the necessary environment variables (you can use `.env.example` as a reference).

4. Start the server:
```bash
npm start
```

### Frontend
1. From the root directory of the project, navigate to the `frontend` directory:
```bash
cd ../frontend
```

2. Install the dependencies:
```bash
npm install
```

3. Start the React application:
```bash
npm start
```

## Usage

### Room Reservations
- Users can make room reservations by filling out the reservation form in the `Reservation` component.
- Reservations can be viewed in the reservation list provided by the `ListReservation` component.

### View and Delete Reservations
- Existing reservations can be viewed in the reservation list.
- Users can delete reservations using the delete button provided next to each reservation in the list.

## API Documentation

The API documentation can be found in the `/api-docs` path of the backend server. This documentation is generated using Swagger.


## Team Roles

- **Product Owner:** Carolina Cardenas
- **Scrum Master:** Carolina Cardenas
- **Development Team Members:** Carolina Cardenas

## Scrum Process

### Project Planning
- **Application Concept:** Hotel reservation system.
- **Initial Backlog:** Creation of frontend and backend components, database configuration, API documentation.

### Sprint Management
- **Tasks:** Divided into specific tasks for each sprint.

