
## 🛠️ How to Run the Project

To run this application, follow the steps below:

### 1. Start the Backend Server

* Navigate to the `backend` folder (located alongside the frontend folder).

* Ensure you have **FastAPI** and **Uvicorn** installed in your Python environment:

  ```bash
  pip install fastapi uvicorn
  ```

* Run the FastAPI server using:

  ```bash
  uvicorn main:app --reload
  ```

* The backend should now be running at:
  **[http://localhost:8000](http://localhost:8000)**

### 2. Configure the Frontend

* In the frontend project, open the `submit.js` file.
* Ensure the API endpoint is correctly set to:

  ```javascript
  http://localhost:8000/pipelines/parse
  ```

> ⚠️ This is required for connecting the frontend with the backend.

### 3. Start the Frontend App

* Install dependencies:

  ```bash
  npm install
  ```

* Start the development server:

  ```bash
  npm start
  ```

The app will now be running locally.

