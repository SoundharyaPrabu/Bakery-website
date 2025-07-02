<template>
  <section class="contact-page">
    <h2>Contact Us</h2>
    <p class="intro-text">
      We'd love to hear from you! Whether you have a question, feedback, or custom order — just drop us a message.
    </p>

    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input v-model="form.name" type="text" id="name" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="form.email" type="email" id="email" required />
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea v-model="form.message" id="message" rows="5" required></textarea>
      </div>

      <button type="submit">Send Message</button>
    </form>

    <p v-if="submitted" class="thanks-message">🎉 Thank you! We'll get back to you soon.</p>
  </section>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      },
      submitted: false
    };
  },
  methods: {
    handleSubmit() {
      console.log("Form submitted:", this.form);
      this.submitted = true;


      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    }
  }
};
</script>

<style scoped>
.contact-page {
  background-color: #fff4f8;
  padding: 40px 20px;
  max-width: 600px;
  margin: 0 auto;
  font-family: 'Segoe UI', sans-serif;
  color: #b85c38;
}

h2 {
  text-align: center;
  font-size: 32px;
  color: #d63384;
  margin-bottom: 10px;
}

.intro-text {
  text-align: center;
  font-size: 16px;
  margin-bottom: 30px;
  color: #7b4a3b;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
  color: #b85c38;
}

input,
textarea {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #ffc0cb;
  border-radius: 8px;
  background-color: #fff0f6;
  color: #6e3255;
  font-size: 14px;
  outline: none;
}

input:focus,
textarea:focus {
  border-color: #d63384;
  box-shadow: 0 0 5px #fcbecb;
}

button {
  background-color: #d63384;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #b2286e;
}

.thanks-message {
  text-align: center;
  margin-top: 20px;
  color: #a14c65;
  font-style: italic;
}
</style>
