// Function to generate resume as a PDF
function generateResume() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;

    // Create a simple HTML structure for the resume
    const resumeContent = `
        <h1>${name}'s Resume</h1>
        <h2>Contact Information</h2>
        <p>Email: ${email}</p>
        <p>Contact: ${contact}</p>
        <p>Address: ${address}</p>
        <h2>Education</h2>
        <p>${education}</p>
        <h2>Skills</h2>
        <p>${skills}</p>
        <h2>Work Experience</h2>
        <p>${experience}</p>
    `;

    // Display resume content in the console for now
    console.log(resumeContent);
}

// Function to download the resume as a PDF using jsPDF
function downloadPDF() {
    const { jsPDF } = window as any;
    const doc = new jsPDF();
    const name = (document.getElementById('name') as HTMLInputElement).value;

    // Add content to the PDF
    doc.text(`${name}'s Resume`, 10, 10);
    doc.save('resume.pdf');
}

// Add event listeners to the buttons
document.getElementById('generateResume')?.addEventListener('click', generateResume);
document.getElementById('downloadPDF')?.addEventListener('click', downloadPDF);