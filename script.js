// Function to initialize the slider and handle panel resizing
function initializeSlider() {
    const slider = document.getElementById('slider');
    const originalPanel = document.getElementById('originalVideo')?.parentElement;
    const reconstructedPanel = document.getElementById('reconstructedVideo')?.parentElement;

    // Check if all required elements exist
    if (slider && originalPanel && reconstructedPanel) {
        slider.addEventListener('mousedown', function (e) {
            document.addEventListener('mousemove', resizePanels);
            document.addEventListener('mouseup', () => {
                document.removeEventListener('mousemove', resizePanels);
            });
        });

        function resizePanels(e) {
            const windowWidth = window.innerWidth;

            // Ensure e.clientX stays within bounds
            const leftWidth = Math.min(Math.max(e.clientX / windowWidth * 100, 0), 100);
            const rightWidth = 100 - leftWidth;

            // Update panel widths with backticks for template literals
            originalPanel.style.width = `${leftWidth}%`;
            reconstructedPanel.style.width = `${rightWidth}%`;
        }

    } else {
        console.error('Slider or panels not found. Make sure all required elements exist on the page.');
    }

    // Dismiss alert functionality
    const dismissButtons = document.querySelectorAll('.dismiss');
    dismissButtons.forEach(button => {
        button.addEventListener('click', function () {
            this.parentElement.style.display = 'none';
        });
    });
}

// Ensure the DOM is fully loaded before initializing
document.addEventListener('DOMContentLoaded', initializeSlider);
