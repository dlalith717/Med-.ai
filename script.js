const BASE_URL = "https://health-backend-xxxx.onrender.com";
// Function to switch between "subspaces" (Login, Patient, Doctor)
function showPage(pageId) {
    document.querySelectorAll('.page-container').forEach(page => {
        page.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
    
    if(pageId === 'doctor-dash') loadDoctorData();
}

// Simulate AI Analysis
function analyzeSymptoms() {
    const aiOutput = document.getElementById('ai-result');
    const riskVal = document.getElementById('risk-val');
    const deptVal = document.getElementById('dept-val');
    const logic = document.getElementById('ai-logic');

    // Add a "loading" effect
    riskVal.innerText = "Analyzing...";
    
    setTimeout(() => {
        // Mock Logic
        riskVal.innerText = "HIGH";
        riskVal.style.color = "#ef4444";
        deptVal.innerText = "Cardiology / Emergency";
        logic.innerText = "Contributing factors: Age (65), High Heart Rate (110 bpm), and Chest Pain history detected in EHR.";
        aiOutput.style.border = "2px solid #ef4444";
    }, 1500);
}

// Load mock patient data for doctor subspace
function loadDoctorData() {
    const tableBody = document.getElementById('triage-body');
    const patients = [
        { id: "P001", symp: "Shortness of breath", risk: "HIGH", wait: "2m" },
        { id: "P002", symp: "Persistent cough", risk: "LOW", wait: "14m" },
        { id: "P003", symp: "Lower back pain", risk: "MED", wait: "30m" }
    ];

    tableBody.innerHTML = patients.map(p => `
        <tr>
            <td>${p.id}</td>
            <td>${p.symp}</td>
            <td><span class="badge ${p.risk.toLowerCase()}">${p.risk}</span></td>
            <td>${p.wait}</td>
            <td><button class="btn-small">Prioritize</button></td>
        </tr>
    `).join('');
}