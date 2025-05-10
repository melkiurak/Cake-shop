<template>
    <header class="shadow h-[82px] flex items-center ">
        <div class="container flex items-center justify-between">
            <div class="flex items-center gap-[30px]">
                <h2 class="text-[#011936]"><a href="">MyCake</a></h2>
                <button class="bg-[#FFF2F2] rounded-[20px] flex items-center gap-2.5 py-2 px-9.5 text-[#8E4A4E]  ">
                    <MdLocationPin/>
                    <span class="text-[16px] font-bold">All Ukraine</span>
                </button>
            </div>
            <div>
                <nav>
                    <ul class="flex items-center gap-[30px]">
                        <li class="text-[#011936] text-lg"><a href="">Desserts</a></li>
                        <li class="text-[#011936] text-lg"><a href="">Best confectioners</a></li>
                        <li class="text-[#011936] text-lg"><a href="">Useful articles</a></li>
                    </ul>
                </nav>
            </div>
            <div class="flex items-center gap-[30px] w-[355px] justify-end text-[#43607C]">
                <ChMessages class="text-[32px]"/>
                <div class="flex items-center gap-2.5">
                    <CaUserAvatarFilled class="text-[32px]"/>
                    <span class="text-[16px]">User name</span>
                </div>
            </div>
        </div>
    </header>
</template>
<script setup lang="ts">
import { MdLocationPin,ChMessages,CaUserAvatarFilled} from '@kalimahapps/vue-icons';
</script>