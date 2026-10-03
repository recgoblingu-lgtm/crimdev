fetch("maintenance.json")
  .then(res => res.json())
  .then(config => {
    if (config.maintenance === true) {
      document.body.innerHTML = `
        <style>
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #0e0e0e;
            color: #eaeaea;
          }

          .wrap {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
          }

          .card {
            background: #1a1a1a;
            border: 1px solid #333;
            padding: 32px 28px;
            max-width: 400px;
            width: 100%;
            text-align: center;
          }

          .icon {
            font-size: 40px;
            margin-bottom: 6px;
          }

          h1 {
            margin: 8px 0 6px;
            font-size: 20px;
            color: #ffcc55;
            font-weight: 600;
          }

          p {
            margin: 0;
            font-size: 14px;
            color: #bbb;
          }

          .dots {
            margin-top: 14px;
          }

          .dots span {
            display: inline-block;
            width: 6px;
            height: 6px;
            margin: 0 2px;
            background: #ffcc55;
            border-radius: 50%;
            opacity: 0.4;
            animation: blink 1.2s infinite;
          }

          .dots span:nth-child(2) { animation-delay: 0.2s; }
          .dots span:nth-child(3) { animation-delay: 0.4s; }

          @keyframes blink {
            0% { opacity: 0.2; }
            50% { opacity: 1; }
            100% { opacity: 0.2; }
          }

          .small {
            margin-top: 12px;
            font-size: 12px;
            color: #777;
          }
        </style>

        <div class="wrap">
          <div class="card">
            <div class="icon">⚠</div>
            <h1>Maintenance</h1>
            <p>site's down for a bit — working on it</p>

            <div class="dots">
              <span></span><span></span><span></span>
            </div>

            <div class="small">
              CrimDev update in progress
            </div>
          </div>
        </div>
      `;
    }
  })
  .catch(err => console.log("maintenance check failed:", err));
