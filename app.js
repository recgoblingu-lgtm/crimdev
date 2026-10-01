const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1555029821036437604/ne-dYk7X9QKWNf5jAmmz_5dlrKff0sOrAfZVLZC9Pgq8Nfd2FIBFg9WnpdeVeN1ErG9F';

const form = document.querySelector('#submit-form');

if (form) {
  for (const id of ['thumbnail', 'image', 'video']) {
    const input = document.querySelector(`#${id}`);

    input?.addEventListener('change', () => {
      const name = document.querySelector(`#${id}-name`);

      if (name) {
        name.textContent = input.files[0]?.name || 'Optional';
      }
    });
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const status = document.querySelector('#status');
    const payload = {
      username: 'CrimDev submissions',
      embeds: [
        {
          title: `New game: ${data.get('title')}`,
          description: data.get('description'),
          color: 13964224,
          fields: [
            {
              name: 'Email',
              value: data.get('email')
            },
            {
              name: 'Files',
              value: `${data.get('thumbnail').name}, ${data.get('image').name}${
                data.get('video')?.name ? `, ${data.get('video').name}` : ''
              }`
            }
          ]
        }
      ]
    };

    if (DISCORD_WEBHOOK_URL.includes('REPLACE_ME')) {
      status.textContent = 'Demo submission saved. Replace the placeholder Discord webhook in app.js to send it.';
      status.classList.add('show');
      console.log(payload);
      form.reset();
      return;
    }

    try {
      const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Webhook failed');
      }

      status.textContent = 'Submitted successfully.';
      status.classList.add('show');
      form.reset();
    } catch (error) {
      status.textContent = 'Submission failed. Check the webhook URL.';
      status.classList.add('show');
    }
  });
}
