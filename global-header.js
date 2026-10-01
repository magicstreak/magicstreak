document.addEventListener("DOMContentLoaded", function() {
    // 1. Define the HTML structure for your shared header
    const headerHTML = `
        <header class="global-site-header">
            <div class="header-logo">
                <a href="https://github.io">🚀 Portfolio</a>
            </div>
            <nav class="header-nav">
                <a href=" https://magicstreak.github.io/CBMW-walk-scheduler/">Programme Scheduler</a>
                <a href="https://magicstreak.github.io/programme-builder/">Programme Builder</a>
                <a href="https://magicstreak.github.io/CBMW-Programme-Planner//">Walk Route Management</a>
                <a href="https://magicstreak.github.io/postwalk-stats/">Post Walk Stats</a>
            </nav>
        </header>
    `;

    // 2. Insert the HTML into the target container
    const headerContainer = document.getElementById("global-header");
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
    }

    // 3. Optional: Inject basic styles so you don't need a separate CSS file
    const style = document.createElement('style');
    style.textContent = `
        .global-site-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
            background-color: #1f2937;
            color: #ffffff;
            font-family: sans-serif;
        }
        .global-site-header a {
            color: #ffffff;
            text-decoration: none;
            margin-left: 1.5rem;
        }
        .global-site-header a:hover {
            text-decoration: underline;
        }
        .header-logo a {
            margin-left: 0;
            font-weight: bold;
            font-size: 1.25rem;
        }
    `;
    document.head.appendChild(style);
});
