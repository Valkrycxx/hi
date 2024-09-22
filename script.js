document.addEventListener('DOMContentLoaded', () => {
    const sections = ['Section 1', 'Section 2', 'Ben Selling']; // Add your other sections here
    const sectionList = document.getElementById('section-list');
    const menuIcon = document.getElementById('menu-icon');
    const menuContent = document.getElementById('menu-content');
    const benSellingModal = document.getElementById('ben-selling-modal');
    const closeButton = document.getElementById('close-button');

    menuIcon.addEventListener('click', () => {
        menuContent.style.display = menuContent.style.display === 'block' ? 'none' : 'block';
    });

    sections.forEach(section => {
        const sectionLink = document.createElement('div');
        sectionLink.textContent = section;
        sectionLink.classList.add('section');
        sectionLink.addEventListener('click', () => {
            if (section === 'Ben Selling') {
                benSellingModal.style.display = 'flex';
            } else {
                // Handle other sections
                alert(`Navigating to ${section}`);
            }
        });
        sectionList.appendChild(sectionLink);
    });

    closeButton.addEventListener('click', () => {
        benSellingModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === benSellingModal) {
            benSellingModal.style.display = 'none';
        }
    });

    const requestUpload = document.getElementById('request-upload');
    const requestTakedown = document.getElementById('request-takedown');

    requestUpload.addEventListener('click', () => {
        alert('לך לדשא ליד מגרש הכדורגל. ראה אם איליי שם. בקש ממנו להעלות סרטון או תמונה רק ב-25 שקלים.');
    });

    requestTakedown.addEventListener('click', () => {
        alert('לך לדשא ליד מגרש הכדורגל. ראה אם איליי שם. בקש ממנו להסיר סרטון או תמונה רק ב-50 שקלים.');
    });

    // Anti-screenshot and anti-download measures
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.addEventListener('keydown', event => {
        if (event.key === 'PrintScreen') {
            event.preventDefault();
            alert('Screenshot is disabled.');
        }
    });

    // Example of adding videos using Discord CDN links
    addBenSellingVideo('https://cdn.discordapp.com/attachments/your_channel_id/your_video_id/video1.mp4');
    addBenSellingVideo('https://cdn.discordapp.com/attachments/your_channel_id/your_video_id/video2.mp4');
});

function addBenSellingVideo(url) {
    const benSellingVideos = document.getElementById('ben-selling-videos');
    const videoWrapper = document.createElement('div');
    videoWrapper.classList.add('video-wrapper');

    const videoElement = document.createElement('video');
    videoElement.src = url;
    videoElement.controls = false;
    videoElement.style.pointerEvents = 'none'; // Prevent download

    const controlsDiv = document.createElement('div');
    controlsDiv.classList.add('custom-controls');

    const playButton = document.createElement('button');
    playButton.textContent = 'Play';
    playButton.classList.add('custom-button');
    playButton.addEventListener('click', () => {
        videoElement.play();
    });

    const pauseButton = document.createElement('button');
    pauseButton.textContent = 'Pause';
    pauseButton.classList.add('custom-button');
    pauseButton.addEventListener('click', () => {
        videoElement.pause();
    });

    controlsDiv.appendChild(playButton);
    controlsDiv.appendChild(pauseButton);

    videoWrapper.appendChild(videoElement);
    videoWrapper.appendChild(controlsDiv);

    benSellingVideos.appendChild(videoWrapper);
}
