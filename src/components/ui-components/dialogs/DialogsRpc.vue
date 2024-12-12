<script setup lang="ts">
import { ref } from "vue";
import { useRPC } from "@/composables/useRPC";

const dialog = ref(false);
const { result, error, multiply } = useRPC();

const calculate = async () => {
    await multiply(3, 5); // Cambia los valores según sea necesario
};
</script>

<template>
  <div class="text-center mt-4 mt-sm-0">
    <v-btn color="primary" class="w-100" flat @click="dialog = true">
      Open RPC Dialog
      <v-dialog v-model="dialog" class="dialog-mw">
        <v-card>
          <v-card-title>RPC Example</v-card-title>
          <v-card-item>
            <v-card-text>
              <div v-if="result !== null">Result: {{ result }}</div>
              <div v-if="error">Error: {{ error }}</div>
              <v-btn color="primary" @click="calculate">Calculate 3 * 5</v-btn>
            </v-card-text>
          </v-card-item>
          <v-card-actions>
            <v-btn color="primary" @click="dialog = false" variant="tonal">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-btn>
  </div>
</template>
