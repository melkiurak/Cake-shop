<script setup lang="ts">
    import { IcNavArrowDown, IcNavArrowLeft, IcNavArrowRight } from '@kalimahapps/vue-icons';
    import { getCategorys } from '~/server/getData';
    import type { CatagorysCandy } from '~/types/candy';
    
    const slides = ref(5);
    const startIndex = ref(0);
   
    const FilterBtn = ['На день народження', 'З фруктами', 'Патріотичні', 'Для чоловіків', 'Для весілля', 'Без глютену', 'Веганські', 'Без цукру ',' Для дівчат', 'З квітами', 'Класичні рецепти'] 
    const { data: categories } = await useAsyncData<CatagorysCandy[]>('category', getCategorys);

    const visibleCategorys = computed(() => 
        categories.value?.slice(startIndex.value, startIndex.value + slides.value)
    )
   
    const handleSlideNext = () => {
        if(!categories.value) return
        if (startIndex.value + slides.value < categories.value.length) {
            startIndex.value++
        }
    }
    const handleSlidePrev = () => {
        if(startIndex.value >0){
            startIndex.value--
        }
    }
</script>
<template>
   <div class="flex gap-[80px]">
     <div class="flex-1 flex flex-col justify-between">
        <div class="flex flex-col gap-[30px]">
            <div class="max-w-[463px] w-full flex flex-col gap-[15px]">
                <h2>Looking for something delicious?</h2>
                <p class="text-base font-verdana text-[#43607C]">We have united confectioners from different cities so that the necessary goodies can be ordered even easier</p>
            </div>
            <div class="w-full relative h-[50px]" >
                <input type="text" class="w-full border border-[#DFDFDF] rounded-[5px] h-full pl-4 focus:outline-none">
                <button class="absolute top-0 right-0 bg-[#FDAD6D] h-full rounded-r-[5px] text-[#8E4A4E] font-verdana text-lg px-[30px] cursor-pointer">Search</button>
            </div>
            <div class="flex gap-2.5 flex-wrap">
                <button v-for="(item, i) in FilterBtn" :key="i" class="bg-[#FFF2F2] rounded-[40px] px-5 py-[8.5px] cursor-pointer">
                    <span class="text-[#8E4A4E] font-verdana">{{ item }}</span>
                </button>
                <button class="text-[#8E4A4E] flex  items-center gap-[5px] px-5 py-[8.5px] cursor-pointer">
                    <span class="font-verdana">Other options</span>
                    <IcNavArrowDown/>
                </button>
            </div>
        </div>
        <div class="flex flex-col gap-[15px]">
            <div class="flex justify-end">
                <button @click="handleSlidePrev">
                    <IcNavArrowLeft/>
                </button>
                <button @click="handleSlideNext">
                    <IcNavArrowRight />
                </button>
            </div>
            <div class="flex justify-between ">
                <div v-for="category in visibleCategorys" :key="category.id" class="flex flex-col items-center">
                    <img :src="category.img" alt="">
                    <h5 class="font-verdana-bold text-lg text-[#43607C]">{{ category.name }}</h5>
                </div>
            </div>
        </div>
     </div>
     <div class="flex gap-5">
        <div class="flex flex-col gap-5">
            <img src="/img/HeroImgSmall.png" alt="">
            <img src="/img/HeroImgSmall2.png" alt="">
        </div>
        <div>
            <img src="/img/HeroImgBig.png" alt="">
        </div>
     </div>
   </div>
</template>