const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1555029821036437604/ne-dYk7X9QKWNf5jAmmz_5dlrKff0sOrAfZVLZC9Pgq8Nfd2FIBFg9WnpdeVeN1ErG9F';

// get form
const form = document.querySelector('#submit-form');

if (form) {

  // show selected file names
  for (const id of ['thumbnail', 'image', 'video']) {
    const input = document.querySelector(`#${id}`);

    input?.addEventListener('change', () => {
      const name = document.querySelector(`#${id}-name`);
      if (name) {
        name.textContent = input.files[0]?.name || (id === 'video' ? 'Optional' : 'Required');
      }
    });
  }

  // submit handler
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const status = document.querySelector('#status');

    // create webhook form
    const webhookData = new FormData();

    // build embed
    webhookData.append('payload_json', JSON.stringify({
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

    // get files
    const thumbnail = formData.get('thumbnail');
    const image = formData.get('image');
    const video = formData.get('video');

    // attach thumbnail
    if (thumbnail && thumbnail.size > 0) {
      webhookData.append('files[0]', thumbnail, 'thumbnail.png');
    }

    // attach image
    if (image && image.size > 0) {
      webhookData.append('files[1]', image, 'image.png');
    }

    // attach video (optional)
    if (video && video.size > 0) {
      webhookData.append('files[2]', video, video.name);
    }

    try {
      const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        body: webhookData
      });

      if (!response.ok) throw new Error('Webhook failed');

      status.textContent = 'Submitted successfully.';
      status.classList.add('show');

      form.reset();

      // reset file labels
      document.querySelector('#thumbnail-name').textContent = 'Required';
      document.querySelector('#image-name').textContent = 'Required';
      document.querySelector('#video-name').textContent = 'Optional';

    } catch (error) {
      status.textContent = 'Submission failed. Check webhook.';
      status.classList.add('show');
    }
  });
}
