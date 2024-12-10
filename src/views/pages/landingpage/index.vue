<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Header from '@/components/landingpage/layout/Header.vue';
import MainBanner from '@/components/landingpage/section/mainBanner.vue';
import OurProducts from '@/components/landingpage/section/ourProducts.vue';
import FrameWorks from '@/components/landingpage/section/frameWorks.vue';
import UserReview from '@/components/landingpage/section/userReview.vue';
import Features from '@/components/landingpage/section/otherFeatures.vue';
import AskQuestion from '@/components/landingpage/section/askQuestion.vue';
import BuyNow from '@/components/landingpage/section/buyNow.vue';
import Footer from '@/components/landingpage/layout/Footer.vue';

import 'aos/dist/aos.css';
import AOS from 'aos';
import DialogsActivator from '@/components/ui-components/dialogs/DialogsRestApi.vue';
import DialogsModel from '@/components/ui-components/dialogs/DialogsWebsocket.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import DialogsRestApi from '@/components/ui-components/dialogs/DialogsRestApi.vue';
import DialogsGraphQL from '@/components/ui-components/dialogs/DialogsGraphQL.vue';
import DialogsWebsocket from '@/components/ui-components/dialogs/DialogsWebsocket.vue';
import DialogsWebhook from '@/components/ui-components/dialogs/DialogsWebhook.vue';
import DialogsRpc from '@/components/ui-components/dialogs/DialogsRpc.vue';
import DialogsSoap from '@/components/ui-components/dialogs/DialogsSoap.vue';
import DialogsMqtt from '@/components/ui-components/dialogs/DialogsMqtt.vue';

onMounted(() => {
    AOS.init();
});

</script>

<template>
    <div class="lp-wraper ">
        <v-row>
            <v-col cols="12">
                <UiParentCard title="Apis Practice">
                    <v-row>
                        <v-col cols="12" sm="12" lg="4">
                            <UiChildCard title="RestAPI">
                                <DialogsRestApi />
                            </UiChildCard>
                        </v-col>
                        <v-col cols="12" sm="12" lg="4">
                            <UiChildCard title="GraphQL">
                                <DialogsGraphQL />
                            </UiChildCard>
                        </v-col>
                        <v-col cols="12" sm="12" lg="4" class="d-flex align-items-stretch">
                            <UiChildCard title="Websocket">
                                <DialogsWebsocket />
                            </UiChildCard>
                        </v-col>
                        <v-col cols="12" sm="12" lg="4" class="d-flex align-items-stretch">
                            <UiChildCard title="Webhook">
                                <DialogsWebhook />
                            </UiChildCard>
                        </v-col>
                        <v-col cols="12" sm="12" lg="4" class="d-flex align-items-stretch">
                            <UiChildCard title="RPC">
                                <DialogsRpc />
                            </UiChildCard>
                        </v-col>

                        <v-col cols="12" sm="12" lg="4" class="d-flex align-items-stretch">
                            <UiChildCard title="SOAP">
                                <DialogsSoap />
                            </UiChildCard>
                        </v-col>
                        <v-col cols="12" sm="12" lg="4" class="d-flex align-items-stretch">
                            <UiChildCard title="Scrollable">
                                <DialogsMqtt />
                            </UiChildCard>
                        </v-col>
                    </v-row>
                </UiParentCard>
            </v-col>
        </v-row>
        <Footer />
    </div>
</template>
