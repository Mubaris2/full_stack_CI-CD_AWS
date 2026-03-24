const API_URL = "http://13.51.168.224:5000/student-details";

async function fetchStudentDetails() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        document.getElementById("name").textContent = data.name;
        document.getElementById("roll").textContent = data.rollNumber;

    } catch (error) {
        console.error(error);
        document.getElementById("name").textContent = "Error";
        document.getElementById("roll").textContent = "Error";
    }
}

fetchStudentDetails();