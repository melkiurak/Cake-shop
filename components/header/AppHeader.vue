<template>
    <header class="shadow max-md:shadow-none h-[82px] flex items-center ">
        <div class="container flex items-center justify-between">
            <div class="flex items-center gap-[30px]">
                <h2 class="text-[#011936]"><a href="">MyCake</a></h2>
                <button class="bg-[#FFF2F2] rounded-[20px] flex items-center gap-2.5 py-2 px-9.5 text-[#8E4A4E] max-lg:hidden">
                    <MdLocationPin/>
                    <span class="text-base font-bold font-verdana-bold">All Ukraine</span>
                </button>
            </div>
            <div class="max-lg:hidden">
                <nav>
                    <ul class="flex items-center gap-[30px] text-[#011936] font-verdana">
                        <li><NuxtLink to="/desserts" >Desserts</NuxtLink ></li>
                        <li><NuxtLink >Best confectioners</NuxtLink ></li>
                        <li><NuxtLink >Useful articles</NuxtLink ></li>
                    </ul>
                </nav>
            </div>
            <div class="flex items-center gap-[30px] text-[#43607C] max-lg:hidden">
                <ChMessages class="text-[32px]"/>
                <div class="flex items-center gap-2.5">
                    <CaUserAvatarFilled class="text-[32px]"/>
                    <span class="text-base font-verdana">User name</span>
                </div>
            </div>
            <div class="bg-[#FFF2F2] rounded-full w-[50px] h-[50px] flex items-center justify-center lg:hidden">
                <button class="flex flex-col items-end justify-center gap-[6px] w-6 h-6 cursor-pointer">
                    <span class="w-full h-[3px] bg-[#A63A50] rounded-full"/>
                    <span class="w-full h-[3px] bg-[#A63A50] rounded-full"/>
                    <span class="w-4 h-[3px] bg-[#A63A50] rounded-full"/>
                </button>
            </div>
        </div>
    </header>
</template>
<script setup lang="ts">
import { MdLocationPin,ChMessages,CaUserAvatarFilled} from '@kalimahapps/vue-icons';
</script>