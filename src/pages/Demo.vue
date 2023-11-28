<template>
  <div id="__next" class="bg-[#f8fafc]">
    <Header />
    <div>
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
                  class="index-module_type__E-SaG relative text-pink-400" v-for="(letter, index) in displayedText" :key="index"
                >{{ letter }}</span>
              </span>
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
                    或拖拽至此处
                    (
                    图片大小
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
                GPT-4V APIKey (Limit: 100 / day)</label
              >
              <div class="flex w-full items-center space-x-2">
                <input
                  type="apikey"
                  class="flex h-10 rounded-md border border-input bg-background px-2 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                  placeholder="请填写你的 LLM API Key: sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                  value=""
                />
                <button
                  class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 !bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 w-24 bg-gray-200"
                >
                  清除
                </button>
                <button
                  class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 !bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-28 bg-black text-white"
                >
                  保存
                </button>
              </div>
            </div>
          </div>
          <!-- img -->
          <!-- <div>
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
          </div> -->
        </main>
        
        <!-- demo pricing -->
        <Pricing />
        <!-- ---------------------- -->
        <Cards />

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
      </div>
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
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Pricing from '../components/Pricing.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Cards from '../components/Cards.vue'

const words = ref(["小红书", "微博", "朋友圈"]);
const displayedText = ref("");
let wordIndex = ref(0);
let letterIndex = ref(0);

const typeWriterEffect = () => {
  const typingDelay = 200; // 打字间隔时间
  const pauseDuration = 1200; // 一个词完整出现后的停顿时间

  const typeNextLetter = () => {
    const word = words.value[wordIndex.value];

    if (letterIndex.value < word.length) {
      displayedText.value += word[letterIndex.value];
      letterIndex.value++;
      setTimeout(typeNextLetter, typingDelay);
    } else {
      // 停顿一定时间后，移动到下一个词
      setTimeout(() => {
        wordIndex.value = (wordIndex.value + 1) % words.value.length;
        letterIndex.value = 0;
        displayedText.value = "";
        typeNextLetter(); // 继续打下一个词
      }, pauseDuration);
    }
  };

  typeNextLetter(); // 开始打字
};

onMounted(() => {
  typeWriterEffect();
});
</script>