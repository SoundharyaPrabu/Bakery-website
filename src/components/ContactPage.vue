<template>
  <div class="contact-page">
    <h2>Contact Us 📬</h2>
    <p class="intro">We’d love to hear from you! Send us a message below and we'll get back to you soon.</p>

    <form @submit.prevent="submitForm" class="contact-form">
      <div class="form-group">
        <label>Name</label>
        <input v-model="form.name" type="text" required />
      </div>

      <div class="form-group">
        <label>Email</label>
        <input v-model="form.email" type="email" required />
      </div>

      <div class="form-group">
        <label>Message</label>
        <textarea v-model="form.message" required></textarea>
      </div>

      <button type="submit">Send Message 💌</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      alert(`Thank you, ${this.form.name}! Your message has been sent.`);
      // Clear the form
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
.contact-page {
  padding: 40px 20px;
  background-color: #fff0f5;
  font-family: 'Segoe UI', sans-serif;
  color: #c71585;
  min-height: 100vh;
}

h2 {
  text-align: center;
  font-size: 28px;
  margin-bottom: 10px;
}

.intro {
  text-align: center;
  margin-bottom: 30px;
  font-size: 16px;
  color: #7b4a3b;
}

.contact-form {
  max-width: 500px;
  margin: 0 auto;
  background: #fff0f6;
  padding: 25px;
  border: 2px solid #ffc0cb;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(255, 182, 193, 0.3);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
  color: #b03060;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #f8cdd9;
  border-radius: 6px;
  font-size: 14px;
  background: #fff;
  color: #c71585;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background: #ff69b4;
  color: white;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #d63384;
}
</style>
