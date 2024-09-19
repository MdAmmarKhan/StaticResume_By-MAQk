var _a, _b;
// Function to generate resume as a PDF
function generateResume() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    // Create a simple HTML structure for the resume
    var resumeContent = "\n        <h1>".concat(name, "'s Resume</h1>\n        <h2>Contact Information</h2>\n        <p>Email: ").concat(email, "</p>\n        <p>Contact: ").concat(contact, "</p>\n        <p>Address: ").concat(address, "</p>\n        <h2>Education</h2>\n        <p>").concat(education, "</p>\n        <h2>Skills</h2>\n        <p>").concat(skills, "</p>\n        <h2>Work Experience</h2>\n        <p>").concat(experience, "</p>\n    ");
    // Display resume content in the console for now
    console.log(resumeContent);
}
// Function to download the resume as a PDF using jsPDF
function downloadPDF() {
    var jsPDF = window.jsPDF;
    var doc = new jsPDF();
    var name = document.getElementById('name').value;
    // Add content to the PDF
    doc.text("".concat(name, "'s Resume"), 10, 10);
    doc.save('resume.pdf');
}
// Add event listeners to the buttons
(_a = document.getElementById('generateResume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', generateResume);
(_b = document.getElementById('downloadPDF')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', downloadPDF);
