document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    const robotArm = document.querySelector("#robot-arm");
    observer.observe(robotArm);
});

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('line1').classList.add('visible');
    }, 200); // delay for the first line
    setTimeout(function() {
        document.getElementById('line2').classList.add('visible');
    }, 1700); // delay for the second line
});