<template>
  <div class="w-72 h-96 rounded-xl shadow-inner border-2 border-grey gradient">
    <div class="flex flex-col justify-center items-center pt-6">
      <div
        class="w-24 h-24 flex items-center justify-center rounded-full border-4 border-greyBtn fill-greyBtn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="w-16 h-16"
        >
          <path
            d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"
          />
        </svg>
      </div>
      <div class="grid grid-rows-2 text-center pt-2">
        <span class="text-xl text-greyBtm">
            {{fillerDate.email}}
        </span>
        <span class="text-md text-greyBtn">
            {{ fillerDate.username }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const fillerDate = ref({
  username: "V_Vaczi",
  email: "vvaczi@gmail.com",
  language: ["cz", "en", "ge"],
  theme: ["default", "dark"],
});

</script>

<style scoped>
.gradient {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.23842592592592593) 20%,
    rgba(255, 255, 255, 1) 60%
  );
}
</style>
