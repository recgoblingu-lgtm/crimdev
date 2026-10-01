fetch("/maintenance.json")
  .then(res => res.json())
  .then(config => {
    if (config.maintenance === true) {
      document.body.innerHTML = `
        <div style="
          position: fixed;
          inset: 0;
          background: #111;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: sans-serif;
          z-index: 999999;
        ">
          <div style="
            background: #FFD54F;
            color: #000;
            padding: 40px;
            border-radius: 12px;
            text-align: center;
          ">
            <h1>⚠️ SITE UNDER MAINTENANCE</h1>
            <p>Please check back later!</p>
          </div>
        </div>
      `;
    }
  });
