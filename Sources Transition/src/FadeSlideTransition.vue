<template>
    <div class="relative">
        <Transition name="fadeslide" appear>
            <slot></slot>
        </Transition>
    </div>
</template>

<style>
.relative {
    position: relative;
}

.fadeslide-enter-active,
.fadeslide-leave-active {
    transition: .5s;
}

.fadeslide-leave-active {
    position: absolute;
    width: 100%;
}

.fadeslide-enter-from {
    opacity: 0;
    transform: translateX(10px);
}

.fadeslide-leave-to {
    opacity: 0;
    transform: translateX(-10px);
}
</style>