import { ref } from "vue";

export function useSoap() {
    const response = ref<string | null>(null);
    const error = ref<string | null>(null);
    const isLoading = ref(false);

    const callSoapApi = async () => {
        isLoading.value = true;
        try {
            const url = `${import.meta.env.VITE_SOAP_API_URL}/get-voucher-authorization`;
            const options: RequestInit = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            };

            const res = await fetch(url, options);

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            response.value = await res.text(); // SOAP response as plain text
        } catch (err: any) {
            error.value = err.message;
        } finally {
            isLoading.value = false;
        }
    };

    return {
        response,
        error,
        isLoading,
        callSoapApi,
    };
}
