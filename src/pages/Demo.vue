<template>
  <div id="__next">
    <div>
      <header
        class="flex justify-between items-center w-full mt-3 border-b-2 pb-4 sm:px-4 px-2"
      >
        <a class="flex space-x-2" href="/">
          <img
            alt="header text"
            loading="lazy"
            width="20"
            height="20"
            decoding="async"
            data-nimg="1"
            class="sm:w-10 sm:h-10 w-7 h-7"
            style="color: transparent"
            src="/logo.webp"
          />
          <h1 class="sm:text-3xl text-xl font-bold ml-2 tracking-tight">
            <span class="text-pink-400/90">Pipi</span>
            GPT.co
          </h1>
        </a>
        <div class="flex items-center space-x-2 sm:space-x-6">
          <a
            class="border-r border-gray-300 pr-2 sm:pr-4 space-x-2 hover:text-blue-400 transition"
            href="/"
          >
            <p class="font-medium text-base">首页</p>
          </a>
          <a
            class="border-r border-gray-300 pr-2 sm:pr-4 space-x-2 hover:text-blue-400 transition"
            href="/f"
          >
            <p class="font-medium text-base">反馈</p>
          </a>
          <a
            class="border-gray-300 pr-2 sm:pr-4 space-x-2 hover:text-blue-400 transition"
            href="https://bibigpt.co"
          >
            <p class="font-medium text-base">
              BibiGPT<span class="hidden sm:inline-block"
                >.co 音视频一键总结</span
              >
            </p>
          </a>
          <div>
            <button
              class="rounded-xl border border-black bg-black px-1 py-0.5 text-sm text-white transition-all hover:bg-white hover:text-black md:rounded-full md:p-1.5 md:px-4"
            >
              登录
            </button>
          </div>
        </div>
      </header>
      <div
        class="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen"
      >
        <main
          class="flex flex-1 w-full flex-col items-center justify-center text-center px-3 mt-20"
        >
          <a
            href="https://bibigpt.co"
            target="_blank"
            rel="noreferrer"
            class="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out"
          >
            Used by over <span class="font-semibold">78,000</span>
            lovely users
          </a>
          <h1
            class="mx-auto max-w-5xl font-display text-3xl font-bold tracking-normal text-slate-900 sm:text-7xl"
          >
            让每张照片，都有故事可<strong class="bg-pink-100">讲</strong>
            <div class="mt-4">
              AI 一键生成
              <!-- -->
              <span class="relative whitespace-nowrap text-pink-400">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  class="absolute top-2/3 left-0 h-[0.58em] w-full fill-pink-400/70"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
                  ></path>
                </svg>
                <span
                  class="index-module_type__E-SaG relative text-pink-400"
                ></span>
              </span>
              <!-- -->
              文案
            </div>
          </h1>
          <p class="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">
            想发朋友圈，却苦于想不到合适的文案？<br />
            让我们的 AI 自动识别图片一键生成文案，帮助您的分享变得更轻松。<br />
            <strong>AI 识图，文案不输。</strong>
          </p>
          <div class="flex justify-center space-x-4">
            <a
              class="bg-white rounded-xl text-black font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-gray-100 border hidden"
              href="https://bibigpt.co/"
              target="_blank"
              rel="noreferrer"
            >
              <button>BibiGPT AI 音视频助理</button>
            </a>
          </div>
          <div class="mt-10 mb-8 w-full flex-col items-center gap-4">
            <div
              role="presentation"
              tabindex="0"
              class="mx-auto flex h-52 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 hover:bg-slate-100  bg-white"
            >
              <input
                accept="image/*,.jpeg,.png,.gif,.webp,.jpg"
                multiple=""
                type="file"
                style="display: none"
                tabindex="-1"
              />
              <button
                class="inline-flex items-center justify-center ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 !bg-primary h-10 bg-black rounded-xl text-white text-xl font-extrabold px-12 py-4 sm:my-10 my-8 hover:bg-black/80"
              >
                上传您的照片
              </button>
              <div class="px-2 text-center">
                <p class="text-sm text-gray-500">
                  <span>
                    <span class="font-semibold">点击上传</span>
                    <!-- -->
                    或拖拽至此处
                    <!-- -->
                    (
                    <!-- -->
                    图片大小
                    <!-- -->
                    ≤10MB)
                  </span>
                </p>
                <span class="text-xs text-gray-500"
                  >支持格式：png, jpg, jpeg, webp, gif 等</span
                >
              </div>
            </div>
          </div>
          <div class="my-4 flex w-full items-center space-x-2">
            <div class="grid w-full items-center gap-1.5">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="apikey"
                >自定义
                <!-- -->
                GPT-4V APIKey (Limit: 100 / day)</label
              >
              <div class="flex w-full items-center space-x-2">
                <input
                  type="apikey"
                  class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                  placeholder="请填写你的 LLM API Key: sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                  value=""
                />
                <button
                  class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 !bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 w-20 bg-gray-200"
                >
                  清除
                </button>
                <button
                  class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 !bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-32 bg-black text-white"
                >
                  保存
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              class="flex justify-between items-center w-full flex-col sm:mt-10 mt-6"
            >
              <div class="flex flex-col space-y-10 mt-4 mb-16">
                <div class="flex sm:space-x-6 sm:flex-row flex-col">
                  <div>
                    <h2 class="mb-2 font-medium text-lg">AI 识图 👉</h2>
                    <img
                      alt="Original photo of my bro"
                      loading="lazy"
                      width="400"
                      height="400"
                      decoding="async"
                      data-nimg="1"
                      class="w-96 rounded-2xl"
                      style="color: transparent"
                      src="/sml.webp"
                    />
                  </div>
                  <div class="sm:mt-0 mt-8">
                    <h2 class="mb-2 font-medium text-lg">朋友圈文案 🎉</h2>
                    <img
                      alt="Restored photo of my bro"
                      loading="lazy"
                      width="400"
                      height="400"
                      decoding="async"
                      data-nimg="1"
                      class="w-96 rounded-2xl sm:mt-0 mt-2"
                      style="color: transparent"
                      src="/big.webp"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <section
          id="testimonials"
          aria-label="What our customers are saying"
          class="py-10"
        >
          <div class="mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mx-auto md:text-center">
              <h1
                class="mx-auto max-w-5xl font-display text-4xl font-bold tracking-normal text-slate-900 sm:text-6xl"
              >
                深受全世界好多好多朋友的喜爱。
              </h1>
              <p class="mx-auto mt-6 max-w-xl text-lg text-slate-700 leading-7">
                看看我们的 30,000 多位用户是如何评价该产品的。
              </p>
            </div>
            <ul
              role="list"
              class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-16 lg:max-w-none lg:grid-cols-3"
            >
              <li>
                <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
                  <li
                    class="hover:scale-105 transition duration-300 ease-in-out"
                  >
                    <a target="_blank" rel="noreferrer">
                      <figure
                        class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"
                      >
                        <blockquote class="relative">
                          <p class="text-lg tracking-tight text-slate-900">
                            &quot;
                            <!-- -->
                            这款 AI
                            产品太赞了，我发朋友圈用它生成的文案，让我的朋友都以为我变文艺了，好评！
                            <!-- -->
                            &quot;
                          </p>
                        </blockquote>
                        <figcaption
                          class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6"
                        >
                          <div>
                            <div class="font-display text-base text-slate-900">
                              张薇
                            </div>
                            <div class="mt-1 text-sm text-slate-500">
                              自由作家
                            </div>
                          </div>
                          <div class="overflow-hidden rounded-full bg-slate-50">
                            <img
                              alt="picture of the testimonial author"
                              loading="lazy"
                              width="56"
                              height="56"
                              decoding="async"
                              data-nimg="1"
                              class="h-14 w-14 object-cover"
                              style="color: transparent"
                              src="/logo.webp"
                            />
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                  <li
                    class="hover:scale-105 transition duration-300 ease-in-out"
                  >
                    <a target="_blank" rel="noreferrer">
                      <figure
                        class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"
                      >
                        <blockquote class="relative">
                          <p class="text-lg tracking-tight text-slate-900">
                            &quot;
                            <!-- -->
                            用了这个 PipiGPT
                            之后，我的朋友圈和小红书文案变得生动有趣。它真的能读懂照片背后的故事，推荐给所有喜欢分享生活的朋友！
                            <!-- -->
                            &quot;
                          </p>
                        </blockquote>
                        <figcaption
                          class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6"
                        >
                          <div>
                            <div class="font-display text-base text-slate-900">
                              刘伟强
                            </div>
                            <div class="mt-1 text-sm text-slate-500">
                              摄影爱好者
                            </div>
                          </div>
                          <div class="overflow-hidden rounded-full bg-slate-50">
                            <img
                              alt="picture of the testimonial author"
                              loading="lazy"
                              width="56"
                              height="56"
                              decoding="async"
                              data-nimg="1"
                              class="h-14 w-14 object-cover"
                              style="color: transparent"
                              src="/logo.webp"
                            />
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                  <li
                    class="hover:scale-105 transition duration-300 ease-in-out"
                  >
                    <a target="_blank" rel="noreferrer">
                      <figure
                        class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"
                      >
                        <blockquote class="relative">
                          <p class="text-lg tracking-tight text-slate-900">
                            &quot;
                            <!-- -->
                            我喜欢记录生活中的点点滴滴，这个 PipiGPT
                            让我的记录更加有意义，它的智能推荐文案让每一张图片都充满故事。
                            <!-- -->
                            &quot;
                          </p>
                        </blockquote>
                        <figcaption
                          class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6"
                        >
                          <div>
                            <div class="font-display text-base text-slate-900">
                              陈叔叔
                            </div>
                            <div class="mt-1 text-sm text-slate-500">
                              生活记录者
                            </div>
                          </div>
                          <div class="overflow-hidden rounded-full bg-slate-50">
                            <img
                              alt="picture of the testimonial author"
                              loading="lazy"
                              width="56"
                              height="56"
                              decoding="async"
                              data-nimg="1"
                              class="h-14 w-14 object-cover"
                              style="color: transparent"
                              src="/logo.webp"
                            />
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
                  <li
                    class="hover:scale-105 transition duration-300 ease-in-out"
                  >
                    <a target="_blank" rel="noreferrer">
                      <figure
                        class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"
                      >
                        <blockquote class="relative">
                          <p class="text-lg tracking-tight text-slate-900">
                            &quot;
                            <!-- -->
                            自从使用了这款 PipiGPT
                            ，我的朋友圈和小红书文案再也不愁了！它不仅能根据图片生成贴切的文案，还能给我的内容增添魅力，让我每一次的分享都成为焦点。
                            <!-- -->
                            &quot;
                          </p>
                        </blockquote>
                        <figcaption
                          class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6"
                        >
                          <div>
                            <div class="font-display text-base text-slate-900">
                              王婷婷
                            </div>
                            <div class="mt-1 text-sm text-slate-500">
                              自媒体博主
                            </div>
                          </div>
                          <div class="overflow-hidden rounded-full bg-slate-50">
                            <img
                              alt="picture of the testimonial author"
                              loading="lazy"
                              width="56"
                              height="56"
                              decoding="async"
                              data-nimg="1"
                              class="h-14 w-14 object-cover"
                              style="color: transparent"
                              src="/logo.webp"
                            />
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                  <li
                    class="hover:scale-105 transition duration-300 ease-in-out"
                  >
                    <a
                      href="https://www.example.com/testimonial2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <figure
                        class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"
                      >
                        <blockquote class="relative">
                          <p class="text-lg tracking-tight text-slate-900">
                            &quot;
                            <!-- -->
                            PipiGPT
                            这款产品真的太棒了！我只需上传一张图片，它就能迅速给我创作出各种吸引人的文案。我的社交媒体内容质量明显提升，粉丝互动也多了起来。
                            <!-- -->
                            &quot;
                          </p>
                        </blockquote>
                        <figcaption
                          class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6"
                        >
                          <div>
                            <div class="font-display text-base text-slate-900">
                              李明轩
                            </div>
                            <div class="mt-1 text-sm text-slate-500">
                              内容创作者
                            </div>
                          </div>
                          <div class="overflow-hidden rounded-full bg-slate-50">
                            <img
                              alt="picture of the testimonial author"
                              loading="lazy"
                              width="56"
                              height="56"
                              decoding="async"
                              data-nimg="1"
                              class="h-14 w-14 object-cover"
                              style="color: transparent"
                              src="/logo.webp"
                            />
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
                  <li
                    class="hover:scale-105 transition duration-300 ease-in-out"
                  >
                    <a target="_blank" rel="noreferrer">
                      <figure
                        class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"
                      >
                        <blockquote class="relative">
                          <p class="text-lg tracking-tight text-slate-900">
                            &quot;
                            <!-- -->
                            每次不知道发什么文案的时候，PipiGPT
                            就像救星一样，准确又迅速地帮我找到感觉，真的太开心了。
                            <!-- -->
                            &quot;
                          </p>
                        </blockquote>
                        <figcaption
                          class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6"
                        >
                          <div>
                            <div class="font-display text-base text-slate-900">
                              王大妈
                            </div>
                            <div class="mt-1 text-sm text-slate-500">
                              退休教师
                            </div>
                          </div>
                          <div class="overflow-hidden rounded-full bg-slate-50">
                            <img
                              alt="picture of the testimonial author"
                              loading="lazy"
                              width="56"
                              height="56"
                              decoding="async"
                              data-nimg="1"
                              class="h-14 w-14 object-cover"
                              style="color: transparent"
                              src="/logo.webp"
                            />
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                  <li
                    class="hover:scale-105 transition duration-300 ease-in-out"
                  >
                    <a target="_blank" rel="noreferrer">
                      <figure
                        class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"
                      >
                        <blockquote class="relative">
                          <p class="text-lg tracking-tight text-slate-900">
                            &quot;
                            <!-- -->
                            I &#x27;ve just used it and damn I &#x27;ll keep
                            coming back! This is so good. Great work!
                            <!-- -->
                            &quot;
                          </p>
                        </blockquote>
                        <figcaption
                          class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6"
                        >
                          <div>
                            <div class="font-display text-base text-slate-900">
                              Lisa Gole
                            </div>
                            <div class="mt-1 text-sm text-slate-500">
                              Designer
                            </div>
                          </div>
                          <div class="overflow-hidden rounded-full bg-slate-50">
                            <img
                              alt="picture of the testimonial author"
                              loading="lazy"
                              width="56"
                              height="56"
                              decoding="async"
                              data-nimg="1"
                              class="h-14 w-14 object-cover"
                              style="color: transparent"
                              src="/logo.webp"
                            />
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                  <li
                    class="hover:scale-105 transition duration-300 ease-in-out"
                  >
                    <a target="_blank" rel="noreferrer">
                      <figure
                        class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"
                      >
                        <blockquote class="relative">
                          <p class="text-lg tracking-tight text-slate-900">
                            &quot;
                            <!-- -->
                            이 AI 제품을 사용해 보았는데, 사진을 기반으로 한
                            친구들의 소셜 미디어 게시물을 생성하는 기능이 정말
                            놀라워요. 소셜 미디어 활동이 한층 더 편리해졌습니다!
                            <!-- -->
                            &quot;
                          </p>
                        </blockquote>
                        <figcaption
                          class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6"
                        >
                          <div>
                            <div class="font-display text-base text-slate-900">
                              김지수
                            </div>
                            <div class="mt-1 text-sm text-slate-500">
                              블로거
                            </div>
                          </div>
                          <div class="overflow-hidden rounded-full bg-slate-50">
                            <img
                              alt="picture of the testimonial author"
                              loading="lazy"
                              width="56"
                              height="56"
                              decoding="async"
                              data-nimg="1"
                              class="h-14 w-14 object-cover"
                              style="color: transparent"
                              src="/logo.webp"
                            />
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
        <section id="pricing" class="py-10">
          <div class="mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mx-auto md:text-center">
              <h1
                class="mx-auto max-w-5xl font-display text-4xl font-bold tracking-normal text-slate-900 sm:text-6xl"
              >
                感谢您的大力支持！
              </h1>
              <p class="mx-auto mt-6 max-w-xl text-lg text-slate-700 leading-7">
                产品正在持续迭代中，请多给我们一些时间。<br />
                如果您有任何反馈，欢迎<a class="underline" href="/f">提建议</a>
                哦！
              </p>
            </div>
            <div class="mx-auto max-w-7xl bg-white">
              <div
                class="isolate mx-auto my-8 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 sm:gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:gap-6"
              >
                <div
                  class="mx-auto flex w-full max-w-lg flex-col justify-between rounded-lg border border-gray-100 bg-white p-6 text-center text-gray-900 shadow xl:p-7"
                >
                  <div>
                    <div class="flex items-center justify-between gap-x-4">
                      <h3
                        id="tier-basic"
                        class="text-gray-900 text-2xl font-semibold leading-8"
                      >
                        <div class="flex items-center space-x-2">
                          <span class="text-3xl font-semibold"
                            >$
                            <!-- -->
                            0</span
                          >
                        </div>
                      </h3>
                    </div>
                    <div
                      class="mt-4 text-start text-sm leading-6 text-gray-600"
                    >
                      <div>每日免费 5 次</div>
                      <div>-</div>
                    </div>
                    <p class="mt-6 flex items-baseline gap-x-1">
                      <span
                        class="text-2xl font-bold tracking-tight text-gray-900"
                        >5 次/每天</span
                      >
                    </p>
                    <ul
                      role="list"
                      class="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                    >
                      <li class="flex gap-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="h-6 w-5 flex-none text-green-400"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <div class="text-start">AI 识图，文案不输</div>
                      </li>
                      <li class="flex gap-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="h-6 w-5 flex-none text-green-400"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <div class="text-start">微信朋友圈文案</div>
                      </li>
                    </ul>
                  </div>
                  <div
                    class="flex w-full flex-wrap items-center justify-center gap-4"
                  >
                    <div
                      class="text-green-400 ring-1 ring-inset ring-green-200 hover:ring-green-300 w-fit cursor-pointer rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
                    >
                      <a
                        target="_blank"
                        class="flex justify-center gap-x-2"
                        href="/wechat.jpg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <title>wechat</title>
                          <path
                            d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"
                          ></path>
                        </svg>
                        <!-- -->
                        求打赏
                      </a>
                    </div>
                    <div
                      class="text-pink-400 ring-1 ring-inset ring-pink-200 hover:ring-pink-300 w-fit cursor-pointer rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-400"
                    >
                      <a
                        target="_blank"
                        class="flex justify-center gap-x-2"
                        href="/user/reward"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-clover"
                        >
                          <path
                            d="M16.2 3.8a2.7 2.7 0 0 0-3.81 0l-.4.38-.4-.4a2.7 2.7 0 0 0-3.82 0C6.73 4.85 6.67 6.64 8 8l4 4 4-4c1.33-1.36 1.27-3.15.2-4.2z"
                          ></path>
                          <path
                            d="M8 8c-1.36-1.33-3.15-1.27-4.2-.2a2.7 2.7 0 0 0 0 3.81l.38.4-.4.4a2.7 2.7 0 0 0 0 3.82C4.85 17.27 6.64 17.33 8 16"
                          ></path>
                          <path
                            d="M16 16c1.36 1.33 3.15 1.27 4.2.2a2.7 2.7 0 0 0 0-3.81l-.38-.4.4-.4a2.7 2.7 0 0 0 0-3.82C19.15 6.73 17.36 6.67 16 8"
                          ></path>
                          <path
                            d="M7.8 20.2a2.7 2.7 0 0 0 3.81 0l.4-.38.4.4a2.7 2.7 0 0 0 3.82 0c1.06-1.06 1.12-2.85-.21-4.21l-4-4-4 4c-1.33 1.36-1.27 3.15-.2 4.2z"
                          ></path>
                          <path d="m7 17-5 5"></path>
                        </svg>
                        <!-- -->
                        引荐计划
                      </a>
                    </div>
                  </div>
                  <div class="mt-8 hidden">
                    <button
                      type="button"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="radix-:R3dmt6:"
                      data-state="closed"
                      class="flex w-full flex-wrap items-center justify-center gap-4"
                    >
                      <div
                        aria-describedby="tier-basic"
                        class="text-sky-400 ring-1 ring-inset ring-sky-200 hover:ring-sky-300 block w-28 cursor-pointer rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                      >
                        <div class="flex justify-center gap-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <title>alipay</title>
                            <path
                              d="M16.076,13.732c0.862-1.494,1.55-3.196,2.003-5.045h-4.731V6.988h5.795V6.04h-5.795V3.207h-2.365 c-0.415,0-0.415,0.408-0.415,0.408V6.04H4.707v0.948h5.861v1.699H5.729v0.948h9.386c-0.343,1.18-0.805,2.288-1.352,3.294 c-3.045-1.002-6.295-1.814-8.337-1.314c-1.305,0.321-2.146,0.893-2.641,1.493c-2.267,2.751-0.641,6.929,4.147,6.929 c2.831,0,5.559-1.574,7.673-4.168C17.758,17.381,24,19.976,24,19.976v0.157c0,2.117-1.719,3.833-3.843,3.833H3.845 C1.72,23.966,0,22.249,0,20.132V3.868C0,1.75,1.72,0.034,3.845,0.034h16.312C22.281,0.034,24,1.75,24,3.868v12.409 c0,0-0.784-0.062-4.24-1.216C18.8,14.74,17.511,14.25,16.076,13.732z M5.834,13.034c-0.6,0.059-1.725,0.324-2.341,0.866 c-1.845,1.604-0.741,4.537,2.993,4.537c2.17,0,4.339-1.384,6.042-3.599C10.104,13.659,8.052,12.816,5.834,13.034z"
                            ></path>
                          </svg>
                          <!-- -->
                          支付宝
                        </div>
                      </div>
                      <div
                        aria-describedby="tier-basic"
                        class="text-green-400 ring-1 ring-inset ring-green-200 hover:ring-green-300 w-fit cursor-pointer rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
                      >
                        <div class="flex justify-center gap-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <title>wechat</title>
                            <path
                              d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"
                            ></path>
                          </svg>
                          <!-- -->
                          微信支付
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div
                  class="mx-auto flex w-full max-w-lg flex-col justify-between rounded-lg border border-gray-100 bg-white p-6 text-center text-gray-900 shadow "
                >
                  <div>
                    <div class="flex items-center justify-between gap-x-4">
                      <h3
                        id="tier-medium"
                        class="text-gray-900 text-2xl font-semibold leading-8"
                      >
                        <div class="flex items-center space-x-2">
                          <span class="text-3xl font-semibold"
                            >$
                            <!-- -->
                            3.99</span
                          >
                        </div>
                      </h3>
                    </div>
                    <div
                      class="mt-4 text-start text-sm leading-6 text-gray-600"
                    >
                      <div>限时 5 折，优惠码：MOFASI</div>
                      <div>-</div>
                    </div>
                    <p class="mt-6 flex items-baseline gap-x-1">
                      <span
                        class="text-2xl font-bold tracking-tight text-gray-900"
                        >不限次数/每月</span
                      >
                    </p>
                    <ul
                      role="list"
                      class="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                    >
                      <li class="flex gap-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="h-6 w-5 flex-none text-green-400"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <div class="text-start">AI 识图，文案不输</div>
                      </li>
                      <li class="flex gap-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="h-6 w-5 flex-none text-green-400"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <div class="text-start">微信朋友圈文案</div>
                      </li>
                      <li class="flex gap-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="h-6 w-5 flex-none text-green-400"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <div class="text-start">小红书文案</div>
                      </li>
                      <li class="flex gap-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="h-6 w-5 flex-none text-green-400"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <div class="text-start">支持多张图片识别</div>
                      </li>
                    </ul>
                  </div>
                  <div
                    class="hidden w-full flex-wrap items-center justify-center gap-4"
                  >
                    <div
                      class="text-green-400 ring-1 ring-inset ring-green-200 hover:ring-green-300 w-fit cursor-pointer rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
                    >
                      <a
                        target="_blank"
                        class="flex justify-center gap-x-2"
                        href="/wechat.jpg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <title>wechat</title>
                          <path
                            d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"
                          ></path>
                        </svg>
                        <!-- -->
                        求打赏
                      </a>
                    </div>
                    <div
                      class="text-pink-400 ring-1 ring-inset ring-pink-200 hover:ring-pink-300 w-fit cursor-pointer rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-400"
                    >
                      <a
                        target="_blank"
                        class="flex justify-center gap-x-2"
                        href="/user/reward"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-clover"
                        >
                          <path
                            d="M16.2 3.8a2.7 2.7 0 0 0-3.81 0l-.4.38-.4-.4a2.7 2.7 0 0 0-3.82 0C6.73 4.85 6.67 6.64 8 8l4 4 4-4c1.33-1.36 1.27-3.15.2-4.2z"
                          ></path>
                          <path
                            d="M8 8c-1.36-1.33-3.15-1.27-4.2-.2a2.7 2.7 0 0 0 0 3.81l.38.4-.4.4a2.7 2.7 0 0 0 0 3.82C4.85 17.27 6.64 17.33 8 16"
                          ></path>
                          <path
                            d="M16 16c1.36 1.33 3.15 1.27 4.2.2a2.7 2.7 0 0 0 0-3.81l-.38-.4.4-.4a2.7 2.7 0 0 0 0-3.82C19.15 6.73 17.36 6.67 16 8"
                          ></path>
                          <path
                            d="M7.8 20.2a2.7 2.7 0 0 0 3.81 0l.4-.38.4.4a2.7 2.7 0 0 0 3.82 0c1.06-1.06 1.12-2.85-.21-4.21l-4-4-4 4c-1.33 1.36-1.27 3.15-.2 4.2z"
                          ></path>
                          <path d="m7 17-5 5"></path>
                        </svg>
                        <!-- -->
                        引荐计划
                      </a>
                    </div>
                  </div>
                  <div class="mt-8">
                    <button
                      type="button"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="radix-:R3lmt6:"
                      data-state="closed"
                      class="flex w-full flex-wrap items-center justify-center gap-4"
                    >
                      <div
                        aria-describedby="tier-medium"
                        class="text-sky-400 ring-1 ring-inset ring-sky-200 hover:ring-sky-300 block w-28 cursor-pointer rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                      >
                        <div class="flex justify-center gap-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <title>alipay</title>
                            <path
                              d="M16.076,13.732c0.862-1.494,1.55-3.196,2.003-5.045h-4.731V6.988h5.795V6.04h-5.795V3.207h-2.365 c-0.415,0-0.415,0.408-0.415,0.408V6.04H4.707v0.948h5.861v1.699H5.729v0.948h9.386c-0.343,1.18-0.805,2.288-1.352,3.294 c-3.045-1.002-6.295-1.814-8.337-1.314c-1.305,0.321-2.146,0.893-2.641,1.493c-2.267,2.751-0.641,6.929,4.147,6.929 c2.831,0,5.559-1.574,7.673-4.168C17.758,17.381,24,19.976,24,19.976v0.157c0,2.117-1.719,3.833-3.843,3.833H3.845 C1.72,23.966,0,22.249,0,20.132V3.868C0,1.75,1.72,0.034,3.845,0.034h16.312C22.281,0.034,24,1.75,24,3.868v12.409 c0,0-0.784-0.062-4.24-1.216C18.8,14.74,17.511,14.25,16.076,13.732z M5.834,13.034c-0.6,0.059-1.725,0.324-2.341,0.866 c-1.845,1.604-0.741,4.537,2.993,4.537c2.17,0,4.339-1.384,6.042-3.599C10.104,13.659,8.052,12.816,5.834,13.034z"
                            ></path>
                          </svg>
                          <!-- -->
                          支付宝
                        </div>
                      </div>
                      <div
                        aria-describedby="tier-medium"
                        class="text-green-400 ring-1 ring-inset ring-green-200 hover:ring-green-300 w-fit cursor-pointer rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
                      >
                        <div class="flex justify-center gap-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <title>wechat</title>
                            <path
                              d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"
                            ></path>
                          </svg>
                          <!-- -->
                          微信支付
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div
                  class="mx-auto flex w-full max-w-lg flex-col justify-between rounded-lg border border-gray-100 bg-white p-6 text-center text-gray-900 shadow  xl:p-7"
                >
                  <div>
                    <div class="flex items-center justify-between gap-x-4">
                      <h3
                        id="tier-advanced"
                        class="text-green-400 text-2xl font-semibold leading-8"
                      >
                        <div class="flex items-center space-x-2">
                          <span class="text-3xl font-semibold"
                            >$
                            <!-- -->
                            49.9</span
                          >
                        </div>
                      </h3>
                      <p
                        class="rounded-full bg-green-400/10 px-2 py-1 text-xs font-semibold leading-5 text-green-400"
                      >
                        性价比最高
                      </p>
                    </div>
                    <div
                      class="mt-4 text-start text-sm leading-6 text-gray-600"
                    >
                      <div>限时 5 折，优惠码：MOFASI</div>
                      <div>-</div>
                    </div>
                    <p class="mt-6 flex items-baseline gap-x-1">
                      <span
                        class="text-2xl font-bold tracking-tight text-gray-900"
                        >永久会员</span
                      >
                    </p>
                    <ul
                      role="list"
                      class="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                    >
                      <li class="flex gap-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="h-6 w-5 flex-none text-green-400"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <div class="text-start">AI 识图，文案不输</div>
                      </li>
                      <li class="flex gap-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="h-6 w-5 flex-none text-green-400"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <div class="text-start">微信朋友圈文案</div>
                      </li>
                      <li class="flex gap-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="h-6 w-5 flex-none text-green-400"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <div class="text-start">小红书文案</div>
                      </li>
                      <li class="flex gap-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="h-6 w-5 flex-none text-green-400"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <div class="text-start">支持多张图片识别</div>
                      </li>
                      <li class="flex gap-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="h-6 w-5 flex-none text-green-400"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <div class="text-start">最快的客服响应</div>
                      </li>
                    </ul>
                  </div>
                  <div
                    class="hidden w-full flex-wrap items-center justify-center gap-4"
                  >
                    <div
                      class="text-green-400 ring-1 ring-inset ring-green-200 hover:ring-green-300 w-fit cursor-pointer rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
                    >
                      <a
                        target="_blank"
                        class="flex justify-center gap-x-2"
                        href="/wechat.jpg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <title>wechat</title>
                          <path
                            d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"
                          ></path>
                        </svg>
                        <!-- -->
                        求打赏
                      </a>
                    </div>
                    <div
                      class="text-pink-400 ring-1 ring-inset ring-pink-200 hover:ring-pink-300 w-fit cursor-pointer rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-400"
                    >
                      <a
                        target="_blank"
                        class="flex justify-center gap-x-2"
                        href="/user/reward"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-clover"
                        >
                          <path
                            d="M16.2 3.8a2.7 2.7 0 0 0-3.81 0l-.4.38-.4-.4a2.7 2.7 0 0 0-3.82 0C6.73 4.85 6.67 6.64 8 8l4 4 4-4c1.33-1.36 1.27-3.15.2-4.2z"
                          ></path>
                          <path
                            d="M8 8c-1.36-1.33-3.15-1.27-4.2-.2a2.7 2.7 0 0 0 0 3.81l.38.4-.4.4a2.7 2.7 0 0 0 0 3.82C4.85 17.27 6.64 17.33 8 16"
                          ></path>
                          <path
                            d="M16 16c1.36 1.33 3.15 1.27 4.2.2a2.7 2.7 0 0 0 0-3.81l-.38-.4.4-.4a2.7 2.7 0 0 0 0-3.82C19.15 6.73 17.36 6.67 16 8"
                          ></path>
                          <path
                            d="M7.8 20.2a2.7 2.7 0 0 0 3.81 0l.4-.38.4.4a2.7 2.7 0 0 0 3.82 0c1.06-1.06 1.12-2.85-.21-4.21l-4-4-4 4c-1.33 1.36-1.27 3.15-.2 4.2z"
                          ></path>
                          <path d="m7 17-5 5"></path>
                        </svg>
                        <!-- -->
                        引荐计划
                      </a>
                    </div>
                  </div>
                  <div class="mt-8">
                    <button
                      type="button"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="radix-:R3tmt6:"
                      data-state="closed"
                      class="flex w-full flex-wrap items-center justify-center gap-4"
                    >
                      <div
                        aria-describedby="tier-advanced"
                        class="bg-sky-400 text-white shadow-sm hover:bg-sky-500 block w-28 cursor-pointer rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                      >
                        <div class="flex justify-center gap-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <title>alipay</title>
                            <path
                              d="M16.076,13.732c0.862-1.494,1.55-3.196,2.003-5.045h-4.731V6.988h5.795V6.04h-5.795V3.207h-2.365 c-0.415,0-0.415,0.408-0.415,0.408V6.04H4.707v0.948h5.861v1.699H5.729v0.948h9.386c-0.343,1.18-0.805,2.288-1.352,3.294 c-3.045-1.002-6.295-1.814-8.337-1.314c-1.305,0.321-2.146,0.893-2.641,1.493c-2.267,2.751-0.641,6.929,4.147,6.929 c2.831,0,5.559-1.574,7.673-4.168C17.758,17.381,24,19.976,24,19.976v0.157c0,2.117-1.719,3.833-3.843,3.833H3.845 C1.72,23.966,0,22.249,0,20.132V3.868C0,1.75,1.72,0.034,3.845,0.034h16.312C22.281,0.034,24,1.75,24,3.868v12.409 c0,0-0.784-0.062-4.24-1.216C18.8,14.74,17.511,14.25,16.076,13.732z M5.834,13.034c-0.6,0.059-1.725,0.324-2.341,0.866 c-1.845,1.604-0.741,4.537,2.993,4.537c2.17,0,4.339-1.384,6.042-3.599C10.104,13.659,8.052,12.816,5.834,13.034z"
                            ></path>
                          </svg>
                          <!-- -->
                          支付宝
                        </div>
                      </div>
                      <div
                        aria-describedby="tier-advanced"
                        class="bg-green-400 text-white shadow-sm hover:bg-green-500 w-fit cursor-pointer rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
                      >
                        <div class="flex justify-center gap-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <title>wechat</title>
                            <path
                              d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"
                            ></path>
                          </svg>
                          <!-- -->
                          微信支付
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- demo pricing -->
        <Pricing />
        <!-- ---------------------- -->

      </div>
      <footer
        class="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3"
      >
        <div>
          Created by
          <!-- -->
          <a
            href="mailto:jimmylv@mofa.si"
            target="_blank"
            class="font-bold transition hover:text-black/50"
            >JimmyLv</a
          >
          <!-- -->
          (jimmylv@mofa.si).
        </div>
        <div class="flex space-x-4 pb-4 sm:pb-0">
          <a
            class="group"
            aria-label="JimmyLv on Twitter"
            href="https://twitter.com/Jimmy_JingLV"
          >
            <svg
              aria-hidden="true"
              class="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
            >
              <path
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84"
              ></path>
            </svg>
          </a>
          <a
            class="group"
            aria-label="JimmyLv on GitHub"
            href="https://github.com/JimmyLv"
          >
            <svg
              aria-hidden="true"
              class="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
            >
              <path
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
              ></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
    <div
      role="region"
      aria-label="Notifications (F8)"
      tabindex="-1"
      style="pointer-events: none"
    >
      <ol
        tabindex="-1"
        class="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:top-auto sm:bottom-0 sm:right-0 sm:flex-col md:max-w-[420px]"
      ></ol>
    </div>
  </div>
</template>

<script setup>
import Pricing from '../components/Pricing.vue'
</script>