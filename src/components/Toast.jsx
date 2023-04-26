import { useStateContext } from "../contexts/ContextProvider";

export default function Toast() {
    const { toast } = useStateContext();

    return (
        <>
            {toast.show && (
                <div
                    className="flex justify-center justify-items-center fixed z-10 top-20 text-white animate-fade-in-down"
                    style={{ width: "100%", margin: "auto" } }
                >
                    <p
                        className="bg-emerald-500 py-3 px-5 rounded-xl"
                        style={{
                            textAlign: "center",
                            maxWidth: 350
                        }}
                    >
                        {toast.message}
                    </p>
                </div>
            )}
        </>
    );
}
