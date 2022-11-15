<template>
  <div class="absolute top-8 left-2/4 -translate-x-2/4 min-w-1/5 h-16 bg-white flex items-center justify-between px-8 rounded-3xl shadow-2xl">
    <div class="w-1/4 text-lg font-semibold" >{{ todaysDate() }}</div>
    <div class="w-48 h-10 bg-grey shadow-inner-custom rounded-3xl"></div>
    <div class="w-1/4 flex justify-end">
      <button class="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black hover:bg-[#d9d9d9] ease-in duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5"><path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"/></svg>
      </button>
      <div class="absolute top-20 right-0">
        <userCardComponent></userCardComponent>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import userCardComponent from './user-card.component.vue';

const todaysDate = () => {
  const date = new Date();

  const dateFormat = () => {
    return `${date.getUTCDate()}.${date.getUTCMonth()}.${date.getUTCFullYear()}`;
  };

  const toWeekday = () => {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return weekday[date.getUTCDay()];
  };

  return `${dateFormat()} | ${toWeekday()}`;
};
</script>
