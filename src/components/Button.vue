<template>
    <button><slot></slot></button>
</template>

<style scoped lang="scss">
button {
    color: white;
    font-weight: 400;
    border-radius: 5px;
    position: relative;
    display: inline-block;
    cursor: pointer;
    border: none;
    outline: none;
    background-color: #FF5060;
    box-shadow: 0 2px 0 0 #a93e48;
    padding: 12px 20px;
    font-size: 18px;
    line-height: 21px;
    font-weight: bold;

    &:active {
    box-shadow: 0 0 #a93e48;
    top: 2px;
    }
}
</style>
