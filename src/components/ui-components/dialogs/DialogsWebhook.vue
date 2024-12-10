<script setup lang="ts">
import { ref } from "vue";
import { useWebhook } from "@/composables/useWerbhook";

const { events, simulateWebhook } = useWebhook();
const dialog = ref(false);
</script>

<template>
  <div class="text-center mt-4 mt-sm-0">
    <v-btn color="primary" class="w-100" flat>
      Ver
      <v-dialog v-model="dialog" activator="parent" class="dialog-mw">
        <v-card>
          <v-card-title>Webhook Simulation</v-card-title>
          <v-card-item>
            <v-card-text>Un webhook es un mecanismo que permite que una aplicación envíe datos en tiempo real a otra
              aplicación cuando ocurre un evento específico. En lugar de que la aplicación receptora pregunte
              constantemente si hay nuevos datos (polling), el webhook automáticamente empuja la información a la
              aplicación receptora cuando el evento ocurre.
              Es como si recibieras un mensaje de texto cuando algo sucede, en lugar de tener que verificar manualmente
              si algo ha cambiado.
            </v-card-text>
            <v-btn color="primary" @click="simulateWebhook">Simulate Webhook</v-btn>
            <ul>
              <li v-for="(event, index) in events" :key="index">{{ event }}</li>
            </ul>
          </v-card-item>
          <v-card-actions>
            <v-btn color="primary" @click="dialog = false" variant="tonal">Cerrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-btn>
  </div>
</template>
