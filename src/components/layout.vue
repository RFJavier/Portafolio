<script setup lang="ts">
import { RouterLink } from 'vue-router';
// import { ref } from 'vue';
import darkmode from '../components/darkmode.vue';

// let isdark =ref<boolean>(false);


  



</script>
<template class="w-screen h-screen" >
  
<nav class="relative select-none bg-grey lg:flex lg:items-stretch w-full bg-[#00CBA9]">
  <div class="flex flex-no-shrink items-stretch h-12">
    <RouterLink to="/" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal font-semibold text-4xl dark:text-black text-white no-underline flex items-center hover:bg-grey-dark">
      Javier Rivera
    </RouterLink>
  
    <div class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal dark:text-black text-white no-underline flex items-center hover:bg-grey-dark">
      <darkmode>  
      </darkmode>
    </div>
    <button class="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4">
      <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
    </button>
  </div>
  <div class="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
    <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">
      <RouterLink to="/" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal dark:text-black text-white  no-underline flex items-center hover:bg-grey-dark">
      Inicio
      </RouterLink>
      <RouterLink to="/habilidad" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white dark:text-black no-underline flex items-center hover:bg-grey-dark">
        Mi Trabajo
      </RouterLink>
      <RouterLink to="/contacto" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white dark:text-black no-underline flex items-center hover:bg-grey-dark">
        Mi Trabajo
      </RouterLink>
      
    </div>
  </div>
</nav>


<div>
  <div class="bg-gray-400  dark:bg-black ">
    <slot class="w-auto h-auto  " >

</slot>

  </div>

</div>





</template>

