<template>
  <div>
    <!-- Navbar -->
    <nav
      class="bg-gray-900 text-white p-6 flex fixed w-full z-50 shadow-lg mx-auto"
    >
      <div class="container flex justify-between items-center mx-auto">
        <h1 class="text-2xl font-bold text-purple-500">
          <span class="text-white">S</span>alokh<span class="text-white"
            >.wd</span
          >
        </h1>

        <!-- Desktop Menu -->
        <ul class="hidden md:flex gap-6 text-lg font-medium">
          <li
            :class="{ 'text-yellow-400': activeSection === 'home' }"
            class="hover:text-yellow-400 transition cursor-pointer"
          >
            <a href="#hero">Home</a>
          </li>
          <li
            :class="{ 'text-yellow-400': activeSection === 'about' }"
            class="hover:text-yellow-400 transition cursor-pointer"
          >
            <a href="#about">About me</a>
          </li>
          <li
            :class="{ 'text-yellow-400': activeSection === 'skills' }"
            class="hover:text-yellow-400 transition cursor-pointer"
          >
            <a href="#skills">Skills</a>
          </li>
          <li
            :class="{ 'text-yellow-400': activeSection === 'cards' }"
            class="hover:text-yellow-400 transition cursor-pointer"
          >
            <a href="#cards">Service</a>
          </li>
          <li
            :class="{ 'text-yellow-400': activeSection === 'projects' }"
            class="hover:text-yellow-400 transition cursor-pointer"
          >
            <a href="#projects">Projects</a>
          </li>
          <li
            :class="{ 'text-yellow-400': activeSection === 'contact' }"
            class="hover:text-yellow-400 transition cursor-pointer"
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <!-- Mobile Hamburger -->
        <div class="md:hidden">
          <button @click="menuOpen = !menuOpen">
            <svg
              v-if="!menuOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <ul
          v-show="menuOpen"
          class="md:hidden flex flex-col mt-4 gap-4 text-center bg-gray-800 rounded-lg p-4 shadow-lg"
        >
          <li
            :class="{ 'text-yellow-400': activeSection === 'home' }"
            class="hover:text-yellow-400 transition cursor-pointer"
          >
            <a href="#home" @click="menuOpen = false">Home</a>
          </li>
          <li
            :class="{ 'text-yellow-400': activeSection === 'about' }"
            class="hover:text-yellow-400 transition cursor-pointer"
          >
            <a href="#about" @click="menuOpen = false">About me</a>
          </li>
          <li
            :class="{ 'text-yellow-400': activeSection === 'skills' }"
            class="hover:text-yellow-400 transition cursor-pointer"
          >
            <a href="#skills" @click="menuOpen = false">Skills</a>
          </li>
          <li
            :class="{ 'text-yellow-400': activeSection === 'projects' }"
            class="hover:text-yellow-400 transition cursor-pointer"
          >
            <a href="#projects" @click="menuOpen = false">Projects</a>
          </li>
          <li
            :class="{ 'text-yellow-400': activeSection === 'contact' }"
            class="hover:text-yellow-400 transition cursor-pointer"
          >
            <a href="#contact" @click="menuOpen = false">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    <main class="mx-auto min-h-screen">
      <!-- Hero Section -->
      <section
        id="hero"
        class="py-40 flex flex-col justify-center items-center  text-purple-500"
      >
        <div class="text-center max-w-2xl">
          <div class="mb-6">
            <img
              src="/public/my-img2.jpg"
              alt="Profile Photo"
              class="w-32 h-32 mx-auto object-cover rounded-full shadow-lg border-4 border-yellow-400"
            />
          </div>

          <h1 class="text-5xl font-extrabold mb-3">
            Hi, I'm <span class="text-yellow-400">Salokh</span>
          </h1>
          <h2 class="text-2xl font-semibold mb-4">Frontend Developer</h2>
          <p class="text-lg text-purple-200 mb-8">
            I craft modern, interactive and responsive web experiences using
            <span class="text-yellow-300 font-semibold">Vue</span>,
            <span class="text-yellow-300 font-semibold">Nuxt</span>, and
            <span class="text-yellow-300 font-semibold">Tailwind CSS</span>.
          </p>

          <div class="flex justify-center gap-4 mb-6">
            <a
              href="https://github.com/saloxiddin8"
              target="_blank"
              class="text-white hover:text-yellow-400 transition"
            >
              <i class="fa-brands fa-github fa-2x"></i>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              class="text-white hover:text-yellow-400 transition"
            >
              <i class="fa-brands fa-linkedin fa-2x"></i>
            </a>
            <a
              href="https://t.me/Saloxwd"
              target="_blank"
              class="text-white hover:text-yellow-400 transition"
            >
              <i class="fa-brands fa-telegram fa-2x"></i>
            </a>
          </div>

          <div class="flex justify-center gap-5">
            <a
              href="#projects"
              class="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-300 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              class="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              Hire Me
            </a>
          </div>
        </div>
      </section>
      <!-- about me -->
      <section
        id="about"
        class="text-white py-20 px-6 flex flex-col items-center mt-16"
      >
        <h2
          class="text-3xl md:text-5xl font-bold mb-12 mt-20"
          data-aos="fade-down"
        >
          About Me
        </h2>

        <div
          class="max-w-4xl w-full flex flex-col md:flex-row items-center gap-10"
        >
          <div class="flex-shrink-0" data-aos="fade-right">
            <img
              src="/public/my-img2.jpg"
              alt="Profile"
              class="rounded-3xl w-64 h-64 object-cover shadow-2xl"
            />
          </div>

          <div class="text-left space-y-6" data-aos="fade-left">
            <p class="text-2xl md:text-xl opacity-80">
              Hello! My name is <span class="font-bold">Solohiddin</span>. I am
              17 years old and I am a frontend developer with a passion for
              creating beautiful and interactive websites. I love working with
              Vue.js, Nuxt.js, and Tailwind CSS.
            </p>

            <p class="text-lg md:text-xl opacity-80">
              In addition to programming, I enjoy design and learning new
              technologies. My goal is to build projects that are not only
              functional but also visually appealing.
            </p>

            <ul class="space-y-2 text-sm md:text-base opacity-70">
              <li>
                <span class="font-bold">Location:</span> Andijan , Uzbekistan
              </li>
              <li>
                <span class="font-bold">Education:</span> 10th grade graduate,
                currently on holiday
              </li>
              <li>
                <span class="font-bold">Skills:</span> Vue.js, Nuxt.js, Tailwind
                CSS, JavaScript, HTML & CSS
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- skills -->
      <section
        id="skills"
        class="text-white py-20 px-6 text-center mt-53 mb-40"
      >
        <h2
          data-aos="fade-down"
          class="text-3xl md:text-5xl font-bold mb-12 mt-20"
        >
          My Skills
        </h2>

        <div
          data-aos="fade-up"
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto"
        >
          <div
            v-for="(skill, index) in skills"
            :key="index"
            class="bg-white text-black hover:scale-105 hover:rotate-1 hover:bg-yellow-100 transition-transform duration-500 rounded-3xl overflow-hidden h-48 flex flex-col justify-end shadow-2xl p-4"
          >
            <div class="flex items-center gap-2 mb-2">
              <img :src="skill.icon" alt="" class="w-10 h-10 mb-4" />
              <div class="font-bold text-xl">{{ skill.name }}</div>
            </div>
            <div class="w-full h-6 bg-gray-700 rounded-full overflow-hidden">
              <div
                class="h-full bg-yellow-400 transition-all duration-1500 ease-out"
                :style="{ width: skill.level + '%' }"
              ></div>
            </div>

            <div class="mt-2 text-sm opacity-80">{{ skill.level }}%</div>
          </div>
        </div>
      </section>

      <!-- Cards Section -->
      <section id="cards" class="container mx-auto mt-53 mb-40">
        <div class="flex flex-col items-center justify-center">
          <h1 class="text-3xl md:text-5xl font-bold mb-12 mt-40 text-center">
            Service
          </h1>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10 mt-16"
          >
            <div
              v-for="(card, index) in cards"
              :key="index"
              class="bg-white text-black rounded-xl p-6 shadow-xl hover:scale-105 hover:rotate-1 hover:bg-yellow-100 transition-transform duration-500"
            >
              <h3 class="text-xl font-bold mb-2">{{ card.title }}</h3>
              <p class="opacity-80">{{ card.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- projects -->
      <section
        id="projects"
        class="text-white py-20 px-6 text-center mt-20 mb-40"
      >
        <h2
          class="text-3xl md:text-5xl font-bold mb-12 mt-20"
          data-aos="fade-down"
        >
          My Projects
        </h2>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-10 max-w-6xl mx-auto"
        >
          <div
            v-for="(project, i) in projects"
            :key="i"
            class="bg-gray-800 rounded-3xl overflow-hidden shadow-2xl cursor-pointer transform transition hover:scale-105"
            @click="openLink(project.link)"
            data-aos="fade-up"
          >
            <img
              :src="project.image"
              :alt="project.name"
              class="w-full h-48 object-cover"
            />

            <div class="p-4">
              <h3 class="text-xl font-bold mb-2">{{ project.name }}</h3>
              <p class="text-sm opacity-80">{{ project.description }}</p>
            </div>
          </div>
        </div>
      </section>
      <!-- contact -->
      <section
        id="contact"
        class="flex items-center justify-center text-white px-6 py-20"
      >
        <div
          class="max-w-3xl w-full p-10 rounded-2xl shadow-2xl border border-gray-700"
        >
          <h2 class="text-4xl font-bold text-center mb-8">
            Get in <span class="text-purple-400">Touch</span>
          </h2>

          <form @submit.prevent="handleSubmit" class="grid grid-cols-1 gap-6">
            <input
              type="hidden"
              name="access_key"
              value="f79f9be1-cf42-4f33-82c7-8b097db3afdf"
            />

            <div>
              <label class="block mb-2 text-sm font-semibold">Your Name</label>
              <input
                v-model="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                class="w-full px-4 py-3 rounded-xl bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label class="block mb-2 text-sm font-semibold"
                >Email Address</label
              >
              <input
                v-model="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                class="w-full px-4 py-3 rounded-xl bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label class="block mb-2 text-sm font-semibold">Message</label>
              <textarea
                v-model="message"
                rows="5"
                name="message"
                placeholder="Write your message..."
                class="w-full px-4 py-3 rounded-xl bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition-all font-semibold text-lg shadow-lg"
            >
              Send Message
            </button>
          </form>

          <div
            class="mt-10 flex flex-col items-center text-center gap-3 text-gray-300"
          >
            <p>You can also contact me via:</p>
            <div class="flex gap-6 text-2xl">
              <a href="#" class="hover:text-purple-400 transition"
                ><i class="fa-brands fa-telegram"></i
              ></a>
              <a href="#" class="hover:text-purple-400 transition"
                ><i class="fa-brands fa-instagram"></i
              ></a>
              <a href="#" class="hover:text-purple-400 transition"
                ><i class="fa-brands fa-github"></i
              ></a>
            </div>
          </div>
        </div>
      </section>
      <footer class="text-center py-6 text-sm opacity-60 mt-10">
        © 2025 Solohiddin Dev | All rights reserved
      </footer>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

// Mobile menu toggle
const menuOpen = ref(false);

// Contact form reactive variables
const name = ref("");
const email = ref("");
const message = ref("");

// Active section for navbar highlight
const activeSection = ref("hero");

// Contact form submit handler
const handleSubmit = async () => {
  const formData = new FormData();
  formData.append("access_key", "f79f9be1-cf42-4f33-82c7-8b097db3afdf");
  formData.append("name", name.value);
  formData.append("email", email.value);
  formData.append("message", message.value);

  await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });
  alert("Thank you for contacting me! I will get back to you soon.");
  // Clear inputs after submit
  name.value = "";
  email.value = "";
  message.value = "";
};

// Cards array
const cards = [
  { title: "Fast", desc: "Lightning-fast loading pages and smooth UX" },
  {
    title: "Responsive",
    desc: "Mobile-friendly & adaptive to all screen sizes",
  },
  { title: "Interactive", desc: "Engaging animations and smooth transitions" },
  { title: "Modern UI", desc: "Trendy design using Tailwind and Vue" },
  { title: "Clean Code", desc: "Optimized and maintainable codebase" },
  { title: "Future Ready", desc: "Built with best practices and modern tools" },
];

// Skills array
const skills = [
  { name: "Vue.js", level: 90, icon: "public/favicon.ico" },
  {
    name: "Nuxt.js",
    level: 75,
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nuxtdotjs.svg",
  },
  {
    name: "Tailwind CSS",
    level: 85,
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg",
  },
  {
    name: "JavaScript",
    level: 95,
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg",
  },
  {
    name: "HTML & CSS",
    level: 100,
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg",
  },
  {
    name: "Git & GitHub",
    level: 70,
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg",
  },
  {
    name: "React",
    level: 60,
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg",
  },
  {
    name: "Figma / Design",
    level: 65,
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/figma.svg",
  },
];

// Projects array
const projects = ref([
  {
    name: "My Personal Portfolio",
    description:
      "A modern portfolio built with Vue.js, Tailwind CSS and AOS animations.",
    image: "",
    link: "",
  },
  {
    name: "E-commerce Website",
    description:
      "A responsive e-commerce site with product catalog and cart functionality.",
    image: "",
    link: "",
  },
  {
    name: "E-commerce Website",
    description:
      "A responsive e-commerce site with product catalog and cart functionality.",
    image: "",
    link: "",
  },
  {
    name: "Blog Website",
    description:
      "A blog website built with Nuxt.js for smooth page transitions and SEO.",
    image: "",
    link: "",
  },
]);

// Open project link
const openLink = (url) => {
  window.open(url, "_blank");
};

// Initialize AOS and scroll spy
onMounted(() => {
  AOS.init({ duration: 1200, once: true });

  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 120; // offset for fixed navbar
    sections.forEach((section) => {
      if (
        scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight
      ) {
        activeSection.value = section.id;
      }
    });
  });
});
</script>

<style scoped >
#hero{
  width: inherit;
  height: inherit;
  background: url('../assets/img/bg-hero.jpg') no-repeat center center/cover;
}
@keyframes wave {
  0% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(0) translateY(-5px);
  }
  100% {
    transform: translateX(50%) translateY(0);
  }
}

html {
  scroll-behavior: smooth;
}

section {
  animation: fadeIn 1s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
