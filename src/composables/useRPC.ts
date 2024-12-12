import { ref } from "vue";

export function useRPC() {
    const result = ref<number | null>(null);
    const error = ref<string | null>(null);

    const multiply = async (a: number, b: number) => {
        try {
            const response = await fetch("http://localhost:8081/rpc/multiply", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ A: a, B: b }),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json();
            result.value = data.result;
        } catch (err) {
            error.value = (err as Error).message;
        }
    };

    return {
        result,
        error,
        multiply,
    };
}
