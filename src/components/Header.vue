<template>
  <header class="w-full h-21.25 fixed top-0 flex justify-between z-20">
        
    <!-- logo -->
    <a href="#" aria-label="Home page">
      <div class="logo w-20 h-21.25 bg-[url(src/assets/logo.png)]"></div>
    </a>
    
    <!-- start of navigation -->
    <nav id="navbar" class="flex">
      <ul class="center flex-row gap-4 md:gap-12 mb-0 mr-4">
        <li><a href="#about" class="nav-link text-[20px] transition">About</a></li>
        <li><a href="#projects" class="nav-link text-[20px] transition">Projects</a></li>
        <li><a href="#contact" class="nav-link text-[20px] transition">Contact</a></li>
      </ul>
    </nav>
    <!-- end of navigation -->
  </header>

</template>

<style scoped>
header {
  box-shadow: 3px 3px 12px rgba(248, 99, 189, .25);
  backdrop-filter: blur(40px);
}
.logo {
  transform: scale(.7059);
  &:hover {
    transform: scale(0.75);
    transition: transform .3s ease-in-out;
  }
}
.nav-link {
  &:hover {
    color: var(--color-purple);
  }
}
</style>