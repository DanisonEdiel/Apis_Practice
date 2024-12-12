<script setup lang="ts">
import { ref } from "vue";

const dialog = ref(false);

const openApiLink = () => {
    window.open("http://localhost:8002/get-voucher-authorization", "_blank");
};
</script>

<template>
  <div class="text-center mt-4 mt-sm-0">
    <!-- Botón que abre el diálogo -->
    <v-btn color="primary" class="w-100" flat @click="dialog = true">
      Open Dialog
    </v-btn>

    <!-- Diálogo -->
    <v-dialog v-model="dialog" class="dialog-mw">
      <v-card>
        <v-card-title>SOAP API Request</v-card-title>
        <v-card-text>
          <p>
            Click the button below to open the API response in a new tab.
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="openApiLink">
            Open API in New Tab
          </v-btn>
          <v-btn color="secondary" @click="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
