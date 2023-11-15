<template>
  <div class="relative mx-auto max-w-[1280px] px-5">
  <header><div class="flex items-center justify-between pt-5"><a href="/" class="inline-flex items-center gap-2 text-lg font-bold md:text-2xl nuxt-link-active"><img src="/logo.png" alt="" class="h-6 w-6 md:h-10 md:w-10">
      MagickPen
    </a> <ul class="header-menu fixed right-4 top-4 z-50 hidden w-full max-w-xs gap-4 space-y-2 rounded-lg bg-white p-6 font-display text-base font-medium text-secondary-700 shadow-lg md:static md:flex md:w-auto md:max-w-none md:space-y-0 md:!bg-transparent md:p-0 md:text-sm md:shadow-none"><li class="block md:hidden"><a href="/" class="relative block cursor-pointer leading-9 hover:text-purple-500 md:px-2 md:leading-7 nuxt-link-active">
          Home
        </a></li> <li class="block md:hidden"><a href="/templates" class="relative block cursor-pointer leading-9 hover:text-purple-500 md:px-2 md:leading-7">
          Templates
        </a></li> <li class="block md:hidden"><a href="/pricing" aria-current="page" class="block leading-9 hover:text-purple-500 md:px-2 md:leading-7 nuxt-link-exact-active nuxt-link-active">
          Pricing
        </a></li> <li class="hidden md:block"><a href="/templates" class="relative block cursor-pointer leading-9 hover:text-purple-500 md:px-2 md:leading-7">
          Templates
        </a></li> <li class="hidden md:block"><a href="/pricing" aria-current="page" class="block leading-9 hover:text-purple-500 md:px-2 md:leading-7 nuxt-link-exact-active nuxt-link-active">
          Pricing
        </a></li> <li><a href="https://blog.magickpen.com/" class="block leading-9 hover:text-purple-500 md:px-2 md:leading-7">
          Blog
        </a></li> 
        <li class="hidden md:block">
          <a href="/download" class="block leading-9 hover:text-purple-500 md:px-2 md:leading-7">
          Download
        </a></li> 
        <li class="absolute right-3 top-3 z-30 !m-0 block md:hidden"><a class="flex h-8 w-8 items-center justify-center rounded-md hover:bg-slate-100 hover:text-purple-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></a></li></ul> <div id="menu-mask" class="fixed inset-0 z-30 hidden bg-black/20 backdrop-blur-sm dark:bg-slate-900/80 md:hidden"></div> <div class="flex items-center gap-1 md:gap-4"><div class="group relative"><button aria-label="language toggle" class="flex h-10 w-10 items-center justify-center hover:text-purple-500"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path d="M7.75 2.75a.75.75 0 00-1.5 0v1.258a32.987 32.987 0 00-3.599.278.75.75 0 10.198 1.487A31.545 31.545 0 018.7 5.545 19.381 19.381 0 017 9.56a19.418 19.418 0 01-1.002-2.05.75.75 0 00-1.384.577 20.935 20.935 0 001.492 2.91 19.613 19.613 0 01-3.828 4.154.75.75 0 10.945 1.164A21.116 21.116 0 007 12.331c.095.132.192.262.29.391a.75.75 0 001.194-.91c-.204-.266-.4-.538-.59-.815a20.888 20.888 0 002.333-5.332c.31.031.618.068.924.108a.75.75 0 00.198-1.487 32.832 32.832 0 00-3.599-.278V2.75z"></path> <path fill-rule="evenodd" d="M13 8a.75.75 0 01.671.415l4.25 8.5a.75.75 0 11-1.342.67L15.787 16h-5.573l-.793 1.585a.75.75 0 11-1.342-.67l4.25-8.5A.75.75 0 0113 8zm2.037 6.5L13 10.427 10.964 14.5h4.073z" clip-rule="evenodd"></path></svg></button> <div class="absolute -right-2 z-10 -mt-1 hidden w-32 rounded-lg border border-gray-100 bg-white text-left text-sm shadow-lg group-hover:block"><div class="p-1">
          <li class="flex w-full cursor-pointer items-center rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">
          English
        </li><li class="flex w-full cursor-pointer items-center rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">
          简体中文
        </li><li class="flex w-full cursor-pointer items-center rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">
          繁體中文
        </li><li class="flex w-full cursor-pointer items-center rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">
          Français
        </li>
        <li class="flex w-full cursor-pointer items-center rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">
          日本語
        </li><li class="flex w-full cursor-pointer items-center rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">
          한국어
        </li><li class="flex w-full cursor-pointer items-center rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">
          العربية
        </li>
      </div>
    </div></div>
    <button aria-label="toggle menu" class="flex h-10 w-10 items-center justify-center md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>
    </button> 
    <a href="/download" class="hidden rounded-full border border-purple-500 bg-purple-500 px-3 py-1.5 text-center text-sm font-semibold capitalize text-white shadow-sm transition-all hover:border-purple-700 hover:bg-purple-700 focus:ring focus:ring-purple-200 md:block md:min-w-[110px] md:px-4 md:py-2">
        Download
      </a></div>
    </div>
    </header>
      </div>
</template>