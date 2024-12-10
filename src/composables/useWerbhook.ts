import { ref } from "vue";

const events = ref<string[]>([]); // Almacena los eventos recibidos

const simulateWebhook = async () => {
    try {
        const response = await fetch("http://localhost:8000/webhook", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                event: "payment_successful",
                data: {
                    order_id: "123",
                    amount: 150.50,
                },
            }),
        });

        if (response.ok) {
            const data = await response.json();
            events.value.push(JSON.stringify(data));
        } else {
            console.error("Error fetching webhook:", response.status);
        }
    } catch (error) {
        console.error("Error connecting to webhook:", error);
    }
};

export function useWebhook() {
    return {
        events,
        simulateWebhook,
    };
}
