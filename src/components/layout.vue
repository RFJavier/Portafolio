<script setup lang="ts">
import { RouterLink } from 'vue-router';
// import { ref } from 'vue';
import darkmode from '../components/darkmode.vue';

// let isdark =ref<boolean>(false);


  



</script>
<template class="w-screen h-screen" >
  <nav class="relative select-none bg-grey lg:flex lg:items-stretch w-full bg-[#00CBA9] nav-fixed">
  <div class="flex flex-no-shrink items-stretch h-12">
    <RouterLink to="/" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal font-semibold text-4xl dark:text-black text-white no-underline flex items-center hover:bg-grey-dark rounded-full border-r-black">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
    <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z" clip-rule="evenodd" />
      </svg>
      </RouterLink>
      <div class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal dark:text-black text-white no-underline flex items-center hover:bg-grey-dark">
        <darkmode>  
        </darkmode>
      </div>
      <div class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal dark:text-black text-white no-underline flex items-center hover:bg-grey-dark">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>  <a class="" href="https://github.com/RJAV4" target="_blank">Mi github</a>
      </div>
    <!-- <button class="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4">
      <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
    </button> -->
  </div>
  <div class="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
    <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">
      <RouterLink to="/" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal dark:text-black text-white  no-underline flex items-center hover:bg-grey-dark">
          Inicio
        </RouterLink>
       
        <RouterLink to="/contacto" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white dark:text-black no-underline flex items-center hover:bg-grey-dark">
          Contacto
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