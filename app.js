const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1555029821036437604/ne-dYk7X9QKWNf5jAmmz_5dlrKff0sOrAfZVLZC9Pgq8Nfd2FIBFg9WnpdeVeN1ErG9F';

const form = document.querySelector('#submit-form');

if (form) {

  // file name display
  for (const id of ['thumbnail', 'image', 'video']) {
    const input = document.querySelector(`#${id}`);
    input?.addEventListener('change', () => {
      const label = document.querySelector(`#${id}-name`);
      if (label) {
        label.textContent = input.files[0]?.name || (id === 'video' ? 'Optional' : 'Required');
      }
    });
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const status = document.querySelector('#status');

    // IMPORTANT: separate FormData for webhook
    const data = new FormData();

    // Attach files FIRST
    const thumbnail = formData.get('thumbnail');
    const image = formData.get('image');
    const video = formData.get('video');

    if (thumbnail && thumbnail.size > 0) {
      data.append('files[0]', thumbnail, 'thumbnail.png');
    }

    if (image && image.size > 0) {
      data.append('files[1]', image, 'image.png');
    }

    if (video && video.size > 0) {
      data.append('files[2]', video, video.name);
    }

    // THEN payload_json
    data.append('payload_json', JSON.stringify({
      username: 'CrimDev submissions',
      embeds: [
        {
          title: `New game: ${formData.get('title')}`,
          description: formData.get('description'),
          color: 13964224,
          fields: [
            {
              name: 'Email',
              value: formData.get('email')
            }
          ],
          thumbnail: {
            url: 'attachment://thumbnail.png'
          },
          image: {
            url: 'attachment://image.png'
          }
        }
      ]
    }));

    try {
      const res = await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        body: data // NO headers
      });

      if (!res.ok) throw new Error();

      status.textContent = 'Submitted successfully.';
      status.classList.add('show');
      form.reset();

    } catch (err) {
      status.textContent = 'Failed to send.';
      status.classList.add('show');
    }
  });
}
