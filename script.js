<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ODFI - Revert Support Platform</title>

<!-- Google Font -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background: #f9f9f9;
    color: #333;
}

/* NAVBAR */
.navbar {
    position: sticky;
    top: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 60px;
    background: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.navbar h2 {
    color: #2e7d32;
}

.navbar ul {
    display: flex;
    list-style: none;
    margin: 0 auto;
}

.navbar ul li {
    margin-left: 25px;
    cursor: pointer;
}

.navbar ul li a {
    position: relative;
    text-decoration: none;
    color: #333;
    padding-bottom: 2px;
}

.navbar ul li a::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background: #2e7d32;
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.25s ease;
}

.navbar ul li a:hover::after {
    transform: scaleX(1);
}

.navbar button {
    background: #2e7d32;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
}

/* HERO */
.hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 80px 60px;
}

.hero-text h1 {
    font-size: 40px;
    margin-bottom: 20px;
}

.hero-text p {
    margin-bottom: 20px;
    color: #666;
}

.hero-text button {
    padding: 12px 20px;
    margin-right: 10px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}

.btn-primary {
    background: #2e7d32;
    color: white;
}

.btn-secondary {
    background: #e0e0e0;
}

/* SECTION */
.section {
    padding: 60px;
    text-align: center;
}

.section h2 {
    margin-bottom: 30px;
}

/* CARDS */
.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
}

.card {
    background: white;
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    transition: 0.3s;
}

.card:hover {
    transform: translateY(-5px);
}

/* SUPPORT */
.support {
    background: #e8f5e9;
}

.organized-by-section {
    background: #f5f5f5;
    padding: 40px 20px;
}

.organized-by-section h2 {
    margin-bottom: 15px;
}

.collaboration {
    margin-top: 30px;
}

.collaboration p {
    margin-bottom: 15px;
    font-size: 16px;
    color: #333;
    font-weight: 600;
}

.collaboration-logos {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;
}

.collaboration-logos img {
    max-width: 160px;
    height: auto;
    border-radius: 0;
    border: none;
    background: transparent;
    padding: 0;
}

/* FOOTER */
.footer {
    background: #2e7d32;
    color: white;
    text-align: center;
    padding: 20px;
}

.fade-up,
.hero {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-up.show,
.hero.show {
    opacity: 1;
    transform: translateY(0);
}

.page-corner {
    display: none;
}

.hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 80px;
}

.hero-image img {
    max-width: 300px;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}
</style>

</head>
<body>

<!-- NAVBAR -->
<div class="navbar">
    <h2>ODFI-HQ</h2>
    <ul>
        <li><a href="ofi.html" style="text-decoration: none; color: #333;">Home</a></li>
        <li><a href="learn.html" style="text-decoration: none; color: #333;">About Us</a></li>
        <li><a href="support.html" style="text-decoration: none; color: #333;">Support</a></li>
        <li><a href="contact.html" style="text-decoration: none; color: #333;">Contact</a></li>
    </ul>
</div>

<!-- HERO -->
<div class="hero">
    <div class="hero-text">
        <h1>Start Your Journey as a Muslim</h1>
        <p>Learn Islam with simple, structured guidance designed especially for new reverts.</p>
    </div>
</div>

<!-- LEARNING -->
<div class="section">
    <h2>Learn the Basics of Islam</h2>
    <div class="cards">
        <div class="card">🕌 Introduction to Islam</div>
        <div class="card">📖 Quran for Beginners</div>
        <div class="card">🤲 Daily Duas</div>
        <div class="card">🧭 Muslim Lifestyle Guide</div>
    </div>
</div>

<!-- TESTIMONIAL -->
<div class="section">
    <h2>Revert Experiences</h2>
    <div class="cards">
        <div class="card">"This platform helped me understand Islam easily."</div>
        <div class="card">"I no longer feel alone in my journey."</div>
    </div>
</div>
<!-- ORGANIZED BY -->
<div class="section organized-by-section">
    <h2>Organized by</h2>
    <img src="gambar%20odfi.png" alt="ODFI Logo" style="width: 140px; height: auto; margin-top: 20px;">
    <div class="collaboration">
        <p>In Collaboration with:</p>
        <div class="collaboration-logos">
            <img src="logo hosp1.png" alt="Hospital Logo">
            <img src="bbm1.png" alt="BBM Logo">
        </div>
    </div>
</div>

<!-- FOOTER -->
<div class="footer">
    <p>© 2026 ODFI-HQ - Revert Support Platform</p>
</div>

<script>
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.section, .hero').forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
});
</script>
</body>
</html>