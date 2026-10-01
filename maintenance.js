fetch("maintenance.json")
  .then(res => res.json())
  .then(config => {
    if (config.maintenance === true) {
      document.body.innerHTML = `
        <style>
          body {
            margin: 0;
            font-family: system-ui, Arial, sans-serif;
            background: radial-gradient(circle at top, #1a1a1a, #0b0b0b);
            color: white;
            height: 100vh;
            overflow: hidden;
          }

          .wrap {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .card {
            background: rgba(255, 213, 79, 0.12);
            border: 1px solid rgba(255, 213, 79, 0.4);
            padding: 40px;
            border-radius: 16px;
            text-align: center;
            max-width: 420px;
            box-shadow: 0 0 40px rgba(0,0,0,0.6);
            backdrop-filter: blur(10px);
          }

          .icon {
            font-size: 48px;
            margin-bottom: 10px;
          }

          h1 {
            margin: 10px 0;
            font-size: 22px;
            color: #FFD54F;
          }

          p {
            opacity: 0.8;
            margin: 0;
          }

          .dots span {
            display: inline-block;
            width: 8px;
            height: 8px;
            margin: 0 3px;
            background: #FFD54F;
            border-radius: 50%;
            animation: bounce 1s infinite alternate;
          }

          .dots span:nth-child(2) { animation-delay: 0.2s; }
          .dots span:nth-child(3) { animation-delay: 0.4s; }

          @keyframes bounce {
            from { transform: translateY(0); opacity: 0.5; }
            to { transform: translateY(-6px); opacity: 1; }
          }

          .small {
            margin-top: 15px;
            font-size: 12px;
            opacity: 0.6;
          }
        </style>

        <div class="wrap">
          <div class="card">
            <div class="icon">⚠️</div>
            <h1>SITE UNDER MAINTENANCE</h1>
            <p>Please check back later</p>

            <div class="dots" style="margin-top:12px;">
              <span></span><span></span><span></span>
            </div>

            <div class="small">
              Recquiem is being updated for a better experience
            </div>
          </div>
        </div>
      `;
    }
  })
  .catch(err => console.log("Maintenance check failed:", err));
