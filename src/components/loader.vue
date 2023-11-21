<template>
    <div class="lds-ring -translate-y-[5px] translate-x-[5px]"><div></div><div></div><div></div><div></div></div>
</template>

<style>
.lds-ring {
  position: relative;
  height: 17px;
  width: 17px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 10px;
  height: 10px;
  margin: 8px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #ffffff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
<script setup>
</script>