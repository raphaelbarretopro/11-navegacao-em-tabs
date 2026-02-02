import { Stack } from "expo-router"

export default function ProductsLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#E94560"
                },
                headerTintColor: "#FFFFFF"
            }}
        >
            <Stack.Screen name="index" options={{ headerTitle: "Lista de Produtos" }} />
            <Stack.Screen name="[id]" options={{ headerTitle: "Detalhes do Produto" }} />
        </Stack>
    )
}