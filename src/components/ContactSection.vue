<template>
  <section class="text-white mt-20" id="contact">
    <h2 class="text-4xl font-bold text-white text-left mb-4 px-4 xl:pl-16">
      {{ $t('contact.title') }}
    </h2>
    <div
      class="grid md:grid-cols-2 gap-4 relative px-4 xl:px-16 mt-8"
      data-aos="zoom-in-up"
    >
      <div>
        <p class="text-[#adb7be]">
          {{ $t('contact.description') }}
        </p>
        <div class="col-lg-4 col-md-4 mb-lg-0 mt-5">
          <div class="flex mb-10 items-center">
            <div class="p-2" :style="socialStyles">
              <img
                src="https://img.icons8.com/metro/50/ffffff/new-post.png"
                alt="new-post"
                class="w-6"
              />
            </div>
            <div class="ml-5 text-white">
              <h4>{{ $t('contact.email') }}</h4>
              <p>martin.dobr45@gmail.com</p>
            </div>
          </div>
          <div class="flex mb-10 items-center">
            <div class="p-2" :style="socialStyles">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/phone.png"
                alt="phone"
                class="w-6"
              />
            </div>
            <div class="ml-5 text-white">
              <h4>{{ $t('contact.phone') }}</h4>
              <p>+359 885833003</p>
            </div>
          </div>
          <div class="flex mb-10 items-center">
            <div class="p-2" :style="socialStyles">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
                alt="linkedin"
                class="w-6"
              />
            </div>
            <div class="ml-5 text-white">
              <h4>LinkedIn</h4>
              <a
                class="text-white hover:text-[#bba5d4] transition duration-300"
                href="https://www.linkedin.com/in/martin-dobrudzhanski-9bb821137/"
                target="_blank"
                >{{ $t('contact.linkedin') }}</a
              >
            </div>
          </div>
          <div class="flex mb-0 items-center">
            <div class="p-2" :style="socialStyles">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/github.png"
                alt="linkedin"
                class="w-6"
              />
            </div>
            <div class="ml-5 text-white">
              <h4>GitHub</h4>
              <a
                class="text-white hover:text-[#bba5d4] transition duration-300"
                href="https://github.com/martinski74"
                target="_blank"
                >{{ $t('contact.github') }}</a
              >
            </div>
          </div>
        </div>
      </div>
      <div
        style="
          background: #111a3e;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #111a3e;
          backdrop-filter: blur(9px);
          -webkit-backdrop-filter: blur(9px);
        "
      >
        <form
          @submit.prevent="sendEmail"
          class="flex flex-col p-2"
          data-aos="zoom-in-up"
        >
          <div class="mb-6">
            <label
              for="email"
              class="text-white block mb-2 text-sm font-medium"
              >{{ $t('contact.email') }}</label
            >
            <input
              v-model="form.email"
              type="email"
              id="email"
              required
              class="bg-[#111827] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="email@gmail.com"
              name="email"
            />
          </div>
          <div class="mb-6">
            <label
              for="subject"
              class="text-white block mb-2 text-sm font-medium"
              >{{ $t('contact.subject') }}</label
            >
            <input
              v-model="form.subject"
              type="text"
              id="subject"
              required
              class="bg-[#111827] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              :placeholder="$t('contact.subjectPlaceholder')"
              name="subject"
            />
          </div>
          <div class="mb-6">
            <label
              for="message"
              class="text-white block mb-2 text-sm font-medium"
              >{{ $t('contact.message') }}</label
            >
            <textarea
              v-model="form.message"
              id="message"
              required
              class="bg-[#111827] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              :placeholder="$t('contact.messagePlaceholder')"
              name="message"
            ></textarea>
          </div>
          <div v-if="error" class="text-red-500 mb-4">{{ error }}</div>
          <div v-if="success" class="text-green-500 mb-4">
            {{ $t('contact.success') }}
          </div>
          <button
            type="submit"
            :disabled="loading"
            class="z-1 w-[100%!important] px-6 md:px-7 py-3 rounded-full sm:w-max flex justify-center text-white bg-primary border-2 border-transparent disabled:opacity-50"
          >
            {{ loading ? $t('contact.sending') : $t('contact.send') }}
          </button>
        </form>
      </div>
      <div
        class="bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl h-20 w-80 z-0 absolute -top-1/2 -left-4 transform -translate-x-2/3 -translate-1/2"
      ></div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue';
import emailjs from '@emailjs/browser';

const form = ref({
  email: '',
  subject: '',
  message: '',
});

const loading = ref(false);
const success = ref(false);
const error = ref('');
const socialStyles = reactive({
  background: '#2c3865',
  width: '50px',
  height: '46px',
  display: 'flex',
  justifyContent: 'center',
  borderRadius: '50%',
  overflow: 'hidden',
  border: '1px solid #111a3e',
  backdropFilter: 'blur(9px)',
  WebkitBackdropFilter: 'blur(9px)',
});

const sendEmail = async (e) => {
  loading.value = true;
  error.value = '';

  try {
    await emailjs.send(
      'service_r6w8kve',
      'template_noue6st',
      {
        from_email: form.value.email,
        subject: form.value.subject,
        message: form.value.message,
      },
      'YOUR_PUBLIC_KEY'
    );
    success.value = true;
    form.value = {
      email: '',
      subject: '',
      message: '',
    };
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};
</script>
