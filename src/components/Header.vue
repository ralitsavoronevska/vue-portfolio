<template>
  <header
    class="fixed top-0 left-0 right-0 flex justify-between items-center h-[85px] z-20
           shadow-[3px_3px_12px_rgba(248,99,189,0.25)] backdrop-blur-2xl"
  >
    <!-- Logo -->
    <a href="#" aria-label="Home page" class="block">
      <div
        class="logo w-20 h-[85px] bg-[url('/assets/logo.png')] bg-cover bg-center bg-no-repeat
               scale-[0.7059] transition-transform duration-300 ease-in-out
               hover:scale-75"
      ></div>
    </a>

    <!-- Navigation -->
    <nav class="flex">
      <ul class="flex items-center gap-4 md:gap-12 mr-4">
        <li>
          <a
            href="#about"
            class="text-xl font-medium transition-colors hover:text-(--purple)"
            >About</a
          >
        </li>
        <li>
          <a
            href="#projects"
            class="text-xl font-medium transition-colors hover:text-(--purple)"
            >Projects</a
          >
        </li>
        <li>
          <a
            href="#contact"
            class="text-xl font-medium transition-colors hover:text-(--purple)"
            >Contact</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>