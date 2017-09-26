<template>
    <div class="app-base">
        <div class="row middle-xs" style="height: 100%;">
            <div class="col-xs-12">
                <!--<div class="ms-Grid utility-bar">
                    <div class="ms-Grid-row">
                        <div class="ms-Grin-col ms-sm12" style="padding: 10px">
                            <a v-if="fullScreenEnabled" @click="toggleFullScreen" class="ms-slideRightIn10 ms-fontColor-neutralPrimary ms-fontColor-white&#45;&#45;hover" :title="!fullScreenMode?'FullScreen':'Exit FullScreen'">
                                <template v-if="!fullScreenMode">
                                    <i class="ms-Icon ms-Icon&#45;&#45;FullScreen" aria-hidden="true"></i>
                                </template>
                                <template v-else>
                                    <i class="ms-Icon ms-Icon&#45;&#45;BackToWindow" aria-hidden="true"></i>
                                </template>
                            </a>
                        </div>
                    </div>
                </div>-->
                <div class="row middle-xs">
                    <div class="col-xs-12">
                        <transition name="fade">
                            <keep-alive>
                                <component :is="currentView" @to-page="changeView"></component>
                            </keep-alive>
                        </transition>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    module.exports = require('./home');
</script>
<style src="./home.scss" lang="scss"></style>